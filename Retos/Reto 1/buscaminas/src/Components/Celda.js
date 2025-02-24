import React, { useState } from 'react';

function Celda({ id, value, addScore, onGameOver }) {


    const handleClick = () => {
        addScore(id); // Suma el valor
    };

    return (
        <div style={{ width: 50, height: 50 }}>
            <button className="cell" id={id} onClick={handleClick}>
                {value}  {/* Si 'ver' es true, muestra el valor, si es false, muestra " " */}
            </button>
        </div>
    );
}

export default Celda;
