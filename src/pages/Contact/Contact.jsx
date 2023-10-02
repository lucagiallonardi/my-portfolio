import React from 'react';
import NavBar from '../../layouts/NavBar/NavBar';
import './Contact.css';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

const Contact = () => {
const location = useLocation();
    return (
        <div>
<div className={`${location.pathname !== '/' ? 'page-transition' : ''}`}></div>
<div className={`${location.pathname !== '/' ? 'page-transition2' : ''}`}></div>
<div className={`${location.pathname !== '/' ? 'page-transition3' : ''}`}></div>
            <NavBar/>
            <div className='ContactTodo'>
            <div className='ContactTituloContainer'>
            <h1 className='ContactTitulo'>CONTACTO</h1></div>
            <div className="ContactItems">
            
            
            <Link to={'mailto:lgiallonardi@gmail.com?Subject=He%20visto%20tu%20portfolio!'} className='ContactLink' target='_blank'><div className="contactItemDiv"><i className="fa-regular fa-envelope"></i>lgiallonardi@gmail.com</div></Link>
            <Link to={'https://github.com/lucagiallonardi'} className='ContactLink' target='_blank'><div className="contactItemDiv"><i className="fa-brands fa-github"></i>https://github.com/lucagiallonardi</div></Link>
            <Link to={'https://wa.me/1135562843'} className='ContactLink' target='_blank'><div className="contactItemDiv"><i className="fa-brands fa-whatsapp"></i>11-35562843</div></Link>
            <Link to={'https://www.linkedin.com/in/luca-giallonardi-084992154'} className='ContactLink' target='_blank'><div className="contactItemDiv"><i class="fa-brands fa-linkedin"></i>https://www.linkedin.com/in/luca-giallonardi</div></Link>
            
            </div>
            </div>
        </div>
    );
};

export default Contact;