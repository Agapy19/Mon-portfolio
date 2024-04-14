import React from 'react'
import CV from '/src/Images/cv.pdf'
const BtnHeader = () => {
  return (
   <div className="btn-header">
    <a href= {CV} download className='btn'> Download CV</a>
    <a href="#contact" className='btn btn-primary'>Let's Talk</a>
   </div>
  )
}

export default BtnHeader