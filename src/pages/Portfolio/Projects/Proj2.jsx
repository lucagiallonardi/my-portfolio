import React from 'react';
import NavBar from '../../../layouts/NavBar/NavBar';
import './Proj1.css';
import './Proj2.css';
import { Link, useLocation } from 'react-router-dom';

const Proj2 = () => {
    const location = useLocation();
    return (
        <div>
            <div className={`${location.pathname !== '/' ? 'page-transition' : ''}`}></div>
<div className={`${location.pathname !== '/' ? 'page-transition2' : ''}`}></div>
<div className={`${location.pathname !== '/' ? 'page-transition3' : ''}`}></div>
            
<NavBar navBarClass='navBarDisplay'/>
            <div className="projContainer2">
                <div className='descProj2'>
            <h1>PLATAFORMA WEB INSPIRADA EN GOOGLE TV</h1>
            <h3>Tecnologías: ReactJs, NodeJs Express y MongoDB</h3>
            <p className='parrafoProj2'>El mismo consta de una plataforma web fullstack desde la cual cada usuario puede "instalar" las aplicaciones de Streaming que use para poder acceder a ellas de manera rapida. 
                Además de esto, el usuario tambien puede agregar "Favoritos", indicando titulo, link de la pagina y la url de alguna imagen que represente dicho favorito.<br/>
                Cada usuario puede personalizar los iconos que apareceran en inicio a su gusto. Para ello creé un sistema de registro y login utilizando nodejs, express y mongodb como base de datos.<br/>
                Para que estos datos estén seguros he cifrado las contraseñas en el servidor y utilicé un sistema de tokens para autenticar los inicios de sesión de los usuarios.<br/>
                Con respecto a las aplicaciones, al registrarse un usuario nuevo se crean automaticamente en la base de datos los items que seran las aplicaciones prederterminadas que apareceran en el Home de todos los usuarios.
                Una vez que el usuario inicie sesion podrá dirigirse a la sección "Apps" donde encontrara varios items predefinidos allí en forma de aplicaciones, los cuales podrá instalar o desinstalar segun desee, lo que hara que en la pagina de inicio aparezcan o desaparezcan según corresponda.<br/>
                Los procesos de instalar y desinstalar no son mas que solicitudes a la base de datos, donde al desinstalar se elimina un item asignado al usuario y al instalar se crea un item nuevo, mostrandose en la pantalla de inicio.<br/>
                Los estilos fueron realizados todos con CSS salvo algunos items como el navBar y algunos sliders que fueron creados con Bootstrap.<br/>
                Cabe aclarar que el diseño no es responsivo en su totalidad ya que esta web fue pensada en principio para ser utilizada únicamente en PC.<br/><br/>
                Los motivos para desarrollar esta web fueron varios, en principio para mostrar mis habilidades a la hora de crear una aplicación fullstack utilizando JavaScript como lenguaje base tanto para el frontend con React como para el backend con NodeJs, pero también por una cuestión personal dado que yo utilizo en mi día a día una computadora conectada por HDMI para ver mis plataformas de Streaming
                y hace rato tenía ganas de ponerme a desarrollar una interfaz inspirada en Google TV que me facilite la vida y, a su vez, luzca profesional. Asi fue, que al contar con los conocimientos necesarios me puse manos a la obra.<br/>
                Espero que les guste!               
                </p></div>
                <div className="imgProj2Div">
                    <img src='https://i.postimg.cc/SRsJPF06/prueba2.jpg' alt='portada de proyecto' />
                    <div className="buttonsProj">
                        <Link className="linkButtProj"to={"https://github.com/lucagiallonardi/smart-tv-web.git"} target='_label'><button><i className="fa-brands fa-github"></i> Github</button></Link><Link to={"https://smart-tv-web.onrender.com/"} className="linkButtProj" target='_label'><button><i className="fa-solid fa-eye"></i> Preview</button></Link></div>
                
                </div>
            </div>
        </div>
    );
};

export default Proj2;