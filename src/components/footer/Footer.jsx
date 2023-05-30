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
        </div>
    </footer>
  )
}

export default Footer