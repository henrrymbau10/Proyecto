import React from 'react'
import './Footer.scss'
import { AiFillLinkedin } from 'react-icons/ai';
import { AiFillGithub } from 'react-icons/ai';

const Footer = () => {
    return (
        <div className="footer">
            <div className="footer__tittle">
                <h1 >Henrry</h1>
            </div>
            <div className="footer__list">
                <p>Home</p>
                <p>About</p>
                <p>Experience</p>
                <p>Services</p>
                <p>Portfolio</p>
            </div>
            <div className="footer__icons">
                <div className="footer__icons__git">
                    <AiFillGithub />
                </div>
                <div className="footer__icons__linkedin">
                    <AiFillLinkedin />
                </div>
            </div>
            <div className="footer__right">
                <p>Github: Henrrymbau10</p>
            </div>
        </div>
    )
}

export default Footer