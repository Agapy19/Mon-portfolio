import React from 'react'
import './Header.css'
import BtnHeader from './BtnHeader'
import HeaderSocial from './HeaderSocial'

const Header = () => {
  return (
    <header className="container container__header">
      <h5>Hello i'm</h5>
      <h1>Dev Women</h1>
      <h5 className="text-light">Fullstack Developper</h5>
      <BtnHeader />
      <HeaderSocial />
      <div className="me">
        <img src="/src/Images/femme.png" alt="" />
      </div>
      <a href="#contact" className='scroll-down'>Scroll Down</a>
    </header>
  )
}

export default Header