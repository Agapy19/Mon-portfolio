import React from 'react'
import './Portfolio.css'
import iwz from '/home/user-15-c1/Documents/PROJET/Portfolio/src/Images/iwz.png'
import wast from '/home/user-15-c1/Documents/PROJET/Portfolio/src/Images/wast.png'
import tictac from '/home/user-15-c1/Documents/PROJET/Portfolio/src/Images/tictactoe.png'
import todolist from '/home/user-15-c1/Documents/PROJET/Portfolio/src/Images/todolist.png'


const data = [
  {
    id: 1,
    image: iwz,
    titre: "iwz connection",
    github: "https://github.com",
    demo: " https://agapy19.github.io/IWZ-CONNECTION/",

  },
  {
    id: 2,
    image: wast,
    titre: "Wast management",
    github: "https://github.com",
    demo: " https://agapy19.github.io/IWZ-CONNECTION/",

  },
  {
    id: 3,
    image: tictac,
    titre: "tic tac toe game",
    github: "https://github.com",
    demo: " https://agapy19.github.io/IWZ-CONNECTION/",

  },
  {
    id: 4,
    image: todolist,
    titre: "to do list",
    github: "https://github.com",
    demo: " https://agapy19.github.io/IWZ-CONNECTION/",

  },
  {
    id: 5,
    image: todolist,
    titre: "carnet des contacts",
    github: "https://github.com",
    demo: " https://agapy19.github.io/IWZ-CONNECTION/",

  },
  {
    id: 6,
    image: tictac,
    titre: "ludo game",
    github: "https://github.com",
    demo: " https://agapy19.github.io/IWZ-CONNECTION/",

  },
]

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h2>Mes projets recents</h2>
      <div className="container portfolio-container">
        {
          data.map(({ id, image, titre, github, demo }) => {
            return (
              <article key={id} className="portfolio-item">
                <div className="portfolio-item-image">
                  <img src={image} alt={titre} />
                </div>
                <h3>{titre}</h3>
                <div className="portfolio-item-btn__header">
                  <a href={github} className='btn' target='_blank'>Github</a>
                  <a href={demo} className='btn btn-primary' target='_blank'>Demo</a>
                </div>
              </article>
            )
          })
        }


      </div>

    </section>
  )
}

export default Portfolio