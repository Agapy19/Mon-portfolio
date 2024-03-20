import React from 'react'
import './Experience.css'
import { BsPatchCheckFill} from "react-icons/bs";
const Experience = () => {
  return (
    <section id='experience'>
      {/* <h5>Mon expérience</h5> */}
      <h2>Mes Compétences</h2>
      <div className="container experience-container">
        <div className="experience-frontend">
          <h3>Developpement Frontend</h3>
          <div className="experience-content">
            <article className="experience-details">
              <BsPatchCheckFill className='experience-details-icon'/>
               <div>
                <h4>HTML</h4>
                <small className='text-light'>
                  Expérimenté
                </small>
              </div>
            </article>
            <article className="experience-details">
              <BsPatchCheckFill className='experience-details-icon' />
              <div>
                <h4>CSS</h4>
                <small className='text-light'>Expérimenté</small>
              </div>
            </article>
            <article className="experience-details">
              <BsPatchCheckFill className='experience-details-icon' />
              <div>
                <h4>JavaScript</h4>
                <small className='text-light'>Expérimenté</small>
              </div>
            </article>
            <article className="experience-details">
              <BsPatchCheckFill className='experience-details-icon' />
              <div>
                <h4>Bootstrap</h4>
                <small className='text-light'>Intermediaire</small>
              </div>
            </article>
            <article className="experience-details">
              <BsPatchCheckFill className='experience-details-icon' />
              <div>
                <h4>Tailwind</h4>
                <small className='text-light'>Intermediaire</small>
              </div>
            </article>
            <article className="experience-details">
              <BsPatchCheckFill className='experience-details-icon' />
              <div>
                <h4>React</h4>
                <small className='text-light'>Expérimenté</small>
              </div>
            </article>
          </div>
        </div>
        {/* FIN DU FRONTEND */}
        <div className="experience-backend">
          <h3>Developpement Bakend</h3>
          <div className="experience-content">
            <article className="experience-details">
              <BsPatchCheckFill className='experience-details-icon' />
              <div>
                <h4>Node JS</h4>
                <small className='text-light'>
                  Expérimenté
                </small>
              </div>
            </article>
            <article className="experience-details">
              <BsPatchCheckFill className='experience-details-icon' />
              <div>
                <h4>SQL</h4>
                <small className='text-light'>Expérimenté</small>
              </div>
            </article>
            <article className="experience-details">
              <BsPatchCheckFill className='experience-details-icon' />
              <div>
                <h4>PHP</h4>
                <small className='text-light'>Intermediaire</small>
              </div>
            </article>
            <article className="experience-details">
              <BsPatchCheckFill className='experience-details-icon' />
              <div>
                <h4>Mongo DB</h4>
                <small className='text-light'>Intermediaire</small>
              </div>
            </article>
            <article className="experience-details">
              <BsPatchCheckFill className='experience-details-icon' />
              <div>
                <h4>Express JS</h4>
                <small className='text-light'>Expérimenté</small>
              </div>
            </article>
            <article className="experience-details">
              <BsPatchCheckFill className='experience-details-icon' />
              <div>
                <h4>MySQL</h4>
                <small className='text-light'>Basique</small>
              </div>
            </article>
          </div>
        </div>
      </div>

    </section>
  )
}

export default Experience