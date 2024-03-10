import React from 'react'
import CV from '/home/user-15-c1/Documents/PROJET/Portfolio/src/Images/cv.pdf'
const BtnHeader = () => {
  return (
   <div className="btn-header">
    <a href= {CV} download className='btn'> Download CV</a>
    <a href="#contact" className='btn btn-primary'>Let's Talk</a>
   </div>
  )
}

export default BtnHeader