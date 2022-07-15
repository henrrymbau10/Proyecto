import React from 'react'
import './Nav.scss'
import { AiOutlineHome } from 'react-icons/ai';
import { AiOutlineUser } from 'react-icons/ai';
import { BiBook } from 'react-icons/bi';
import { RiServiceLine } from 'react-icons/ri';
import { BiMessageSquareDetail } from 'react-icons/bi';
import uk from '../../Assets/united-kingdom.svg'
import spain from '../../Assets/spain.svg'
import { useTranslation } from "react-i18next"


const Nav = () => {
    const [t, i18n] = useTranslation("global")

    const scrollTo = (nodeSelector) => {

        const domNode = document.querySelector(nodeSelector)
        window.scrollTo?.({ top: domNode.offsetTop, behavior: 'smooth' });
    }

    return (
        <div className="nav">
            <div className="nav__container">
                <p onClick={() => scrollTo('.header')}><AiOutlineHome /></p>
                <p onClick={() => scrollTo('.about')}><AiOutlineUser /></p>
                <p onClick={() => scrollTo('.experience')}><BiBook /></p>
                <p onClick={() => scrollTo('.portfolio')}><RiServiceLine /></p>
                <p onClick={() => scrollTo('.contact')}><BiMessageSquareDetail /></p>
                <div className="nav__container__language">
                    <img onClick={() => i18n.changeLanguage("es")} src={spain} alt="spain" />
                    <img onClick={() => i18n.changeLanguage("en")} src={uk} alt="uk" />
                </div>

            </div>

        </div>
    )
}

export default Nav