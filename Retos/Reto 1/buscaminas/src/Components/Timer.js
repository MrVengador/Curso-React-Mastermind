import React, { useState, useEffect } from 'react';

const Timer = ({ MaxTime }) => {
    const [seconds, setSeconds] = useState(MaxTime);

    useEffect(() => {
        if (seconds <= 0)
            return; // Si el tiempo es 0, no iniciar otro intervalo

        const intervalId = setInterval(() => {
            setSeconds(prevSeconds => {
                if (prevSeconds <= 1) {
                    clearInterval(intervalId); // Detiene el intervalo cuando llega a 0
                    return 0;
                }
                return prevSeconds - 1;
            });
        }, 1000);

        return () => clearInterval(intervalId); // Limpieza cuando el componente se desmonta o se actualiza
    }, [seconds]); // Se ejecuta cuando `seconds` cambia

    return (
        <div>
            {seconds + " seg"}
        </div>
    );
};

export default Timer;
