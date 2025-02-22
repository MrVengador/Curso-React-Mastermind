import React, { useState } from 'react';

function Celda({ id, value, onGameOver, addScore }) {
    const [view, setView] = useState(false);

    function handleClick() {
        if (!view) { // Solo ejecuta la lógica si no ha sido clickeada antes
            setView(true); // Revela la celda
            if (value === "💣") {
                addScore(-1); // Incrementar el puntaje
                alert("GAME OVER");

                // onGameOver(); // Llamar a la función para manejar el fin del juego
            } else {
                addScore(value); // Incrementar el puntaje
                console.log("Valor es " + value);
            }
        }
    };


    return (
        <div>
            <button className="cell" id={id} onClick={handleClick}>
                {view ? value : " "} {/* Muestra el valor solo si view es true */}
            </button>
        </div>
    );
}

export default Celda;
