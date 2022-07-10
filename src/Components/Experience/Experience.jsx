import React from 'react'
import './Experience.scss'
import tick from '../../Assets/tick.svg'

const Experience = () => {
    return (
        <div className="experience">

            <div className="experience__tittle">
                <h3>What Skills I Have</h3>
                <h1>My Experience</h1>
            </div>
            <div className="experience__container">
                <div className="experience__container__box">
                    <div className="experience__container__box__title">
                        <h3>Frontend Development</h3>
                    </div>

                    <div className="experience__container__box__content">
                        <div className="experience__container__box__content__left">
                            <div className="experience__container__box__content__left__individual">
                                <img src={tick} alt="tick" />
                                <div className="experience__container__box__content__left__individual__icon">
                                    <h4>HMTL</h4>
                                    <p>Experienced</p>
                                </div>
                            </div>
                            <div className="experience__container__box__content__left__individual">
                                <img src={tick} alt="tick" />
                                <div className="experience__container__box__content__left__individual__icon">
                                    <h4>JavaScript</h4>
                                    <p>Intermediate</p>
                                </div>
                            </div>
                            <div className="experience__container__box__content__left__individual">
                                <img src={tick} alt="tick" />
                                <div className="experience__container__box__content__left__individual__icon">
                                    <h4>React</h4>
                                    <p>Intermediate</p>
                                </div>
                            </div>
                        </div>
                        <div className="experience__container__box__content__right">
                            <div className="experience__container__box__content__left__individual">
                                <img src={tick} alt="tick" />
                                <div className="experience__container__box__content__left__individual__icon">
                                    <h4>SCSS</h4>
                                    <p>Intermediate</p>
                                </div>
                            </div>
                            <div className="experience__container__box__content__left__individual">
                                <img src={tick} alt="tick" />
                                <div className="experience__container__box__content__left__individual__icon">
                                    <h4>Angular</h4>
                                    <p>Basic</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="experience__container__box">
                    <div className="experience__container__box__title">
                        <h3>Backend Development</h3>
                    </div>

                    <div className="experience__container__box__content">
                        <div className="experience__container__box__content__left">
                            <div className="experience__container__box__content__left__individual">
                                <img src={tick} alt="tick" />
                                <div className="experience__container__box__content__left__individual__icon">
                                    <h4>Node JS</h4>
                                    <p>Intermediate</p>
                                </div>
                            </div>
                            <div className="experience__container__box__content__left__individual">
                                <img src={tick} alt="tick" />
                                <div className="experience__container__box__content__left__individual__icon">
                                    <h4>MongoDB</h4>
                                    <p>Intermediate</p>
                                </div>
                            </div>
                            <div className="experience__container__box__content__left__individual">
                                <img src={tick} alt="tick" />
                                <div className="experience__container__box__content__left__individual__icon">
                                    <h4>Python</h4>
                                    <p>Basic</p>
                                </div>
                            </div>
                        </div>
                        <div className="experience__container__box__content__right">
                            <div className="experience__container__box__content__right__individual">
                                <div className="experience__container__box__content__left__individual">
                                    <img src={tick} alt="tick" />
                                    <div className="experience__container__box__content__left__individual__icon">
                                        <h4>PHP</h4>
                                        <p>Basic</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Experience