import React from 'react'
import './Service.css'
import { FiCheck } from "react-icons/fi";
const Service = () => {
  return (
    <section id='service'>
      {/* <h5>Ce que je peux vous  offrir</h5> */}
      <h2>Mes Services</h2>
      <div className="container services-container">
        <article className="service">
          <div className="service-head">
            <h3>UI/UI Design</h3>
          </div>
          <ul className="service-list">
            <li>
              <FiCheck className='service-list-icon' />
              <p>Conception des maquettes pour applications web, mobiles et logicielles</p>
            </li>
            <li>
              <FiCheck className='service-list-icon' />
              <p>Création de mises en page et de graphiques</p>
            </li>
            <li>
              <FiCheck className='service-list-icon' />
              <p>Conception d'Interfaces Adaptatives et Réactives</p>
            </li>
            <li>
              <FiCheck className='service-list-icon' />
              <p>Création de logos, palettes de couleurs et typographies</p>
            </li>
            <li>
              <FiCheck className='service-list-icon' />
              <p>Conception de cartes de visite,affiches et invitations</p>
            </li>
          </ul>
        </article>
        {/* Developpement web*/}

        <article className="service">
          <div className="service-head">
            <h3>Developpement Web</h3>
          </div>
          <ul className="service-list">
            <li>
              <FiCheck className='service-list-icon' />
              <p>Conception et développement de sites Web </p>
            </li>
            <li>
              <FiCheck className='service-list-icon' />
              <p>Développement de sites Web dynamiques</p>
            </li>
            <li>
              <FiCheck className='service-list-icon' />
              <p>Conception et développement d'applications Web et Mobile</p>
            </li>
            <li>
              <FiCheck className='service-list-icon' />
              <p>Intégration et personnalisation de CMS (Systèmes de Gestion de Contenu) </p>
            </li>

            <li>
              <FiCheck className='service-list-icon' />
              <p>Maintenance et assistance technique</p>
            </li>
          </ul>
        </article>
        {/* FIN DES SERVICE WEB DEVELOPPEMENT */}
        <article className="service">
          <div className="service-head">
            <h3>Création du contenu</h3>
          </div>
          <ul className="service-list">
            <li>
              <FiCheck className='service-list-icon' />
              <p>Création des images Personnalisées
                Graphiques
              </p>
            </li>
            <li>
              <FiCheck className='service-list-icon' />
              <p>Présentation des Contenu Multimédia(
                Vidéos Tutorielles,
                Podcasts,
                Webinaires,
                Présentations Interactives
                )
              </p>
            </li>
            <li>
              <FiCheck className='service-list-icon' />
              <p>Conception des bannières publicitaires</p>
            </li>
            <li>
              <FiCheck className='service-list-icon' />
              <p>Création des vidéos promotionnelles</p>
            </li>
            <li>
              <FiCheck className='service-list-icon' />
              <p>Conception des  graphiques</p>
            </li>
          </ul>
        </article>
        <article className="service">
          <div className="service-head">
            <h3>Gestion de projet</h3>
          </div>
          <ul className="service-list">
            <li>
              <FiCheck className='service-list-icon' />
              <p>Git
              </p>
            </li>
            <li>
              <FiCheck className='service-list-icon' />
              <p>GitHub
              </p>
            </li>
            <li>
              <FiCheck className='service-list-icon' />
              <p>Asana</p>
            </li>
            <li>
              <FiCheck className='service-list-icon' />
              <p>Scrum</p>
            </li>
            <li>
              <FiCheck className='service-list-icon' />
              <p>Trello</p>
            </li>
          </ul>
        </article>
      </div>
    </section>
  )
}

export default Service