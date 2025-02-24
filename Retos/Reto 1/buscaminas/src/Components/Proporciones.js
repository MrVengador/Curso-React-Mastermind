import React, { useState } from 'react';

function Size({ setBoardSize }) {
    const [selectedSize, setSelectedSize] = useState(5); // Tamaño por defecto 5

    const handleSizeChange = (event) => {
        const newSize = event.target.value;
        setSelectedSize(newSize); // Actualiza el tamaño seleccionado
        setBoardSize(newSize); // Llama a la función del padre para actualizar el tamaño del tablero
    };

    return (
        <div className='my-5 fs-6 d-flex justify-content-center'>
            <label htmlFor="boardSize" className='mx-3'>Seleccione las proporciones del tablero: </label>
            <select id="boardSize" value={selectedSize} onChange={handleSizeChange}>
                <option value={5}>5</option>
                <option value={6}>6</option>
                <option value={7}>7</option>
                <option value={8}>8</option>
                <option value={9}>9</option>
                <option value={10}>10</option>
            </select>
        </div>
    );
}

export default Size;
