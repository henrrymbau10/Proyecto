import React from 'react'
import './Portfolio.scss'
import saw from '../../Assets/SpotAtWork.png'

const Portfolio = () => {
    return (
        <div className="portfolio">

            <div className="portfolio__title">
                <h3>My recent Work</h3>
                <h1>Portfolio</h1>
            </div>
            <div className="portfolio__container">
                <div className="portfolio__container__boxes">
                    <div className="portfolio__container__boxes__individual">
                        <img src={saw} alt="saw" />
                        <p>Coworking Spot At Work</p>
                        <div className="portfolio__container__boxes__individual__button">
                            <button className="portfolio__container__boxes__individual__button__github">Github</button>
                            <button className="portfolio__container__boxes__individual__button__demo">Live Demo</button>
                        </div>
                    </div>
                    <div className="portfolio__container__boxes__individual">
                        <img src={saw} alt="saw" />
                        <p>Coworking Spot At Work</p>
                        <div className="portfolio__container__boxes__individual__button">
                            <button className="portfolio__container__boxes__individual__button__github">Github</button>
                            <button className="portfolio__container__boxes__individual__button__demo">Live Demo</button>
                        </div>
                    </div>
                    <div className="portfolio__container__boxes__individual">
                        <img src={saw} alt="saw" />
                        <p>Coworking Spot At Work</p>
                        <div className="portfolio__container__boxes__individual__button">
                            <button className="portfolio__container__boxes__individual__button__github">Github</button>
                            <button className="portfolio__container__boxes__individual__button__demo">Live Demo</button>
                        </div>
                    </div>
                </div>
                <div className="portfolio__container__boxes">
                    <div className="portfolio__container__boxes__individual">
                        <img src={saw} alt="saw" />
                        <p>Coworking Spot At Work</p>
                        <div className="portfolio__container__boxes__individual__button">
                            <button className="portfolio__container__boxes__individual__button__github">Github</button>
                            <button className="portfolio__container__boxes__individual__button__demo">Live Demo</button>
                        </div>
                    </div>
                    <div className="portfolio__container__boxes__individual">
                        <img src={saw} alt="saw" />
                        <p>Coworking Spot At Work</p>
                        <div className="portfolio__container__boxes__individual__button">
                            <button className="portfolio__container__boxes__individual__button__github">Github</button>
                            <button className="portfolio__container__boxes__individual__button__demo">Live Demo</button>
                        </div>
                    </div>
                    <div className="portfolio__container__boxes__individual">
                        <img src={saw} alt="saw" />
                        <p>Coworking Spot At Work</p>
                        <div className="portfolio__container__boxes__individual__button">
                            <button className="portfolio__container__boxes__individual__button__github">Github</button>
                            <button className="portfolio__container__boxes__individual__button__demo">Live Demo</button>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Portfolio