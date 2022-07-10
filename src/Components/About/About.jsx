import React from 'react'
import './About.scss'
import me from '../../Assets/me-about.jpeg'
import { GiSandsOfTime } from 'react-icons/gi';
import { GrWorkshop } from 'react-icons/gr';
import { VscFolderLibrary } from 'react-icons/vsc';
import { useTranslation } from "react-i18next"

const About = () => {
    const [t] = useTranslation("global")

    const scrollTo = (nodeSelector) => {
        const domNode = document.querySelector(nodeSelector)

        window.scrollTo?.({ top: domNode.offsetTop, behavior: 'smooth' });
    }

    return (
        <div className="about">

            <div className="about__title">
                <h3>{t("about.know")}</h3>
                <h1>{t("about.about")}</h1>
            </div>

            <div className="about__container">
                <div className="about__container__left">
                    <div className="about__container__left__img">
                        <img src={me} alt="me" />
                    </div>
                </div>

                <div className="about__container__right">
                    <div className="about__container__right__boxes">
                        <div className="about__container__right__boxes__individual">
                            <GiSandsOfTime />
                            <h3>{t("about.experience")}</h3>
                            <p>{t("about.months")}</p>
                        </div>
                        <div className="about__container__right__boxes__individual">
                            <GrWorkshop />
                            <h3>{t("about.clients")}</h3>
                            <p>{t("about.months")}</p>
                        </div>
                        <div className="about__container__right__boxes__individual">
                            <VscFolderLibrary />
                            <h3>{t("about.projects")}</h3>
                            <p>{t("about.months")}</p>
                        </div>
                    </div>
                    <div className="about__container__right__text">
                        <p>{t("about.text")}</p>
                    </div>
                    <div className="about__container__right__button">
                        <button onClick={() => scrollTo('.contact')}>{t("about.talk")}</button>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default About