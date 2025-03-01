"use client";  // Esta línea debe estar en la parte superior de tu archivo

import { useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; // Importa JS de Bootstrap aquí

export default function rooms() {
    return (
        <div className="bg-dark bg-opacity-75">
            <nav className="navbar sticky-top navbar-expand-lg bg-success">
                <div className="container-fluid">
                    <a className="navbar-brand mx-2" href="/">
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
                                <a className="nav-link active disabled" href="/html/rooms/">
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
            <div className="mx-5 my-5 py-5 px-5 bg-dark bg-opacity-75 rounded-5 shadow-lg">
                <h2 className="text-center mb-5 text-white" >Nuestros salones</h2>

                <div className="d-flex flex-wrap flex-row justify-content-evenly mt-5">
                    {/* Diseño simple, solo por practicar lo de react y next-js */}
                    <div
                        className="card bg-success-subtle bg-opacity-25 py-3 px-4 d-flex my-3 mx-5"
                        style={{ width: 400 }}
                    >
                        <div>
                            <img
                                src="https://setroimagen.com/wp-content/uploads/2017/10/bodas-en-el-hotel-santo-domingo-madrid_setroimagen_carlosylaura-085.jpg"
                                alt="Boda"
                                className="card-image-top img-fluid border rounded-3"
                                style={{ width: 350, height: 250 }}
                            />
                        </div>
                        <div className="text-center pt-2 px-2 card bg-warning-subtle bg-opacity-75 mt-3 border border-2 border-success-subtle">
                            <h4>Salón Imperial</h4>
                        </div>
                    </div>
                    <div
                        className="card bg-success-subtle bg-opacity-25 py-3 px-4 d-flex my-3 mx-5"
                        style={{ width: 400 }}
                    >
                        <div>
                            <img
                                src="https://www.ucentral.cl/ucentral/site/artic/20231123/imag/foto_0000013020231123135234/1_b.jpg"
                                alt="Nelson-Murdock"
                                className="card-image-top img-fluid border rounded-3"
                                style={{ width: 350, height: 250 }}
                            />
                        </div>
                        <div className="text-center pt-2 px-2 card bg-warning-subtle bg-opacity-75 mt-3 border border-2 border-success-subtle">
                            <h4>Salón Ejecutivo</h4>
                        </div>
                    </div>
                    <div
                        className="card bg-success-subtle bg-opacity-25 py-3 px-4 d-flex my-3 mx-5"
                        style={{ width: 400 }}
                    >
                        <div>
                            <img
                                src="https://www.constantinianorder.net/wp-content/uploads/2016/03/NATALE-2015-237....jpg"
                                alt="Gala de Beneficencia"
                                className="card-image-top img-fluid border rounded-3"
                                style={{ width: 350, height: 250 }}
                            />
                        </div>
                        <div className="text-center pt-2 px-2 card bg-warning-subtle bg-opacity-75 mt-3 border border-2 border-success-subtle">
                            <h4>Salón Real</h4>
                        </div>
                    </div>
                    <div
                        className="card bg-success-subtle bg-opacity-25 py-3 px-4 d-flex my-3 mx-5"
                        style={{ width: 400 }}
                    >
                        <div>
                            <img
                                src="https://www.dii.uchile.cl/wp-content/uploads/2013/03/conferencia-Kazuma-Yamane-1.jpg"
                                alt="Conferencia Internacional de Tecnología"
                                className="card-image-top img-fluid border rounded-3"
                                style={{ width: 350, height: 250 }}
                            />
                        </div>
                        <div className="text-center pt-2 px-2 card bg-warning-subtle bg-opacity-75 mt-3 border border-2 border-success-subtle">
                            <h4>Salón Vanguardia</h4>
                        </div>
                    </div>
                    <div
                        className="card bg-success-subtle bg-opacity-25 py-3 px-4 d-flex my-3 mx-5"
                        style={{ width: 400 }}
                    >
                        <div>
                            <img
                                src="https://www.garmoclick.com/wp-content/uploads/2024/03/lp3B6d0d.jpeg"
                                alt="Festival de Cine"
                                className="card-image-top img-fluid border rounded-3"
                                style={{ width: 350, height: 250 }}
                            />
                        </div>
                        <div className="text-center pt-2 px-2 card bg-warning-subtle bg-opacity-75 mt-3 border border-2 border-success-subtle">
                            <h4>Salón Estelar</h4>
                        </div>
                    </div>
                    <div
                        className="card bg-success-subtle bg-opacity-25 py-3 px-4 d-flex my-3 mx-5"
                        style={{ width: 400 }}
                    >
                        <div>
                            <img
                                src="https://cdn0.matrimonios.cl/vendor/3840/3_2/960/jpg/Eventos%20%C3%BAnicos.jpeg"
                                alt="Cena de Gala"
                                className="card-image-top img-fluid border rounded-3"
                                style={{ width: 350, height: 250 }}
                            />
                        </div>
                        <div className="text-center pt-2 px-2 card bg-warning-subtle bg-opacity-75 mt-3 border border-2 border-success-subtle">
                            <h4>Salón Dorado</h4>
                        </div>
                    </div>
                </div>
            </div>
            <footer className="bg-success text-white text-center py-1">
                <p>@Baroque inc.</p>
            </footer>
        </div>

    );
}
