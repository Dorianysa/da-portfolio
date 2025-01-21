import Head from 'next/head';
import Image from 'next/image';

export default function Home() {
  return (
    <>
      <Head>
        <title>Mi Portafolio</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <a className="navbar-brand" href="#">DA Portafolio</a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <a className="nav-link" href="#habilidades">Habilidades</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#proyectos">Proyectos</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#intereses">Intereses Personales</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#contacto">Contacto</a>
            </li>
          </ul>
        </div>
      </nav>

      {/* Header */}
      <header className="bg-primary text-white text-center py-5">
        <div className="d-flex align-items-center justify-content-center flex-column flex-md-row">
          <Image
            src="/assets/img/foto-dory.jpg"
            alt="Foto de Dorianys"
            width={150}
            height={150}
            className="rounded-circle img-fluid"
          />
          <div className="text-center text-md-left">
            <h1>Dorianys Aponte Alvarez</h1>
            <p>
              Desarrolladora full stack en formación, apasionada por la tecnología y el aprendizaje continuo.
            </p>
            <div className="social-icons mt-3">
              <a href="https://www.instagram.com/dorianys_10" className="text-white mx-2">
                <i className="fab fa-instagram fa-2x"></i>
              </a>
              <a href="https://www.linkedin.com/in/dorianys/" className="text-white mx-2">
                <i className="fab fa-linkedin fa-2x"></i>
              </a>
              <a href="https://github.com/Dorianysa" className="text-white mx-2">
                <i className="fab fa-github fa-2x"></i>
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* Resto de las secciones */}
    </>
  );
}
