import React, { use, useState, useEffect } from 'react';
import Celda from './Celda';
import Timer from './Timer';
import Size from './Proporciones'

function Tablero() { // Se recibe size como prop correctamente

    const [MaxTime, setTime] = useState(0);
    const [Played, setReset] = useState(false);
    const [size, setSize] = useState(5);
    const [ValuesTab, setValuesTab] = useState(Array(25).fill(" "));



    const time = <Timer MaxTime={MaxTime} Restart={Played} />;
    let currentSize = size; //variable para que solamente se cambie la proporcion al jugar (si es que se altera en medio del juego por curiosidad o etc...)
    let pause = true;

    useEffect(() => {

        console.log(ValuesTab);

    }, [ValuesTab]); // Este useEffect se ejecuta cuando Restart o MaxTime cambian


    function RandomBombs() {
        const bombsCount = Math.floor(Math.random() * size) + 2;
        console.log("Hay " + bombsCount + " bombas en el tablero.");

        let newTab = Array(size * size).fill(" ");
        let bombPositions = [];

        for (let i = 0; i < bombsCount; i++) {
            let randomPos;

            // Para que no se repita la posición
            do {
                randomPos = Math.floor(Math.random() * (size * size)); // Corregido a "size"
            } while (bombPositions.includes(randomPos)); // Busca una nueva posición si ya está ocupada

            bombPositions.push(randomPos); // Añadir la nueva posición al array
            newTab[randomPos] = "💣"; // Colocar la bomba en la posición generada
        }

        // Llamada para contar las bombas adyacentes
        newTab = countAdjacentBombs(newTab);
        return newTab;
    }

    function countAdjacentBombs(tab) {
        const adjacentOffsets = [
            -1,  // izquierda
            1,   // derecha
            -size, // arriba
            size,  // abajo
            -size - 1, // arriba izquierda
            -size + 1, // arriba derecha
            size - 1, // abajo izquierda
            size + 1, // abajo derecha
        ];

        for (let i = 0; i < tab.length; i++) {
            // Solo proceder si la celda no contiene una bomba
            if (tab[i] !== "💣") {
                let bombCount = 0;

                // Verificar si la celda está en el borde o esquina
                const row = Math.floor(i / size);
                const col = i % size;

                // Revisar celdas adyacentes
                for (let offset of adjacentOffsets) {
                    const adjacentIndex = i + offset;

                    // Comprobar si la celda adyacente está dentro de los límites del tablero
                    // Verifica si la celda adyacente está en la misma fila o no está fuera de los límites
                    if (adjacentIndex >= 0 && adjacentIndex < tab.length) {
                        const adjacentRow = Math.floor(adjacentIndex / size);
                        const adjacentCol = adjacentIndex % size;

                        // Si es una bomba y está dentro del borde, contarla
                        if (tab[adjacentIndex] === "💣" && isValidAdjacent(row, col, adjacentRow, adjacentCol)) {
                            bombCount++;
                        }
                    }
                }

                // Si hay bombas adyacentes, colocar el número correspondiente
                if (bombCount > 0) {
                    tab[i] = bombCount.toString(); // Coloca el número de bombas adyacentes
                }
            }
        }

        return tab;
    }

    function isValidAdjacent(row, col, adjacentRow, adjacentCol) {
        // Evitar que se cuenten las posiciones fuera del tablero
        return Math.abs(row - adjacentRow) <= 1 && Math.abs(col - adjacentCol) <= 1;
    }





    const sizeController = (newSize) => { //Es lo mismo que una funcion pero más corto, "recordar".
        currentSize = newSize;
        // console.log("El nuevo size es :" + currentSize);
    };



    //Definir pro, valores componente
    const [MapValues, setMapValues] = useState(Array(size * size).fill(" "));
    const celdas = MapValues.map((value, index) =>
        <Celda key={index} value={value} id={index}
            addScore={AddScore} />); //Agrego la clase playing si se esta jugado




    const btnPlayGame = () => {

        setSize(currentSize);

        setMapValues(Array(currentSize * currentSize).fill(" ")); //curiosamente si dejo size que se actualizo antes, no lo toma a la primera, por ende se dejo con current size
        setValuesTab(RandomBombs);

        setTime(60);  // Reiniciar el tiempo a 60 segundos
        setReset(true);  // Establecer el estado a `true` para reiniciar el temporizador

        // Después de un ciclo de renderizado, establecemos `Restart` a `false` para permitir futuros reinicios
        setTimeout(() => {
            setReset(false);
        }, 0);  // Este setTimeout con 0 milisegundos asegura que el valor de `Restart` vuelva a `false` inmediatamente después del renderizado.

    };




    // Estado para manejar el puntaje
    const [score, setScore] = useState(0); //Inicializo el score en 0

    function AddScore(id) { //se llama desde celda
        if (Played == false) {

            const cellValue = ValuesTab[id]; // Obtiene el valor de la celda
            console.log(ValuesTab);

            // const cellValue = Tableros[1][id]; // Obtiene el valor de la celda
            console.log("cell " + id + ": " + cellValue);
            viewValue(id);

            if (cellValue === "💣") {
                setScore(0); // Si es una bomba, reinicia el puntaje
                console.log("Game Over");
                GameOver();
            }
            else {
                if (cellValue !== " ") {
                    setScore(parseInt(score) + parseInt(cellValue));
                }
            }
        }
    }

    function viewValue(id) { //ver valor
        const valoresNuevos = MapValues.slice();
        valoresNuevos[id] = ValuesTab[id];
        // valoresNuevos[id] = Tableros[1][id];
        console.log(ValuesTab[id])
        setMapValues(valoresNuevos);

    }


    //Estado de game over
    function GameOver() {
        setReset(true);  // Establecer el estado a `true` para reiniciar el temporizador
        setTime(0);
        pause = true;
    }




    return (
        <div className="bg-dark rounded-5 mt-5">
            <div className='bg-warning-subtle text-dark px-5 py-2 rounded-top-5'>
                <h2 className="text-center">Buscaminas</h2>
                <div className='row p-2 rounded-3'>
                    <h2 className='col-6 bg-light border border-black ' id='time'>{time}</h2>
                    <h2 className='col-6 bg-light border border-black ' id='score'>{score + " pts"}</h2>
                </div>
            </div>

            {/* Contenedor del tablero donde se colocan las celdas */}
            <div className='card p-1 mt-5 mb-4 mx-5 '
                id='board' style={{
                    gridTemplateRows: `repeat(${size}, 1fr)`,
                    gridTemplateColumns: `repeat(${size}, 0fr)`,
                }}>
                {celdas}
            </div>
            <div>
                <Size setBoardSize={sizeController} />

                <button className='btn btn-success px-5 mb-3'
                    onClick={btnPlayGame}>
                    Jugar
                </button>
            </div>
        </div>
    );
}

export default Tablero;
