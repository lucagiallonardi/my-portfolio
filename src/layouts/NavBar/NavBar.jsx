import React, { useState } from 'react';
import './NavBar.css';
import foto from '../../img/foto.jpg';    
import { Link, useNavigate, useLocation } from 'react-router-dom'; 

const NavBar = (props) => {

    const [exit, setExit] = useState(false);
    const navigate = useNavigate();
    const location = useLocation();

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
            <div className={`${exit === true ? 'transiition-exit' : ''} `}></div>
            <div className={`${exit === true ? 'transiition2-exit' : ''} `}></div>
            <div className={`${exit === true ? 'transiition3-exit' : ''} `}></div>

        <div className='navBarContainer'>
        <div className={`navBar ${props.navBarClass}`}>
            <img src={foto} alt='mi foto' className='navBarImg'/>
            <div className="navBarBackground">
            <Link onClick={()=>handleClick("/")} className="navBarLink"><div className='navBarItem'>HOME</div></Link>
            <Link onClick={()=>handleClick("/about")} className="navBarLink"><div className='navBarItem'>SOBRE MI</div></Link>
            <Link onClick={()=>handleClick("/portfolio")} className="navBarLink"><div className='navBarItem'>PROYECTOS</div></Link>
            <Link onClick={()=>handleClick("/contacto")} className="navBarLink"><div className='navBarItem'>CONTACTO</div></Link>
            </div>
        </div>
        <div className='navBarIcons'>
        <Link onClick={()=>handleClick("/")} className='navBarIcoLinks'><i className="fa-solid fa-house navBarIco"></i></Link>
        <Link onClick={()=>handleClick("/about")} className='navBarIcoLinks'><i className="fa-solid fa-user navBarIco"></i></Link>
        <Link onClick={()=>handleClick("/portfolio")} className='navBarIcoLinks'><i className="fa-solid fa-image navBarIco"></i></Link>
        <Link onClick={()=>handleClick("/contacto")}className='navBarIcoLinks'><i className="fa-solid fa-paper-plane navBarIco"></i></Link>
        </div>
        </div>
        </div>
    );
};

export default NavBar;