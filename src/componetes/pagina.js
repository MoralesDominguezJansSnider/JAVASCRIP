import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Carousel } from 'react-bootstrap';
import '../App.css';

const Pagina = () => {
    const tarjetas = [
        { titulo: 'React', texto: '...', imagen: '/imagenes/p1.avif' },
        { titulo: 'Bootstrap', texto: '...', imagen: '/imagenes/p2.jpg' },
        { titulo: 'JavaScript', texto: '...', imagen: '/imagenes/p3.avif' },
        { titulo: 'Node.js', texto: '...', imagen: '/imagenes/p4.avif' },
    ];

    return (
        <div className="d-flex flex-column min-vh-100">
            <header className="bg-primary text-white text-center py-4">
                <h1>Mi Página React con Bootstrap</h1>
            </header>

            {/* Banner usando <Carousel> de react-bootstrap */}
            <Carousel interval={3000} pause={false} fade>
                <Carousel.Item>
                    <img className="d-block w-100" src="/imagenes/BA1.jpg" alt="Banner 1" />
                </Carousel.Item>
                <Carousel.Item>
                    <img className="d-block w-100" src="/imagenes/BA4.jpg" alt="Banner 2" />
                </Carousel.Item>
                <Carousel.Item>
                    <img className="d-block w-100" src="/imagenes/BA3.jpg" alt="Banner 3" />
                </Carousel.Item>
            </Carousel>

            {/* Tarjetas */}
            <main className="container my-5">
                <div className="row g-4">
                    {tarjetas.map((item, index) => (
                        <div className="col-md-6 col-lg-3" key={index}>
                            <div className="card h-100">
                                <img src={item.imagen} className="card-img-top" alt={item.titulo} />
                                <div className="card-body">
                                    <h5 className="card-title">{item.titulo}</h5>
                                    <p className="card-text">{item.texto}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </main>

            <footer className="bg-dark text-white text-center py-4 mt-auto">
                <p>&copy; 2025 - Todos los derechos reservados</p>
                <p>Desarrollado por Jans Morales</p>
               
                <div>
                    <a href="https://github.com/tuusuario" target="_blank" rel="noopener noreferrer" className="text-white mx-2">
                        GitHub
                    </a>
                    
                </div>
            </footer>
        </div>
    );
};

export default Pagina;
