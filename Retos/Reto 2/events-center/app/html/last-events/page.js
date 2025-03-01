"use client";  // Esta línea debe estar en la parte superior de tu archivo

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; // Importa JS de Bootstrap aquí


export default function events() {
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
                            <li className="nav-item mx-2">
                                <a className="nav-link active disabled" href="/html/last-events/">
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
            {/* Datos equipo */}
            <article>
                <section>
                    <div className="mx-5 my-5 py-5 px-5 bg-dark bg-opacity-75 rounded-5 shadow-lg">
                        <h2 className="text-center mb-5 text-white" >Ultimos eventos</h2>
                        <div className="d-flex flex-wrap flex-row justify-content-evenly mt-5">
                            {/* Diseño simple, solo por practicar lo de react y next-js */}
                            <div
                                className="card bg-info-subtle bg-opacity-50 py-3 px-4 d-flex my-3 mx-5"
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
                                className="card bg-info-subtle bg-opacity-50 py-3 px-4 d-flex my-3 mx-5"
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
                                    className="pt-2 px-2 card bg-secondary-subtle bg-opacity-25 mt-3"
                                    style={{ height: 125 }}
                                >
                                    <h3>
                                        Reunión de abogados Nelson-Murdock
                                    </h3>
                                    <h4>Salón Ejecutivo</h4>
                                    <p className="card-text">
                                        <small className="text-body-secondary">24/01/2025</small>
                                    </p>
                                </div>
                            </div>
                            <div
                                className="card bg-info-subtle bg-opacity-50 py-3 px-4 d-flex my-3 mx-5"
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
                                    className="pt-2 px-2 card bg-secondary-subtle bg-opacity-25 mt-3"
                                    style={{ height: 125 }}
                                >
                                    <h3>Reunión anual empresas Speedwagon</h3>
                                    <h4>Salón Ejecutivo</h4>
                                    <p className="card-text">
                                        <small className="text-body-secondary">10/01/2025</small>
                                    </p>
                                </div>
                            </div>
                            <div
                                className="card bg-info-subtle bg-opacity-50 py-3 px-4 d-flex my-3 mx-5"
                                style={{ width: 350 }}
                            >
                                <div>
                                    <img
                                        src="https://www.constantinianorder.net/wp-content/uploads/2016/03/NATALE-2015-237....jpg"
                                        alt="Gala de Beneficencia"
                                        className="card-image-top img-fluid border rounded-3"
                                        style={{ width: 300, height: 200 }}
                                    />
                                </div>
                                <div
                                    className="pt-2 px-2 card bg-secondary-subtle bg-opacity-25 mt-3"
                                    style={{ height: 125 }}
                                >
                                    <h3>Gala de Beneficencia Hope</h3>
                                    <h4>Salón Real</h4>
                                    <p className="card-text">
                                        <small className="text-body-secondary">15/12/2024</small>
                                    </p>
                                </div>
                            </div>
                            <div
                                className="card bg-info-subtle bg-opacity-50 py-3 px-4 d-flex my-3 mx-5"
                                style={{ width: 350 }}
                            >
                                <div>
                                    <img
                                        src="https://www.dii.uchile.cl/wp-content/uploads/2013/03/conferencia-Kazuma-Yamane-1.jpg"
                                        alt="Conferencia Internacional de Tecnología"
                                        className="card-image-top img-fluid border rounded-3"
                                        style={{ width: 300, height: 200 }}
                                    />
                                </div>
                                <div
                                    className="pt-2 px-2 card bg-secondary-subtle bg-opacity-25 mt-3"
                                    style={{ height: 125 }}
                                >
                                    <h3>Conferencia Internacional de Tecnología</h3>
                                    <h4>Salón Vanguardia</h4>
                                    <p className="card-text">
                                        <small className="text-body-secondary">22/11/2024</small>
                                    </p>
                                </div>
                            </div>
                            <div
                                className="card bg-info-subtle bg-opacity-50 py-3 px-4 d-flex my-3 mx-5"
                                style={{ width: 350 }}
                            >
                                <div>
                                    <img
                                        src="https://www.garmoclick.com/wp-content/uploads/2024/03/lp3B6d0d.jpeg"
                                        alt="Festival de Cine"
                                        className="card-image-top img-fluid border rounded-3"
                                        style={{ width: 300, height: 200 }}
                                    />
                                </div>
                                <div
                                    className="pt-2 px-2 card bg-secondary-subtle bg-opacity-25 mt-3"
                                    style={{ height: 125 }}
                                >
                                    <h3>Festival de Cine Independiente</h3>
                                    <h4>Salón Estelar</h4>
                                    <p className="card-text">
                                        <small className="text-body-secondary">05/11/2024</small>
                                    </p>
                                </div>
                            </div>
                            <div
                                className="card bg-info-subtle bg-opacity-50 py-3 px-4 d-flex my-3 mx-5"
                                style={{ width: 350 }}
                            >
                                <div>
                                    <img
                                        src="https://cdn0.matrimonios.cl/vendor/3840/3_2/960/jpg/Eventos%20%C3%BAnicos.jpeg"
                                        alt="Cena de Gala"
                                        className="card-image-top img-fluid border rounded-3"
                                        style={{ width: 300, height: 200 }}
                                    />
                                </div>
                                <div
                                    className="pt-2 px-2 card bg-secondary-subtle bg-opacity-25 mt-3"
                                    style={{ height: 125 }}
                                >
                                    <h3>Cena de Gala Hellfire Club</h3>
                                    <h4>Salón Dorado</h4>
                                    <p className="card-text">
                                        <small className="text-body-secondary">18/10/2024</small>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </article>

            <footer className="bg-success text-white text-center py-1">
                <p>@Baroque inc.</p>
            </footer>

        </div>


    );
}
