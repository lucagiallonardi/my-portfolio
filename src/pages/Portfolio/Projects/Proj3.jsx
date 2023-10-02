import React from 'react';
import NavBar from '../../../layouts/NavBar/NavBar';
import './Proj3.css';
import { Link, useLocation } from 'react-router-dom';

const Proj3 = () => {
    const location = useLocation();
    return (
        <div>
            <div className={`${location.pathname !== '/' ? 'page-transition' : ''}`}></div>
<div className={`${location.pathname !== '/' ? 'page-transition2' : ''}`}></div>
<div className={`${location.pathname !== '/' ? 'page-transition3' : ''}`}></div>
            <NavBar navBarClass='navBarDisplay'/>
            <div className="proj3Container">
            <h1>PROYECTOS REALIZADOS CON C++, C# Y VISUAL BASIC</h1>
            <div className='projVB'>
                <div className='projVBleft'>
            <h3>Take Away con Visual Basic</h3>
            <p><br/>Este es un proyecto que realice para el instituto donde estoy estudiando.<br/>
            Se trata de una aplicación para un take away. En la misma podremos agregar productos a nuestro carrito de compras<br/>
            donde deberemos indicar también si queremos retirar nuestro pedido por el local o que nos lo entregue un delivery.<br/>
            Luego pasamos a la ventana de medios de pago donde podemos realizarlo por transferencia, tarjetas o efectivo. <br/>
            Una vez finalizado el pedido pasa a la ventana de confirmación y al finalizar envía un email con los datos del pedido al encargado del take away.<br/>
            Se trata de una aplicación sencilla, de hecho no cuenta con base de datos pero crearla me ayudo a afianzar mis conocimientos de programación con Visual Basic.

                </p><div>
                        <Link className="linkButtProj"to={"https://github.com/lucagiallonardi/take-away-VB.git"} target='_label'><button><i className="fa-brands fa-github"></i> Github</button></Link></div></div>
                <div className="imgProjVBDiv">
                    <img src='https://i.postimg.cc/ZnzZCHdy/Captura2.png' alt='portada de proyecto' />
                </div></div>




                <div className='projC'>
                <div className="imgProjCDiv">
                    <img src='https://i.postimg.cc/3r91nRtP/Captura-C-1.png' alt='portada de proyecto' />
                    
                </div>
                <div className='projCright'>
            <h3>Proyecto de consola hecho con C#</h3>
            <p><br/>Este es otro proyecto que realice para el instituto donde estoy estudiando.<br/>
            Se trata de un programa cuya unica función es calcular el valor de e^x, donde x se trata de un valor 
            que deberá ingresar el usuario.<br/>
            Es un programa básico, muy básico, pero que me ayudo a tener un acercamiento importante a este lenguaje de programación.

                </p><div>
                        <Link className="linkButtProj"to={"https://github.com/lucagiallonardi/Proyecto_de_consola_C.git"} target='_label'><button><i className="fa-brands fa-github"></i> Github</button></Link></div>
                </div>
                </div>

                <div className='projCmas'>
                <div className='projCmasLeft'>
            <h3>Proyecto de consola hecho con C++</h3>
            <p><br/>Este es proyecto también lo hice para el instituto donde estoy estudiando.<br/>
            La consigna para este programa de consola era crear un juego llamado juego del agua, donde el jugador debe adivinar la posición de dos objetos 
            escondidos en una matriz de 3x2 - tres filas y dos columnas -.<br/>
            Para su realización se me ocurrió agregar una opción multijugador. En la opción de un solo jugador este 
            deberá adivinar la posición del objeto oculto, pero para la opción multijugador uno de los jugadores oculta el objetos
            y el otro adivina.<br/>
            Es un proyecto basico pero que tiene sus complicaciones. Me sirvió mucho para conocer el lenguaje C++. 

                </p><div>
                        <Link className="linkButtProj"to={"https://github.com/lucagiallonardi/proyecto_c.git"} target='_label'><button><i className="fa-brands fa-github"></i> Github</button></Link></div>
                </div>
                <div className="imgProjCmasDiv">
                    <img src='https://i.postimg.cc/VkFckG2b/capturac.png' alt='portada de proyecto' />
                    
                </div>
                </div>
                
                
            </div>
        </div>
    );
};

export default Proj3;