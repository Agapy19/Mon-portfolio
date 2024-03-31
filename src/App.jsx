import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './Components/header/Header'
import Nav from './Components/nav/Nav'
import About from './Components/About/About'
import Experience from './Components/Experience/Experience'
import Service from './Components/Service/Service'
import Portfolio from './Components/portfolio/Portfolio'
import Contact from './Components/Contact/Contact'
import Footer from './Components/Footer/Footer'

function App() {
 
  return (
    <>
    <Header/>
    <Nav/>
    <About/>
    <Experience/>
    <Service/>
    <Portfolio/>
    <Contact/>
    <Footer/>
    </>
  )
}

export default App
