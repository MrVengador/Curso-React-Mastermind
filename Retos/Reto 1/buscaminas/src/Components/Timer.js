import React, { useState, useEffect } from 'react';

const Timer = ({ MaxTime, Restart }) => {

    const [seconds, setSeconds] = useState(MaxTime); //Actualizo la variable seconds

    useEffect(() => {
        if (Restart == true) {
            setSeconds(MaxTime);
        }
    }, [Restart, MaxTime]); // Este useEffect se ejecuta cuando Restart o MaxTime cambian


    useEffect(() => {
        if (seconds <= 0) return; // Evita que el temporizador siga contando después de 0

        //Inicia el temporizador Orden 1
        const idTemporizador = setInterval(
            // seconds => seconds - 1 == setTimeLeft(function(prevTime) { return prevTime - 1;}
            () => { setSeconds(prevSeconds => prevSeconds - 1) } //Accion/ función 
            , 1000 //    cada tiempo en ms se hara la acción
        )

        //Desmonta el temporizador Orden 3
        return () => {
            clearInterval(idTemporizador);
        }
    }, [seconds]);




    //Orden 2
    return (
        <div className='lcdText text-danger borderInsideS'>
            {seconds + " seg"}
        </div>
    );
};

export default Timer;
