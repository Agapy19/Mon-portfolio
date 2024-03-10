import React from 'react'
import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
const HeaderSocial = () => {
    return (
        <div className="header-social">
            <a href="https://linkdin.com" target='blank'><BsLinkedin /></a>
            <a href="https://github.com" target='blank'><FaGithub /></a>
            <a href="https://instagram.com" target='blank'><FaInstagram /></a>
        </div>
    )
}

export default HeaderSocial