import { useState } from 'react';

function Card({imags}) {
    const [numImagen,setNumImagen]=useState(0)

    //Funcion respuesta al BTN
    const btnCambio = ()=>{
        const nextImagen= (numImagen+1)>2?0:(numImagen+1)
        setNumImagen(nextImagen)
    }
    return (
        <div className="card" style={{width: 250}}>
            <img src={"/img/"+imags[numImagen]+".jpg"} class="card-img-top"/>
            <div className="card-body">
                <h5 className="card-title">Fotos</h5>
                <p className="card-text">Este es un ejemplo de tarjeta para poder presentar imagenes de una forma dinámica y usando useState</p>
                <button class="btn btn-primary" onClick={btnCambio}>Cambia</button>
            </div>
        </div>
    );
  }
  
  export default Card;