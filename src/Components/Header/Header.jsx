import React from 'react'
import './Header.scss'
import { AiFillLinkedin } from 'react-icons/ai';
import { AiFillGithub } from 'react-icons/ai';
import { AiOutlineMail } from 'react-icons/ai';
import me from '../../Assets/me.png'
import uk from '../../Assets/united-kingdom.svg'
import spain from '../../Assets/spain.svg'
import CV from '../../Assets/CV Henrry.pdf'


const Header = () => {

    const scrollTo = (nodeSelector) => {
        const domNode = document.querySelector(nodeSelector)

        window.scrollTo?.({ top: domNode.offsetTop, behavior: 'smooth' });
    }

    return (
        <div className="header">

            <div className="header__container">
                <div className="header__container__left">
                    <a href="https://www.linkedin.com/in/henrrymb/" target="_blank" rel="noreferrer"><AiFillLinkedin /></a>
                    <a href="https://github.com/henrrymbau10" target="_blank" rel="noreferrer"><AiFillGithub /></a>
                    <a class="mailto" href="mailto:henrrymbau@gmail.com"><AiOutlineMail /></a>


                </div>

                <div className="header__container__center">
                    <div className="header__container__center__name">
                        <h4>Hello I'm</h4>
                        <h1>Henrry Murana Bautista</h1>
                        <h3>Front End Developer</h3>
                    </div>
                    <div className="header__container__center__buttons">
                        <a className="header__container__center__buttons__cv" href={CV} download>Download CV</a>
                        <a onClick={() => scrollTo('.contact')} href={"#contact"} className="header__container__center__buttons__talk">Let's Talk</a>
                    </div>
                    <div className="header__container__center__image">
                        <img src={me} alt="me" />
                    </div>
                </div>

                <div className="header__container__rigth">
                    <div className="header__container__rigth__language">
                        <img src={spain} alt="spain" />
                        <p>|</p>
                        <img src={uk} alt="uk" />
                    </div>
                    <div className="header__container__rigth__scroll">
                        <p>Scroll Down</p>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Header