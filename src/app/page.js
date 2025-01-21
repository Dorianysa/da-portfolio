'use client';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { useState } from 'react';
import Image from 'next/image';

export default function Home() {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    mensaje: '',
  });

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.mensaje.length < 10) {
      alert('El mensaje es demasiado corto. Por favor, proporcione más detalles.');
      return;
    }
    alert(`Gracias, ${formData.nombre}. Tu mensaje ha sido enviado correctamente.`);
    setFormData({ nombre: '', email: '', mensaje: '' });
  };

  return (
    <>
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

      <header className="bg-primary text-white text-center py-5 d-flex align-items-center justify-content-center flex-column flex-md-row">
        <Image
          src="/assets/img/foto-dory.jpg"
          alt="Foto de Dorianys"
          width={150}
          height={150}
          className="rounded-circle img-fluid"
          style={{
            objectFit: 'cover',
            border: '4px solid #ffffff',
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.3)',
          }}
        />
        <div className="text-center text-md-left">
          <h1>Dorianys Aponte Alvarez</h1>
          <p>Desarrolladora full stack en formación, apasionada por la tecnología y el aprendizaje continuo.</p>
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
      </header>

      <main>
        <div className="container my-5" id="habilidades">
          <h2 className="text-center">Habilidades</h2>
          <div className="row">
            {[
              { skill: 'HTML', level: 80, color: 'bg-success' },
              { skill: 'CSS', level: 70, color: 'bg-info' },
              { skill: 'JavaScript', level: 60, color: 'bg-warning' },
              { skill: 'Bootstrap', level: 50, color: 'bg-primary' },
            ].map(({ skill, level, color }) => (
              <div className="col-md-6 mb-4" key={skill}>
                <h5>{skill}</h5>
                <div className="progress">
                  <div
                    className={`progress-bar ${color}`}
                    role="progressbar"
                    style={{ width: `${level}%` }}
                    aria-valuenow={level}
                    aria-valuemin="0"
                    aria-valuemax="100"
                  >
                    {level}%
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="container my-5" id="proyectos">
          <h2 className="text-center">Proyectos</h2>
          <div className="row">
            {[
              {
                title: 'Gestión de Cursos Bootcamp - API RESTful con Node.js y Sequelize',
                description: 'Desarrollo de una API RESTful para la gestión de cursos Bootcamp en una empresa de adiestramiento. El proyecto incluye la implementación de relaciones en la base de datos utilizando Sequelize y Node.js. Durante el segundo Sprint, se agregó autenticación de usuarios mediante un campo de contraseña con validaciones de seguridad. Este proyecto sigue la metodología Scrum y está diseñado para optimizar el acceso y la administración de datos relacionados con cursos y usuarios.',
                image: '/assets/img/Api.png',
                link: 'https://github.com/Dorianysa/api-bootcamp',
              },
              {
                title: 'Gestión de Información de Animación Japonesa - API CRUD con Node.js',
                description: 'Desarrollo de un servidor con Node.js para la gestión de datos de animación japonesa. El proyecto permite realizar operaciones CRUD (Crear, Leer, Actualizar y Eliminar) sobre un archivo anime.json que contiene información detallada de series de anime, como nombre, género, año y autor. Incluye funcionalidades para listar todos los animes, acceder a un anime específico por su ID o nombre, y realizar pruebas automatizadas para verificar las respuestas del servidor. Este proyecto fue diseñado para ser evaluado mediante la herramienta Postman, asegurando la correcta implementación de las funcionalidades requeridas.',
                image: '/assets/img/node-js.png',
                link: 'https://github.com/Dorianysa/api-animacion-japonesa',
              },
              {
                title: 'Portfolio Dorianys Aponte - NextJS APP',
                description: 'Proyecto en NextJS con mi portafolio y el enlace a algunos de los proyectos realizados en el Bootcamp',
                image: '/assets/img/nextjs.png',
                link: 'https://github.com/Dorianysa/da-portfolio',
              },
            ].map(({ title, description, image, link }) => (
              <div className="col-md-4 mb-4" key={title}>
                <div className="card">
                  <Image src={image} alt={title} width={300} height={200} className="card-img-top" />
                  <div className="card-body text-center">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">{description}</p>
                    <a href={link} className="btn btn-primary" target="_blank" rel="noopener noreferrer">
                      Ver en GitHub
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="container my-5" id="contacto">
          <h2 className="text-center">Contacto</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="nombre">Nombre</label>
              <input
                type="text"
                id="nombre"
                className="form-control"
                value={formData.nombre}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Correo Electrónico</label>
              <input
                type="email"
                id="email"
                className="form-control"
                value={formData.email}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="mensaje">Mensaje</label>
              <textarea
                id="mensaje"
                className="form-control"
                rows="3"
                value={formData.mensaje}
                onChange={handleInputChange}
                required
              ></textarea>
            </div>
            <div className="text-center">
              <button type="submit" className="btn btn-primary">
                Enviar
              </button>
            </div>
          </form>
        </div>
      </main>

      <footer className="bg-dark text-white text-center py-3">
        <p>&copy; 2024 Mi Portafolio Personal DA</p>
      </footer>
    </>
  );
}
