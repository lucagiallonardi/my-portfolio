import React, { useState } from 'react';
import NavBar from '../../layouts/NavBar/NavBar';
import './Portfolio.css'
import { Link, useNavigate, useLocation } from 'react-router-dom';  

const Portfolio = () => {
    const location = useLocation();

    const [exit, setExit] = useState(false);
    const navigate = useNavigate();
  
    const handleClick= (link)=>{
        if(location.pathname !== link){
        setExit(true);
        setTimeout(() => {
            navigate(link);
          }, 800);
        }else{
            navigate(link);
        }
    }
    return (
        <div>
<div className={`${location.pathname !== '/' ? 'page-transition' : ''}`}></div>
            <div className={`${location.pathname !== '/' ? 'page-transition2' : ''}`}></div>
            <div className={`${location.pathname !== '/' ? 'page-transition3' : ''}`}></div>
            <div className={`${exit === true ? 'transiition-exit' : ''} `}></div>
            <div className={`${exit === true ? 'transiition2-exit' : ''} `}></div>
            <div className={`${exit === true ? 'transiition3-exit' : ''} `}></div>
            <NavBar/>
            <div className='PortfTodo'>
            <div className='PortfTituloContainer'>
            <h1 className='PortfTitulo'>PROYECTOS</h1></div>
            <div className="PortfImages">
            <Link onClick={()=>handleClick("/project2")}><div className="PortfItem"><img src='https://i.postimg.cc/sfksz713/smarttvweb.png' alt=''/><p className='pTituloProyecto pTituloProyectoFontSize'>Web fullstack con NodeJs React y MongoDB</p></div></Link>
                <Link onClick={()=>handleClick("/project1")}><div className="PortfItem"><img src='https://i.postimg.cc/1zCSbPKw/movies.jpg' alt=''/><p className='pTituloProyecto'>Web de peliculas con ReactJS</p></div></Link>
            </div>
            <div className="PortfImages">
                <Link onClick={()=>handleClick("/project3")}><div className="PortfItem"><img src='https://i.postimg.cc/ZnzZCHdy/Captura2.png' alt=''/><p className='pTituloProyecto pTituloProyectoFontSize'>Programas creados con C++, Visual Basic y C#</p></div></Link>
                <Link onClick={()=>handleClick("/project4")}><div className="PortfItem"><img src='https://i.postimg.cc/nrT5BRyn/imagencons.png' alt=''/><p className='pTituloProyecto pTituloProyectoFontSize'>Template para consesionarias con ReactJS y Bootstrap</p></div></Link>
            </div>
            </div>
            
        </div>
    );
};

export default Portfolio;