import React from 'react';

function Scores({ index, score }) {
    const msj = `${index}.- ${score}pts`; // Usamos template literals en lugar de concatenación

    return (
        <div className='card px-3 py-1 mb-2 border border-black ScoreItem'>
            <h2 className='text-start fs-4'>{msj}</h2>
        </div>
    );
}

export default Scores;
