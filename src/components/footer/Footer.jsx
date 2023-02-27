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
                    <i class="bx bxl-facebook"></i>
                </a>

                <a href="#" className="home_social-icon" target="_blank">
                    <i class="bx bxl-instagram"></i>
                </a>

                <a href="#" className="home_social-icon" target="_blank">
                    <i class="bx bxl-twitter"></i>
                </a>
            </div>

            <span className="footer_copy">abcdefg</span>
        </div>
    </footer>
  )
}

export default Footer