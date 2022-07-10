import React from 'react'
import './Contact.scss'
import { AiOutlineMail } from 'react-icons/ai'
import { AiOutlineWhatsApp } from 'react-icons/ai'
import { AiFillLinkedin } from 'react-icons/ai';
import { useTranslation } from "react-i18next"


const Contact = () => {
    const [t] = useTranslation("global")

    return (
        <div className="contact">
            <div className="contact__title">
                <h3>{t("contact.touch")}</h3>
                <h1>{t("contact.contact")}</h1>
            </div>
            <div className="contact__container">
                <div className="contact__container__left">
                    <a class="mailto" href="mailto:henrrymbau@gmail.com" target="_blank" rel="noreferrer">
                        <div className="contact__container__left__box">
                            <AiOutlineMail />
                            <h3>Email</h3>
                            <p>henrrymbau@gmail.com</p>
                            <p className="contact__container__left__box__blue">{t("contact.message")}</p>
                        </div>
                    </a>

                    <div className="contact__container__left__box">
                        <AiFillLinkedin />
                        <h3>LinkedIn</h3>
                        <p>henrrymbau</p>
                        <p className="contact__container__left__box__blue">{t("contact.message")}</p>
                    </div>
                    <a href="https://api.whatsapp.com/send?phone=34722464208&text=Hola%20Henrry!%20Podemos%20agendar%20una%20llamada?" target="_blank" rel="noreferrer">
                        <div className="contact__container__left__box">
                            <AiOutlineWhatsApp />
                            <h3>WhatsApp</h3>
                            <p>+34 722 464 208</p>
                            <p className="contact__container__left__box__blue">{t("contact.message")}</p>
                        </div>
                    </a>

                </div>
                <div className="contact__container__right">
                    <div className="contact__container__right__inputs">
                        <input placeholder={t("contact.name")} type="text" />
                        <input placeholder={t("contact.email")} type="email" />
                        <textarea placeholder={t("contact.text")}></textarea>
                        <button>{t("contact.button")}</button>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Contact