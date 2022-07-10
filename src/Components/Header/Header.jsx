import React from 'react'
import './Header.scss'
import { AiFillLinkedin } from 'react-icons/ai';
import { AiFillGithub } from 'react-icons/ai';
import { AiOutlineMail } from 'react-icons/ai';
import me from '../../Assets/me.png'
import CV from '../../Assets/CV Henrry.pdf'
import { useTranslation } from "react-i18next"


const Header = () => {
    const [t] = useTranslation("global")

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
                        <h4>{t("header.hello")}</h4>
                        <h1>{t("header.name")}</h1>
                        <h3>{t("header.developer")}</h3>
                    </div>
                    <div className="header__container__center__buttons">
                        <a className="header__container__center__buttons__cv" href={CV} download>{t("header.cv")}</a>
                        <a onClick={() => scrollTo('.contact')} href={"#contact"} className="header__container__center__buttons__talk">{t("header.talk")}</a>
                    </div>
                    <div className="header__container__center__image">
                        <img src={me} alt="me" />
                    </div>
                </div>

                <div className="header__container__rigth">
                    <div className="header__container__rigth__language">

                    </div>
                    <div className="header__container__rigth__scroll">
                        <p>{t("header.scroll")}</p>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Header