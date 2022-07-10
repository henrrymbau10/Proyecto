import React from 'react'
import './Portfolio.scss'
import saw from '../../Assets/SpotAtWork.png'
import nike from '../../Assets/NikeStore.png'
import tesla from '../../Assets/Tesla.png'
import { useTranslation } from "react-i18next"


const Portfolio = () => {
    const [t] = useTranslation("global")

    return (
        <div className="portfolio">

            <div className="portfolio__title">
                <h3>{t("portfolio.trabajo")}</h3>
                <h1>Portfolio</h1>
            </div>
            <div className="portfolio__container">
                <div className="portfolio__container__boxes">
                    <div className="portfolio__container__boxes__individual">
                        <img src={saw} alt="saw" />
                        <p>Coworking Spot At Work</p>
                        <div className="portfolio__container__boxes__individual__button">
                            <button className="portfolio__container__boxes__individual__button__github">Github</button>
                            <a href="https://spotatwork.vercel.app/" target="_blank" rel="noreferrer">
                                <button className="portfolio__container__boxes__individual__button__demo">{t("portfolio.demo")}</button>
                            </a>

                        </div>
                    </div>
                    <div className="portfolio__container__boxes__individual">
                        <img src={nike} alt="saw" />
                        <p>Nike Store</p>
                        <div className="portfolio__container__boxes__individual__button">
                            <button className="portfolio__container__boxes__individual__button__github">Github</button>
                            <a href="https://html-css-nike-store.vercel.app/#nav" target="_blank" rel="noreferrer">
                                <button className="portfolio__container__boxes__individual__button__demo">{t("portfolio.demo")}</button>
                            </a>
                        </div>
                    </div>
                    <div className="portfolio__container__boxes__individual">
                        <img src={tesla} alt="saw" />
                        <p>Tesla Clone</p>
                        <div className="portfolio__container__boxes__individual__button">
                            <button className="portfolio__container__boxes__individual__button__github">Github</button>
                            <a href="https://react-tesla-clone.vercel.app/" target="_blank" rel="noreferrer">
                                <button className="portfolio__container__boxes__individual__button__demo">{t("portfolio.demo")}</button>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="portfolio__container__boxes">
                    <div className="portfolio__container__boxes__individual">
                        <img src={saw} alt="saw" />
                        <p>Coworking Spot At Work</p>
                        <div className="portfolio__container__boxes__individual__button">
                            <button className="portfolio__container__boxes__individual__button__github">Github</button>
                            <button className="portfolio__container__boxes__individual__button__demo">{t("portfolio.demo")}</button>
                        </div>
                    </div>
                    <div className="portfolio__container__boxes__individual">
                        <img src={saw} alt="saw" />
                        <p>Coworking Spot At Work</p>
                        <div className="portfolio__container__boxes__individual__button">
                            <button className="portfolio__container__boxes__individual__button__github">Github</button>
                            <button className="portfolio__container__boxes__individual__button__demo">{t("portfolio.demo")}</button>
                        </div>
                    </div>
                    <div className="portfolio__container__boxes__individual">
                        <img src={saw} alt="saw" />
                        <p>Coworking Spot At Work</p>
                        <div className="portfolio__container__boxes__individual__button">
                            <button className="portfolio__container__boxes__individual__button__github">Github</button>
                            <button className="portfolio__container__boxes__individual__button__demo">{t("portfolio.demo")}</button>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Portfolio