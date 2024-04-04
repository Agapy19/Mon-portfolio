import React from 'react'
import './About.css'
import { FaAward } from "react-icons/fa6";
import { TbUsers } from "react-icons/tb";
import { VscFolderLibrary } from "react-icons/vsc";
const About = () => {
  return (
    <section id='about'>
      {/* <h5>fais connaissance</h5> */}
      <h2>Plus sur Moi</h2>
      <div className="container about-contenair">
        <div className="about-me">
          <div className="about-me_img">
            <img src="src/Images/mi.png" alt="" />
          </div>
        </div>
        <div className="about-content">
          <div className="about-cards">
            <article className='about-card'>
              <FaAward className='about-icon'/>
              <h5>Experience</h5>
              <small>6mois de formation</small>
            </article>
            <article className='about-card'>
              <TbUsers className='about-icon'/>
              <h5>Clients</h5>
              <small>200+ wolds wides</small>
            </article>
            <article className='about-card'>
              <VscFolderLibrary className='about-icon'/>
              <h5>Projets</h5>
              <small>5+ completed</small>
            </article>
            
          </div>
          <div className='about-content-text'>
              <p>Salut, je suis Agapy Mafo, Une développeuse web, je fais de la programmation back-end et
                        front-end. Passionnée par l’univers du web,doté des compétences nécessaires en développement des sites et applications internet.Le développement front-end ,back-end et le web design font parties de mon quotidien.</p>
                <a href="#contact" className='btn btn-primary'>Let's talk</a>
            </div>
        </div>
      </div>
    </section>
  )
}

export default About