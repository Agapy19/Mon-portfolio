import React from 'react'
import './Footer.css'
import { FaFacebook } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { FaTiktok } from "react-icons/fa6";

const Footer = () => {
    return (
        <footer>
            <a href="#" className='footer-logo'>Dev Women</a>
            <ul className="permalinks">
                <li>
                    <a href="#">Home</a>
                </li>
                <li>
                    <a href="#about">About</a>
                </li>
                <li>
                    <a href="#experience">Competence</a>
                </li>
                <li>
                    <a href="#service">Service</a>
                </li>
                <li>
                    <a href="#contact">Contact</a>
                </li>
            </ul>
            <div className="footer-socials">
                <a href="http://facebook.com" ><FaFacebook /></a>
                <a href="http://instagram.com"><FaInstagram /></a>
                <a href="http://tiktok.com"><FaTiktok /></a>
            </div>
            <div className="footer-copyright">
                <small>&copy;Agapy Mafo pour tout vos services</small>
            </div>
        </footer>
    )
}

export default Footer