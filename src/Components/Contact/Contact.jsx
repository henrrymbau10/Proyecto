import React from 'react'
import './Contact.scss'
import { AiOutlineMail } from 'react-icons/ai'
import { AiOutlineWhatsApp } from 'react-icons/ai'
import { AiFillLinkedin } from 'react-icons/ai';


const Contact = () => {
    return (
        <div className="contact">
            <div className="contact__title">
                <h3>Get In Touch</h3>
                <h1>Contact Me</h1>
            </div>
            <div className="contact__container">
                <div className="contact__container__left">
                    <a class="mailto" href="mailto:henrrymbau@gmail.com" target="_blank" rel="noreferrer">
                        <div className="contact__container__left__box">
                            <AiOutlineMail />
                            <h3>Email</h3>
                            <p>henrrymbau@gmail.com</p>
                            <p className="contact__container__left__box__blue">Send a message</p>
                        </div>
                    </a>

                    <div className="contact__container__left__box">
                        <AiFillLinkedin />
                        <h3>LinkedIn</h3>
                        <p>henrrymbau</p>
                        <p className="contact__container__left__box__blue">Send a message</p>
                    </div>
                    <a href="https://api.whatsapp.com/send?phone=+34 722464208" target="_blank" rel="noreferrer">
                        <div className="contact__container__left__box">
                            <AiOutlineWhatsApp />
                            <h3>WhatsApp</h3>
                            <p>+34 722 464 208</p>
                            <p className="contact__container__left__box__blue">Send a message</p>
                        </div>
                    </a>

                </div>
                <div className="contact__container__right">
                    <div className="contact__container__right__inputs">
                        <input placeholder="Your Full Name" type="text" />
                        <input placeholder="Your Email" type="email" />
                        <textarea placeholder="Your Message"></textarea>
                        <button>Send Message</button>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Contact