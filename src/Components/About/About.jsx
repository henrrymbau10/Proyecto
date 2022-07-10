import React from 'react'
import './About.scss'
import me from '../../Assets/me-about.jpg'
import { GiSandsOfTime } from 'react-icons/gi';
import { GrWorkshop } from 'react-icons/gr';

const About = () => {

    const scrollTo = (nodeSelector) => {
        const domNode = document.querySelector(nodeSelector)

        window.scrollTo?.({ top: domNode.offsetTop, behavior: 'smooth' });
    }

    return (
        <div className="about">

            <div className="about__title">
                <h3>Get o Know</h3>
                <h1>About Me</h1>
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
                            <h3>Experiences</h3>
                            <p>6+ Month</p>
                        </div>
                        <div className="about__container__right__boxes__individual">
                            <GrWorkshop />
                            <h3>Experiences</h3>
                            <p>6+ Month</p>
                        </div>
                        <div className="about__container__right__boxes__individual">
                            <GrWorkshop style={{ color: "blue" }} />
                            <h3>Projects</h3>
                            <p>6+ Month</p>
                        </div>
                    </div>
                    <div className="about__container__right__text">
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                    </div>
                    <div className="about__container__right__button">
                        <button onClick={() => scrollTo('.contact')}>Let's Talk</button>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default About