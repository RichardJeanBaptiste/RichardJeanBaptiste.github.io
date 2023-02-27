import React, { useState } from 'react';
import "./header.css";

export default function Header() {


    /********************** Change Background Header ********************/

    window.addEventListener("scroll", function(){
        const header = document.querySelector(".header");

        if(this.scrollY >= 80) {
            header.classList.add("show-header")
        } else {
            header.classList.remove("show-header");
        }
    })

    

    /********************** Toggle Menu ********************/
    const [Toggle, showMenu] = useState(false);
    const [activeNav, setActiveNav] = useState("#home");


    const NavItem = (props) => {

        let iconClass = `uil uil-${props.icon} nav_icon`;

        return (
            <li className="nav_item">
                <a href={props.href} onClick={props.Click} className={props.className}>
                    <i className={iconClass}></i>
                    {props.iconName}
                </a>
                
            </li>
        )
    }
    

    return (
        <header className="header">
            <nav className="nav container">
                <a href="index.html" className="nav_logo">Richard</a>

                <div className={Toggle ? "nav_menu show-menu": "nav_menu"}>
                    <ul className="nav_list grid">
                        <NavItem href='#home' onClick={() => setActiveNav('#home')} className={activeNav === "#home" ? "nav_link " : "nav_link" } icon='estate' iconName='Home'/>
                        <NavItem href='#about' onClick={() => setActiveNav('#about')} className={activeNav === "#about" ? "nav_link active-link" : "nav_link" } icon='user' iconName='About'/>
                        <NavItem href='#skills' onClick={() => setActiveNav('#skills')} className={activeNav === "#skills" ? "nav_link active-link" : "nav_link" } icon='file-alt' iconName='Skills'/>
                        <NavItem href='#services' onClick={() => setActiveNav('#services')} className={activeNav === "#services" ? "nav_link active-link" : "nav_link" } icon='briefcase-alt' iconName='Services'/>
                        <NavItem href='#portfolio' onClick={() => setActiveNav('#portfolio')} className={activeNav === "#portfolio" ? "nav_link active-link" : "nav_link" } icon='scenery' iconName='Portfolio'/>
                        <NavItem href='#contact' onClick={() => setActiveNav('#contact')} className={activeNav === "#contact" ? "nav_link active-link" : "nav_link" } icon='message' iconName='Contact'/>

                        <i class="uil uil-times nav_close" onClick={() => showMenu(!Toggle)}></i>
                    </ul>
                </div>

                <div className="nav_toggle" onClick={() => showMenu(!Toggle)}>
                    <i class='uil uil-apps'></i>
                </div>
            </nav>
        </header>
    )
}