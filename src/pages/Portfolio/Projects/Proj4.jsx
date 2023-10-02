import React from 'react';
import NavBar from '../../../layouts/NavBar/NavBar';
import './Proj4.css';
import { Link, useLocation} from 'react-router-dom';

const Proj4 = () => {
    const location = useLocation();
    return (
        <div>
            <div className={`${location.pathname !== '/' ? 'page-transition' : ''}`}></div>
<div className={`${location.pathname !== '/' ? 'page-transition2' : ''}`}></div>
<div className={`${location.pathname !== '/' ? 'page-transition3' : ''}`}></div>
            <NavBar navBarClass='navBarDisplay'/>
            <div className="proj4Container">
                <div className='descProj4'>
            <h1>TEMPLATE PARA CONSESIONARIA DE AUTOS</h1>
            <h3>Tecnologías: ReactJs y Bootstrap</h3>
            <p>El mismo se trata simplemente de un template o una plantilla que puede ser utilizada ya sea para una web de una consesionaria de autos o bien cualquier
                negocio que pueda benficiarse utilizandola para mostrar sus productos y servicios.<br/>
                Como se puede observar, la web se encuentra carente de contenido, siendo el poco contenido que tiene no mas que simples ejemplos para que se pueda apreciar como se ven los distintos componentes y secciones de la web.<br/>
                El objetivo de crear este template fue en primer lugar afianzar mis conocimientos de Bootstrap y React combinandolos en un mismo proyecto a la vez que creo un producto que pueda ser ofrecido a empresas y emprendedores para potenciar su presencia en linea.<br/>
                Se podrá observar también clickeando en los diferentes botones de la barra de navegación que estos te redirigen a diferentes páginas. Este routing lo maneje con react-router-dom.<br/><br/>
                En resumen, es una web simple la cual busca mostrar a un potencial cliente ya sea una empresa o un/a  emprendedor/a, un ejemplo de partida para comprender como se distribuyen las secciones, las diferentes páginas, etc.<br/>
                A pesar de su simpleza es una web escalable a la que se puede añadir codigo backend para mostrar un catálogo de productos y servicios actualizados al igual que se puede agregar un formulario de contacto, medios de pago o chatbots que interactuen como asistentes virtuales.

                </p></div>
                <div className="imgProj4Div">
                    <img src='https://i.postimg.cc/c1KqRRJK/prueba3.jpg' alt='portada de proyecto' />
                    <div className="buttonsProj">
                        <Link className="linkButtProj"to={"https://github.com/lucagiallonardi/consesionare-template.git"} target='_label'><button><i className="fa-brands fa-github"></i> Github</button></Link><Link to={"https://consesionare-template.onrender.com/"} className="linkButtProj" target='_label'><button><i className="fa-solid fa-eye"></i> Preview</button></Link></div>
                </div>
            </div>
        </div>
    );
};

export default Proj4;