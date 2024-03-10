import React, { useState } from 'react'
import './Nav.css'
import { FiHome } from "react-icons/fi";
import { RiUser3Line } from "react-icons/ri";
import { RiBook2Fill } from "react-icons/ri";
import { RiServiceLine } from "react-icons/ri";
import { TbMessage } from "react-icons/tb";
import { usestate } from 'react';

const Nav = () => {
  const [activeNav, setActiveNav] = useState('#')
  return (
    <nav>
      <a href="#" onClick={() => setActiveNav('#')} className={activeNav === '#' ? 'active' : ''}><FiHome /></a>
      <a href="#about" onClick={() => setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''}><RiUser3Line /></a>
      <a href="#experience" onClick={() => setActiveNav('#experience')} className={activeNav === '#experience' ? 'active' : ''}><RiBook2Fill /></a>
      <a href="#service" onClick={() => setActiveNav('#service')} className={activeNav === '#service' ? 'active' : ''}><RiServiceLine /></a>
      <a href="#contact" onClick={() => setActiveNav('#contact')} className={activeNav === '#contact' ? 'active' : ''}><TbMessage /></a>

    </nav>
  )
}

export default Nav