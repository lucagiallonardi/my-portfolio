import React from 'react';
import NavBar from '../../../layouts/NavBar/NavBar';
import './Proj1.css';
import { Link, useLocation} from 'react-router-dom';

const Proj1 = () => {
    const location = useLocation();
    return (
        <div>
            <div className={`${location.pathname !== '/' ? 'page-transition' : ''}`}></div>
<div className={`${location.pathname !== '/' ? 'page-transition2' : ''}`}></div>
<div className={`${location.pathname !== '/' ? 'page-transition3' : ''}`}></div>
            <NavBar navBarClass='navBarDisplay'/>
            <div className="projContainer">
                <div className='descProj'>
            <h1>BUSCADOR DE PELICULAS</h1>
            <h3>Tecnologías: ReactJs y CSS3</h3>
            <p>El mismo consta de una grilla de peliculas con un buscador que nos permite realizar busquedas específicas ya sea de títulos o palabras claves a través del Hook de react useLocation.<br/>
                Al ingresar a cada película obtendremos la descripción y generos de la misma.<br/>
                Estos datos junto con las imagenes se obtienen de la API de TheMovieDB la cual consumo utilizando una función fetch. <br/><br/>
                Este es un link a la documentación de la API por si desean darle un vistazo: https://www.themoviedb.org/documentation/api<br/><br/>
                La solicitud fetch a esta API la realizo en un archivo llamado httpClient.js, el cual se encuentra dentro de la carpeta utils. El objetivo de hacerlo de esta manera es poder acceder a la funcion fetch tanto desde la página principal como desde la pagina de detalles de cada pelicula pero evitando la duplicación de código.<br/><br/>
                Para los estilos opte por realizarlos a través de modulos accediendo a ellos a través de las clases de cada elemento.<br/>
                El tiempo de carga de las paginas lo maneje agregando un Spinner con un transform: rotate(360deg). Este Spinner también es un componente separado para poder importarlo en las distintas páginas.<br/>
                La página tiene un diseño responsive manejado con media query y el routing lo realice utilizando elementos de react-router-dom.<br/><br/>
                Se trata de una web sencilla donde mi objetivo es mostrar un poco mis conocimientos de React y las prácticas que utilizo al trabajar con este framework, al igual que mostrar mis conocimientos de CSS y el diseño web responsivo.
                </p></div>
                <div className="imgProjDiv">
                    <img src='https://i.postimg.cc/gk0cRXZr/prueba.jpg' alt='portada de proyecto' />
                    <div className="buttonsProj">
                        <Link className="linkButtProj"to={"https://github.com/lucagiallonardi/movies-react-app/tree/main"} target='_label'><button><i className="fa-brands fa-github"></i> Github</button></Link><Link to={"https://grid-movies-react.onrender.com/"} className="linkButtProj" target='_label'><button><i className="fa-solid fa-eye"></i> Preview</button></Link></div>
                </div>
            </div>
        </div>
    );
};

export default Proj1;