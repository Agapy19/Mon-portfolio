import React from 'react'
import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
const HeaderSocial = () => {
    return (
        <div className="header-social">
            <a href="https://www.linkedin.com/in/agapy-mafo-a1a828296/" target='blank'><BsLinkedin /></a>
            <a href="https://github.com/Agapy19" target='blank'><FaGithub /></a>
            <a href="https://www.instagram.com/call_me_ayadra/" target='blank'><FaInstagram /></a>
        </div>
    )
}

export default HeaderSocial