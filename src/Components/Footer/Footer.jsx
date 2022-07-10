import React from 'react'
import './Footer.scss'
import { AiFillLinkedin } from 'react-icons/ai';
import { AiFillGithub } from 'react-icons/ai';
import { useTranslation } from "react-i18next"


const Footer = () => {
    const [t] = useTranslation("global")


    return (
        <div className="footer">
            <div className="footer__tittle">
                <h1 >Henrry</h1>
            </div>
            <div className="footer__list">
                <p>{t("footer.home")}</p>
                <p>{t("footer.about")}</p>
                <p>{t("footer.experience")}</p>
                <p>{t("footer.portfolio")}</p>
                <p>{t("footer.contact")}</p>
            </div>
            <div className="footer__icons">
                <div className="footer__icons__git">
                    <a href="https://www.linkedin.com/in/henrrymb/" target="_blank" rel="noreferrer">
                        <AiFillLinkedin />
                    </a>

                </div>
                <div className="footer__icons__linkedin">
                    <a href="https://github.com/henrrymbau10" target="_blank" rel="noreferrer">
                        <AiFillGithub />
                    </a>

                </div>
            </div>
            <div className="footer__right">
                <p>Github: Henrrymbau10</p>
            </div>
        </div>
    )
}

export default Footer