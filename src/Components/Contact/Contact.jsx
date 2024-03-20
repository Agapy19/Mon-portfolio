import React from 'react'
import './Contact.css'
import { MdOutlineEmail } from "react-icons/md";
import { FaWhatsapp } from "react-icons/fa6";
import { RiMessengerLine } from "react-icons/ri";
import { FaInstagramSquare } from "react-icons/fa";
const Contact = () => {
  return (
    <section id='contact'>
      {/* <h5>Entrons en contact</h5> */}
      <h2>Contactez-moi</h2>
      <div className="container contact-container">
        <div className="contact-options">
          <article className="contact-option">
            <MdOutlineEmail className='contact-option__icon'/>
            <h4>Email</h4>
            <h5>mafoagapy697@gmail.com</h5>
            <a href="mailto:mafoagapy697@gmail.com">Envoyez-moi un message</a>
          </article>
          {/* <article className="contact-option">
            <FaWhatsapp className='contact-option__icon'/>
            <h4>WhatsApp</h4>
            <h5>+243994924437</h5>
          </article> */}
          <article className="contact-option">
            <RiMessengerLine className='contact-option__icon'/>
            <h4>Messenger</h4>
            <h5>Agapy KM</h5>
            <a href="https://m.me/agapy.mafo.3">Envoyez-moi un message</a>
          </article>
          <article className="contact-option">
            <FaInstagramSquare className='contact-option__icon'/>
            <h4>Instagram</h4>
            <h5>Agapy KM</h5>
            <a href="https://www.instagram.com/call_me_ayadra/">Envoyez-moi un message</a>
          </article>
        </div>
        <form>
          <input type="text" name="nom" placeholder='votre nom complet' required />
          <input type="email" name="email" placeholder='votre adresse email' required />
          <textarea name="message" rows="7" placeholder='votre message' required></textarea>
          <button type='submit' className='btn btn-primary'>Envoyer</button>

        </form>
      </div>
    </section>
  )
}

export default Contact