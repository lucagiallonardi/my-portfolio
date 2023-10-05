import React, { useState } from 'react';
import './Home.css';
import NavBar from '../../layouts/NavBar/NavBar';
import { Link, useNavigate, useLocation } from 'react-router-dom';  
import foto from '../../img/foto.jpg';

const Home = () => {
    const [exit, setExit] = useState(false);
    const navigate = useNavigate();

    const handleClick= (link)=>{
        setExit(true);
        setTimeout(() => {
            navigate(link);
          }, 800);
    }

    const location = useLocation();

    return (
        <div>
            <div className={`${location.pathname === '/' ? 'page-transition' : ''}`}></div>
            <div className={`${location.pathname === '/' ? 'page-transition2' : ''}`}></div>
            <div className={`${location.pathname === '/' ? 'page-transition3' : ''}`}></div>
            <div className={`${exit === true ? 'transiition-exit' : ''} `}></div>
            <div className={`${exit === true ? 'transiition2-exit' : ''} `}></div>
            <div className={`${exit === true ? 'transiition3-exit' : ''} `}></div>
            <NavBar navBarClass='navBarDisplay'/>
            <div className="homeContainer">
            <div className='homePres'>
                <div className="presContainer">
                <h2 className='presHola'>¡HOLA!</h2>
                <div className="divSoy">
                <h1>SOY</h1><h1 className='Luca'>LUCA</h1>
                </div>
                <h5 className='subtituloH5'>ANALISTA PROGRAMADOR | DESARROLLADOR WEB</h5>
                <p className='homeP'>Bienvenido(a) a mi espacio digital. Mi experiencia se enfoca en desarrollo web con ReactJs y NodeJs. También cuento con conocimientos de C#, C++ y VB. Te invito a explorar mi portafolio y mis proyectos. </p>
                <Link onClick={()=>handleClick("/about")}  className='homeLink'><div className='homeBoton'>MÁS SOBRE MI</div></Link>
            </div>
            </div>
            <img src={foto} alt='mi foto' className='homeImg'/>
            </div>


            <div className='rayas'>
                <div className="raya"></div>
                <div className="raya"></div>
                <div className="raya"></div>
                <div className="raya"></div>
                <div className="raya"></div>
                <div className="raya"></div>
                <div className="raya"></div>
                <div className="raya"></div>

                <div className="raya"></div>
                <div className="raya"></div>
                <div className="raya"></div>
                <div className="raya"></div>
                <div className="raya"></div>
                <div className="raya"></div>
                <div className="raya"></div>
                <div className="raya"></div>
            </div>
        </div>
    );
};

export default Home;