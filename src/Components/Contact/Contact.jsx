import React, { useRef, useState } from 'react';
import './Contact.css';
import { MdOutlineEmail } from "react-icons/md";
import { RiMessengerLine } from "react-icons/ri";
import { FaInstagramSquare } from "react-icons/fa";
import emailjs from 'emailjs-com';

const Contact = () => {
  const formRef = useRef();
  const [submissionStatus, setSubmissionStatus] = useState(null);

  const sendEmail = (e) => {
    e.preventDefault();
    
    emailjs.sendForm('service_3oajavs', 'template_sidry8s', formRef.current, 'ZiTN_ZQcU0dWjm1Zn')
      .then((result) => {
        console.log(result.text);
        setSubmissionStatus('success');
      }, (error) => {
        console.log(error.text);
        setSubmissionStatus('error');
      });
  };

  return (
    <section id='contact'>
      <h2>Contactez-moi</h2>
      <div className="container contact-container">
        <div className="contact-options">
          {/* Options de contact */}
        </div>
        <form ref={formRef} onSubmit={sendEmail}>
          <input type="text" name="name" placeholder="Votre nom complet" required />
          <input type="email" name="email" placeholder="Votre adresse email" required />
          <textarea name="message" rows="7" placeholder="Votre message" required></textarea>
          <button type="submit" className="btn btn-primary">Envoyer</button>
        </form>
        {submissionStatus === 'success' && <p>Votre message a été envoyé avec succès!</p>}
        {submissionStatus === 'error' && <p>Une erreur s'est produite. Veuillez réessayer plus tard.</p>}
      </div>
    </section>
  );
}

export default Contact;
