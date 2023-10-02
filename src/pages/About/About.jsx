import React, { useState } from 'react';
import { useInView } from 'react-intersection-observer';
import NavBar from '../../layouts/NavBar/NavBar';
import './About.css';
import { Link, useNavigate, useLocation } from 'react-router-dom';  
import cssLogo from './media/css.jpg';
import bootstrapLogo from './media/bootstrap.jpg';
import cLogo from './media/c++.jpg';
import hmtlLogo from './media/html.jpg';
import jsLogo from './media/js.svg';
import reactLogo from './media/react.svg';
import github from './media/github.jpg';
import mongoDB from './media/mongoDB.jpg';
import nodejs from './media/nodejs.jpg';
import visualbasic from './media/visualbasic.jpg';
import next from './media/nextjs.jpg';
import c from './media/c.jpg';



const About = () => {


  
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



  const {ref: myRef1, inView: myElementIsVisible1} = useInView();
  const {ref: myRef2, inView: myElementIsVisible2} = useInView();
  const {ref: myRef3, inView: myElementIsVisible3} = useInView();
  const {ref: myRef4, inView: myElementIsVisible4} = useInView();
  const {ref: myRef5, inView: myElementIsVisible5} = useInView();
  const {ref: myRef6, inView: myElementIsVisible6} = useInView();
  const {ref: myRef7, inView: myElementIsVisible7} = useInView();
  const {ref: myRef8, inView: myElementIsVisible8} = useInView();
  const {ref: myRef9, inView: myElementIsVisible9} = useInView();

  const {ref: myHabRef1, inView: myElementHabIsVisible1} = useInView();
  const {ref: myHabRef2, inView: myElementHabIsVisible2} = useInView();
  const {ref: myHabRef3, inView: myElementHabIsVisible3} = useInView();
  const {ref: myHabRef4, inView: myElementHabIsVisible4} = useInView();
  const {ref: myHabRef5, inView: myElementHabIsVisible5} = useInView();
  const {ref: myHabRef6, inView: myElementHabIsVisible6} = useInView();
  const {ref: myHabRef7, inView: myElementHabIsVisible7} = useInView();
  const {ref: myHabRef8, inView: myElementHabIsVisible8} = useInView();
  const {ref: myHabRef9, inView: myElementHabIsVisible9} = useInView();
  const {ref: myHabRef10, inView: myElementHabIsVisible10} = useInView();
  const {ref: myHabRef11, inView: myElementHabIsVisible11} = useInView();
  const {ref: myHabRef12, inView: myElementHabIsVisible12} = useInView();

    return (
        <div>
          <div className={`${location.pathname !== '/' ? 'page-transition' : ''}`}></div>
            <div className={`${location.pathname !== '/' ? 'page-transition2' : ''}`}></div>
            <div className={`${location.pathname !== '/' ? 'page-transition3' : ''}`}></div>
            <div className={`${exit === true ? 'transiition-exit' : ''} `}></div>
            <div className={`${exit === true ? 'transiition2-exit' : ''} `}></div>
            <div className={`${exit === true ? 'transiition3-exit' : ''} `}></div>
            <NavBar/>
            <div className="aboutTodo">
                <div className='aboutTituloContainer'>
                <h1 className='aboutTitulo'>ACERCA DE MI</h1>
                </div>
                <h2 className='h2About'>Mi nombre es Luca Giallonardi</h2>
                <p className='pAbout'>Soy un estudiante de sistemas y un apasionado desarrollador en búsqueda de nuevas oportunidades. Mi enfoque principal reside en el desarrollo web, donde cuento con un sólido conocimiento en tecnologías como ReactJS, Javascript, HTML5 y CSS3 para el frontend. Mientras que para el backend me he enfocado principalmente en NodeJS, Express y MongoDB.<br/><br/>
                He tenido la oportunidad de explorar diversas áreas, desde la estructura de datos hasta el diseño de bases de datos. Mi formación abarca conceptos esenciales de arquitectura informática, escritura de pseudocódigo y programación en C#, Visual Basic y C++, lo que me brinda una perspectiva integral en el mundo de la informática.<br/><br/>
                Me caracterizo por mi compromiso, dinamismo y responsabilidad. La adaptabilidad es una de mis fortalezas, lo que me permite enfrentar los desafíos con agilidad y encontrar soluciones analíticas de manera eficiente. Estoy emocionado por las oportunidades que el futuro tenga reservadas para mi y ansío trabajar junto a equipos entusiastas y apasionados.</p>
                <div className="aboutButtons">
                <a href="#skills" className='aboutLink'>HABILIDADES</a>
                <Link onClick={()=>handleClick("/contacto")} className='aboutLink'>CONTACTARME</Link>
                </div>
                
                <section class="timeline">
                <h1 ref={myRef8} className={`${myElementIsVisible8 ? "EducAboutVisible EducAbout" : "EducAbout"}`}>EDUCACIÓN</h1>
  <ul>
  <li>
      <div ref={myRef1} className={`${myElementIsVisible1 ? "animacionRight" : ""}`}>
        <span className='añoTimelime'>2012</span><br/>
        BACHILLERATO<br/>
        INSTITUTO AGROPECUARIO DE MONTE
      </div>
    </li><li>
      <div ref={myRef5} className={`${myElementIsVisible5 ? "animacionLeft" : ""}`}>
        <span className='añoTimelime'>2018-EN CURSO</span><br/>
        LICENCIATURA EN CIENCIAS FISICAS<br/>
        UNIVERSIDAD DE BUENOS AIRES
      </div>
    </li>
    <li>
      <div ref={myRef2} className={`${myElementIsVisible2 ? "animacionRight" : ""}`}>
        <span className='añoTimelime'>2022</span><br/>
        DISEÑO WEB RESPONSIVO<br/>
        FREE CODE CAMP<br/> 
        <Link to={"https://www.freecodecamp.org/certification/fcc2b570115-355b-4f28-ab5a-60a8caa240f4/responsive-web-design"} className='linkCertificado' target='_label'><p>CERTIFICADO</p></Link>
      </div>
    </li>
    <li>
      <div ref={myRef6} className={`${myElementIsVisible6 ? "animacionLeft" : ""}`}>
        <span className='añoTimelime'>2022</span><br/>
        LIBRERIAS DE DESARROLLO FRONT END<br/>
        FREE CODE CAMP<br/>
        <Link to={"https://www.freecodecamp.org/certification/fcc2b570115-355b-4f28-ab5a-60a8caa240f4/front-end-development-libraries"} target='_label' className='linkCertificado'><p>CERTIFICADO</p></Link>
      </div>
    </li>
    <li>
      <div ref={myRef3} className={`${myElementIsVisible3 ? "animacionRight" : ""}`}>
        <span className='añoTimelime'>2022</span><br/>
        ALGORITMOS DE JAVASCRIPT Y ESTRUCTURA DE DATOS<br/>
        FREE CODE CAMP<br/>
        <Link to={"https://www.freecodecamp.org/certification/fcc2b570115-355b-4f28-ab5a-60a8caa240f4/javascript-algorithms-and-data-structures"} className='linkCertificado' target='_label'><p>CERTIFICADO</p></Link>
      </div>
    </li>
    <li>
      <div ref={myRef7} className={`${myElementIsVisible7 ? "animacionLeft" : ""}`}>
        <span className='añoTimelime'>2022-EN CURSO</span><br/>
        TECNICATURA SUPERIOR EN ANALISIS DE SISTEMAS<br/>
        INSTITUTO DE ESTUDIOS SUPERIORES DE BUENOS AIRES<br/>       
      </div>
    </li>
    <li>
      <div ref={myRef4} className={`${myElementIsVisible4 ? "animacionRight" : ""}`}>
        <span className='añoTimelime'>2023</span><br/>
        ANALISTA PROGRAMADOR<br/>
        INSTITUTO DE ESTUDIOS SUPERIORES DE BUENOS AIRES<br/>
        <Link to={"https://i.postimg.cc/J04KVbnn/GIALLONARDI-CFP.png"} className='linkCertificado' target='_label'><p>CERTIFICADO</p></Link>       
      </div>
    </li>
  </ul>
</section>

            <section className='skills'>
            <div ref={myRef9} className={`${myElementIsVisible9 ? "EducAboutVisible skillsTitulo" : "skillsTitulo"}`} id="skills">MIS HABILIDADES</div>
            <div className="skillContainer">
            <div className="skillItem"><img ref={myHabRef1} className={`${myElementHabIsVisible1 ? "HabIco1 imgSkill" : "imgSkill"}`} src={hmtlLogo} alt='html5-logo'/>HTML5</div>
            <div className='skillItem'><img ref={myHabRef2} className={`${myElementHabIsVisible2 ? "HabIco2 imgSkill" : "imgSkill"}`}src={cssLogo} alt='css-logo'/>CSS3</div>
            <div className='skillItem'><img ref={myHabRef3} className={`${myElementHabIsVisible3 ? "HabIco3 imgSkill" : "imgSkill"}`}src={jsLogo} alt='js-logo'/>JAVASCRIPT</div>
            <div className='skillItem'><img ref={myHabRef4} className={`${myElementHabIsVisible4 ? "HabIco4 imgSkill" : "imgSkill"}`}src={reactLogo} alt='react-logo'/>REACT JS</div>
            <div className='skillItem'><img ref={myHabRef5} className={`${myElementHabIsVisible5 ? "HabIco5 imgSkill" : "imgSkill"}`}src={nodejs} alt='nodejs-logo'/>NODE JS</div>
            <div className='skillItem'><img ref={myHabRef6} className={`${myElementHabIsVisible6 ? "HabIco6 imgSkill" : "imgSkill"}`}src={next} alt='nextjs-logo'/>NEXT JS</div></div>
            
            <div className="skillContainer">
            <div className='skillItem'><img ref={myHabRef7} className={`${myElementHabIsVisible7 ? "HabIco7 imgSkill" : "imgSkill"}`}src={mongoDB} alt='mongodb-logo'/>MongoDB</div>
            <div className='skillItem'><img ref={myHabRef8} className={`${myElementHabIsVisible8 ? "HabIco8 imgSkill" : "imgSkill"}`}src={bootstrapLogo} alt='bootstrap-logo'/>BOOTSTRAP</div>
            <div className='skillItem'><img ref={myHabRef9} className={`${myElementHabIsVisible9 ? "HabIco9 imgSkill" : "imgSkill"}`}src={github} alt='git-logo'/>GIT</div>
            <div className='skillItem'><img ref={myHabRef10} className={`${myElementHabIsVisible10 ? "HabIco10 imgSkill" : "imgSkill"}`}src={cLogo} alt='c-logo'/>C++</div>
            <div className='skillItem'><img ref={myHabRef11} className={`${myElementHabIsVisible11 ? "HabIco11 imgSkill" : "imgSkill"}`}src={visualbasic} alt='vb-logo'/>VISUAL BASIC</div>
            <div className='skillItem'><img ref={myHabRef12} className={`${myElementHabIsVisible12 ? "HabIco12 imgSkill" : "imgSkill"}`}src={c} alt='c-logo'/>C#</div>
            </div>
            </section>
            </div>
        </div>
    );
};

export default About;