import React, { use, useState, useEffect } from 'react';
import Celda from './Celda';
import Timer from './Timer';
import Size from './Proporciones'
import Score from './Scores';

function Tablero() { // Se recibe size como prop correctamente

    const [MaxTime, setTime] = useState(0);
    const [Played, setReset] = useState(false);
    const [size, setSize] = useState(5);
    const [ValuesTab, setValuesTab] = useState(Array(25).fill(" "));
    // Estado para manejar el puntaje
    const [score, setScore] = useState(0); //Inicializo el score en 0
    const [scoreList, setScoreList] = useState([]);

    //Definir pro, valores componente
    const [MapValues, setMapValues] = useState(Array(size * size).fill(" "));
    const celdas = MapValues.map((value, index) =>
        <Celda key={index} value={value} id={index} viewValue={viewValue} />); //Agrego la clase playing si se esta jugado


    //Defino la lista de puntajes
    const ListTop = scoreList.map((pts, index) =>
        <Score key={index} score={pts} index={index + 1} />); //Agrego la clase playing si se esta jugado

    const time = <Timer MaxTime={MaxTime} Restart={Played} StopGame={GameOver} />;
    let currentSize = size; //variable para que solamente se cambie la proporcion al jugar (si es que se altera en medio del juego por curiosidad o etc...)
    let pause = true;

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



    //Use Effects

    //Reviso tablero
    // useEffect(() => {

    //     console.log(ValuesTab);

    // }, [ValuesTab]); // Este useEffect se ejecuta cuando Restart o MaxTime cambian

    //Proporciones
    useEffect(() => {

        setMapValues(Array(currentSize * currentSize).fill(" ")); //curiosamente si dejo size que se actualizo antes, no lo toma a la primera, por ende se dejo con current size
        setValuesTab(RandomBombs());
        ResetPulsado();

    }, [size]); //Aveces da error c

    //Local sotrange con puntajes

    // **Cargar datos desde localStorage**
    useEffect(() => {
        console.log("Cargando DATOS");
        const savedScores = JSON.parse(localStorage.getItem('scoreList'));
        if (savedScores) {
            setScoreList(savedScores);
        } else {
            // Si no hay datos en localStorage, asegura que al menos tengas un arreglo vacío
            setScoreList([]);
        }
    }, []);

    // **Guardar datos en localStorage** cuando scoreList cambia
    useEffect(() => {
        console.log("GUARDANDO DATOS");
        if (scoreList.length > 0) {
            localStorage.setItem('scoreList', JSON.stringify(scoreList));
        }
    }, [scoreList]);



    function RandomBombs() {
        // o cambiaba cuando se actualizaba el size a otro, o cuando pause era false, lo que no dejaba ver a jugador donde fallo.
        const bombsCount = Math.floor(Math.random() * size) + Math.floor(size) + 1; //Aveces da error, como valores sobre el lo maximo (ejem tab 10 a 910)
        console.log("Hay " + bombsCount + " bombas en el tablero de tamaño " + size);

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
        setSize(newSize);
        // console.log("El nuevo size es :" + currentSize);
    };







    const btnPlayGame = () => {
        pause = false;

        console.log(pause + " en pausa? ");
        setMapValues(Array(currentSize * currentSize).fill(" ")); //curiosamente si dejo size que se actualizo antes, no lo toma a la primera, por ende se dejo con current size
        setValuesTab(RandomBombs());


        setTime(60);  // Reiniciar el tiempo a 60 segundos
        setReset(true);  // Establecer el estado a `true` para reiniciar el temporizador
        ResetPulsado();
        setScore(0);

        // Después de un ciclo de renderizado, establecemos `Restart` a `false` para permitir futuros reinicios
        setTimeout(() => {
            setReset(false);
        }, 0);  // Este setTimeout con 0 milisegundos asegura que el valor de `Restart` vuelva a `false` inmediatamente después del renderizado.

        const BoardItem = document.getElementById("board")
        BoardItem.classList.add("Played");
    };






    function TopScores() {
        if (score !== 0) {

            // Copia de la lista de puntajes para evitar mutar el estado directamente
            let PrevScoreList = [...scoreList];

            // Agregar el puntaje actual a la lista
            PrevScoreList.push(score);

            // Eliminar puntajes duplicados utilizando Set
            PrevScoreList = [...new Set(PrevScoreList)];

            // Ordenar la lista de mayor a menor
            PrevScoreList.sort((a, b) => b - a);

            // Mantener solo los 10 mejores puntajes
            PrevScoreList = PrevScoreList.slice(0, 10);

            // Actualizar el estado con la nueva lista
            setScoreList(PrevScoreList);

            console.log("Lista de Scores (Top 10): ", PrevScoreList);
        }
    }


    function AddScore(id) {
        const cellValue = ValuesTab[id]; // Obtiene el valor de la celda

        if (cellValue === "💣") {
            console.log("Game Over");
            GameOver();
        }
        else if (cellValue !== " ") {
            //console.log("Revisando celda " + id + " que vale " + cellValue);
            setScore(prevScore => prevScore + parseInt(cellValue)); // Usa el estado anterior para actualizar el puntaje
        }
    }


    function viewValue(id) { //ver valor

        const BoardItem = document.getElementById("board")
        const Item = document.getElementById(id);

        if (BoardItem.classList.contains("Played") && !Item.classList.contains('pulsado')) {

            const valoresNuevos = MapValues.slice();
            const viewAdjacents = viewAdjacentSpaces(ValuesTab, id);

            for (let cellID of viewAdjacents) { //Para revelar todos los asignados

                const cellElement = document.getElementById(cellID);

                valoresNuevos[cellID] = ValuesTab[cellID];
                setMapValues(valoresNuevos);

                if (cellElement) {
                    cellElement.classList.add('pulsado');
                }
            }
        }
    }


    function viewAdjacentSpaces(tab, index) {
        const points = [];
        const BFSOrder = [index]; // Cola para BFS
        const visited = new Set(); // Conjunto para evitar procesar el mismo índice más de una vez
        visited.add(index);

        const adjacentOffsets = [-size, size, -1, 1, -size - 1, -size + 1, size - 1, size + 1]; // Ocho direcciones

        while (BFSOrder.length > 0) {
            const currentIndex = BFSOrder.shift();
            points.push(currentIndex);

            const row = Math.floor(currentIndex / size);
            const col = currentIndex % size;
            const cellElement = document.getElementById(index);

            if (!cellElement.classList.contains('pulsado')) {
                AddScore(currentIndex);
            }

            if (tab[currentIndex] === " ") {
                for (let offset of adjacentOffsets) {
                    const adjacentIndex = currentIndex + offset;
                    const adjacentRow = Math.floor(adjacentIndex / size);
                    const adjacentCol = adjacentIndex % size;

                    // Verificar que la celda adyacente está dentro de los límites y es válida
                    if (
                        adjacentIndex >= 0 && adjacentIndex < tab.length &&
                        isValidAdjacent(row, col, adjacentRow, adjacentCol) &&
                        !visited.has(adjacentIndex) && tab[adjacentIndex] !== "💣"
                    ) {
                        visited.add(adjacentIndex);
                        BFSOrder.push(adjacentIndex);
                    }
                }
            }
        }
        return points;
    }




    //Estado de game over
    function GameOver() {
        console.log(pause + "en pausa? Game over");

        setReset(true);  // Establecer el estado a `true` para reiniciar el temporizador
        setTime(0);
        TopScores();
        setScore(0);

        pause = true;
        const BoardItem = document.getElementById("board")
        BoardItem.classList.remove("Played");
    }

    function ResetPulsado() {
        const Items = document.getElementsByClassName("cell");

        for (let i = 0; i < Items.length; i++) {
            Items[i].classList.remove('pulsado');
        }
    }



    return (
        <div id='container_Game'>
            <div className="backgroundBlack rounded-5 mt-5 p-3">
                <div className='p-3 card' id='Top_Scores'>
                    <h2 className="text-center"><b>Top 10 Score</b></h2>
                    <div className='p-3' id='ListTopScores'>
                        {ListTop}
                    </div>
                </div>
            </div>

            <div className="backgroundBlack rounded-5 mt-5 col">
                <div className='bg-warning-subtle text-dark px-5 py-2 rounded-top-5'>
                    <h2 className="text-center">Buscaminas</h2>
                    <div className='row p-2 rounded-3'>
                        <h2 className='col-6 bg-light border border-black ' id='time'>{time}</h2>
                        <h2 className='col-6 bg-light border border-black ' id='score'>{score + " pts"}</h2>
                    </div>
                </div>

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
        </div>
    );
}

export default Tablero;
