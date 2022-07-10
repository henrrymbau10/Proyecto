import { useState } from 'react'
import './Nav.scss'
import { AiOutlineHome } from 'react-icons/ai';
import { AiOutlineUser } from 'react-icons/ai';
import { BiBook } from 'react-icons/bi';
import { RiServiceLine } from 'react-icons/ri';
import { BiMessageSquareDetail } from 'react-icons/bi';


const Nav = () => {
    const [activeNav, setActiveNav] = useState("header")

    return (
        <div className="nav">
            <div className="nav__container">
                <a href=".header" onclick={() => setActiveNav("header")} className={activeNav === "header" ? "active" : ""}><AiOutlineHome /></a>
                <a href=".about" onclick={() => setActiveNav("about")} className={activeNav === "about" ? "active" : ""}><AiOutlineUser /></a>
                <a href=".experience" onclick={() => setActiveNav("experience")} className={activeNav === "experience" ? "active" : ""}><BiBook /></a>
                <a href=".portfolio" onclick={() => setActiveNav("portfolio")} className={activeNav === "portfolio" ? "active" : ""}><RiServiceLine /></a>
                <a href=".contact" onclick={() => setActiveNav("contact")} className={activeNav === "contact" ? "active" : ""}><BiMessageSquareDetail /></a>
            </div>
        </div>
    )
}

export default Nav