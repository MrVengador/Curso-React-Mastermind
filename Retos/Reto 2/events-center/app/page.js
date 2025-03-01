"use client";  // Esta línea debe estar en la parte superior de tu archivo

import { useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; // Importa JS de Bootstrap aquí


// import 'bootstrap/dist/js/bootstrap.bundle.min.js';


// useEffect(() => {
//   import('bootstrap/dist/js/bootstrap.bundle.min.js');
// }, []);



export default function Home() {
  function hola() {
    console.log("HOla next image");
  }
  return (
    <div className="bg-dark bg-opacity-75">
      <nav className="navbar sticky-top navbar-expand-md bg-success">
        <div className="container-fluid">
          <a className="navbar-brand mx-2">
            <img
              src="https://icons.iconarchive.com/icons/crountch/one-piece-jolly-roger/256/Baroque-Works-icon.png"
              alt=""
              className="me-3"
              style={{ height: 50 }}
            />
            Baroque <small className="fs-6 ms-2">Centro de ventos</small>
          </a>
          <button
            className="navbar-toggler ms-auto"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div
            className="collapse navbar-collapse ms-5 justify-content-start"
            id="navbarNav"
          >
            {/* Menu de navegación */}
            <ul
              className="navbar-nav align-items-center  nav-underline"
              id="navbarSpy"
            >
              {/* <li class="nav-item mx-2"><a class="nav-link active disabled" href="#">Inicio</a></li> */}
              <li className="nav-item mx-2">
                <a className="nav-link" href="/html/last-events/">
                  Ultimos eventos
                </a>
              </li>
              <li className="nav-item mx-2">
                <a className="nav-link" href="/html/rooms/">
                  Nuestos salones
                </a>
              </li>
              <li className="nav-item mx-2">
                <a className="nav-link" href="#">
                  Reservar
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>


      {/* Carrusel */}
      <div id="Eventos" className="bg-dark bg-opacity-75">
        {/* Imagenes */}
        <div
          id="carouselExampleCaptions"
          className="carousel slide pt-5 mx-5"
          data-bs-ride="carousel"
        >
          <div className="carousel-indicators ">
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to={0}
              className="active"
              aria-current="true"
              aria-label="Slide 1"
            />
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to={1}
              aria-label="Slide 2"
            />
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to={2}
              aria-label="Slide 3"
            />
          </div>
          <div className="carousel-inner">
            <div className="carousel-item active" style={{ height: 500 }}>
              <div className="pb-5  d-flex justify-content-center">
                <img
                  src="https://www.agbrands.com.ar/wp-content/uploads/2019/03/Nenbutsudo-2-1024x683.jpg"
                  className="d-block img-fluid mb-5 pb-5"
                  alt="Terrazas Tematizadas"
                  style={{ height: 500 }}
                />
              </div>
              <div className="carousel-caption d-none d-md-block bg-dark bg-opacity-75 text-white rounded-3 ">
                <h5>Terrazas Tematizadas</h5>
                <p>
                  Alquila nuestras salas con terrazas decoradas con temáticas únicas,
                  ideales para todo tipo de eventos y celebraciones al aire libre.
                </p>
              </div>
            </div>
            <div className="carousel-item" style={{ height: 500 }}>
              <div className="pb-5  d-flex justify-content-center">
                <img
                  src="https://www.club50.cl/wp-content/uploads/2018/10/Principal-2.jpg"
                  className="d-block img-fluid mb-5 pb-5"
                  alt="Eventos Internacionales"
                  style={{ height: 500 }}
                />
              </div>
              <div className="carousel-caption d-none d-md-block bg-dark bg-opacity-75 text-white rounded-3 ">
                <h5>Eventos Internacionales</h5>
                <p>
                  Disfruta de nuestros salones ideales para albergar eventos
                  internacionales, con todas las comodidades y tecnología de punta.
                </p>
              </div>
            </div>
            <div className="carousel-item" style={{ height: 500 }}>
              <div className="pb-5  d-flex justify-content-center">
                <img
                  src="https://images.squarespace-cdn.com/content/v1/5dc1dbb5be82ec3a21427fe6/1675363308349-L41DPWKWMUT3WVYSS1VQ/DSC_2572-Edit.jpg"
                  className="d-block img-fluid mb-5 pb-5"
                  alt="Flexibilidad de Horarios"
                  style={{ height: 500 }}
                />
              </div>
              <div className="carousel-caption d-none d-md-block bg-dark bg-opacity-75 text-white rounded-3 ">
                <h5>Flexibilidad de Horarios Día/Noche</h5>
                <p>
                  Ofrecemos la flexibilidad de reservar nuestras salas tanto de día
                  como de noche, para adaptarnos a las necesidades de tu evento.
                </p>
              </div>
            </div>
          </div>

          {/* Botones de navegación */}
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>

      {/* Eventos */}
      <section>
        <div className="mx-5 my-5 py-5 px-5 bg-dark bg-opacity-75 rounded-5 shadow-lg">
          <h2 className="text-center mb-5 text-white" >Ultimos eventos</h2>
          <div className="d-flex flex-wrap flex-row justify-content-evenly mt-5">
            {/* Card */}
            <div
              className="card bg-success-subtle py-3 px-4 d-flex my-3 mx-5"
              style={{ width: 350 }}
            >
              <div>
                <img
                  src="https://setroimagen.com/wp-content/uploads/2017/10/bodas-en-el-hotel-santo-domingo-madrid_setroimagen_carlosylaura-085.jpg"
                  alt="Boda"
                  className="card-image-top img-fluid border rounded-3"
                  style={{ width: 300, height: 200 }}
                />
              </div>
              <div
                className="pt-2 px-2 card bg-secondary-subtle bg-opacity-25 mt-3"
                style={{ height: 125 }}
              >
                <h3>
                  Boda <br /> Richards-Storm
                </h3>
                <h4>Salón Imperial</h4>
                <p className="card-text">
                  <small className="text-body-secondary">04/02/2025</small>
                </p>
              </div>
            </div>
            <div
              className="card bg-success-subtle py-3 px-4 d-flex my-3 mx-5"
              style={{ width: 350 }}
            >
              <div>
                <img
                  src="https://www.ucentral.cl/ucentral/site/artic/20231123/imag/foto_0000013020231123135234/1_b.jpg"
                  alt="Nelson-Murdock"
                  className="card-image-top img-fluid border rounded-3"
                  style={{ width: 300, height: 200 }}
                />
              </div>
              <div
                className="pt-2 px-2 card bg-secondary-subtle mt-3"
                style={{ height: 125 }}
              >
                <h3>Reunión de abogados Nelson-Murdock </h3>
                <h4>Salón Ejecutivo</h4>
                <p className="card-text">
                  <small className="text-body-secondary">24/01/2025</small>
                </p>
              </div>
            </div>
            <div
              className="card bg-success-subtle bg-opacity-25  py-3 px-4 d-flex my-3 mx-5"
              style={{ width: 350 }}
            >
              <div>
                <img
                  src="https://logistica360.pe/wp-content/uploads/2023/08/Forum-EXPOGESTION-2023_1.png"
                  alt="Speedwagon"
                  className="card-image-top img-fluid border rounded-3"
                  style={{ width: 300, height: 200 }}
                />
              </div>
              <div
                className="pt-2 px-2 card bg-secondary-subtle mt-3"
                style={{ height: 125 }}
              >
                <h3>Reunión anual empresas Speedwagon</h3>
                <h4>Salón Ejecutivo</h4>
                <p className="card-text">
                  <small className="text-body-secondary">10/01/2025</small>
                </p>
              </div>
            </div>
          </div>
        </div>

      </section>


      <footer className="bg-success text-white text-center py-1">
        <p>@Baroque inc.</p>
      </footer>

    </div>

  );
}
