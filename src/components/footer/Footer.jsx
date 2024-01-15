import React from 'react';
import './footer.css';

const Footer = () => {
  return (
    <footer className="footer">
        <div className="footer_container container">
            <h1 className="footer_title">Jean-Baptiste</h1>
            
            <ul className="footer_list">

                <li>
                    <a href="#about" className="footer_link">About</a>
                </li>

                <li>
                    <a href="#portfolio" className="footer_link">Projects</a>
                </li>

                <li>
                    <a href="#services" className="footer_link">Services</a>
                </li>

            </ul>

            <div className="footer_social">
                <a href="#" className="home_social-icon" target="_blank">
                    <i class="uil uil-instagram"></i>
                </a>

                <a href="#portfolio" className="home_social-icon" target="_blank">
                    <i class="uil uil-briefcase"></i>
                </a>

                <a href="https://github.com/RichardJeanBaptiste" className="home_social-icon" target="_blank">
                    <i class="uil uil-github-alt"></i>
                </a>
            </div>
        </div>
    </footer>
  )
}

export default Footer