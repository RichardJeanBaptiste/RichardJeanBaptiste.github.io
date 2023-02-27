import React from 'react';
import './about.css';
import AboutImg from '../../assets/male.svg';
import CV from '../../assets/Resume.pdf';
import Info from './Info';


export default function About() {
    return(
        <section className="about section" id="about">
            <h2 className="section_title">About Me</h2>
            <span className="section_subtitle">My introduction</span>

            <div className="about_container container grid">
                <img src={AboutImg} alt="" className="about_img" />

                <div className="about_data">
                    <Info/>

                    <p className="about_description">
                        I'm a software developer currently based in The Big apple. I'm a passionate coder who wants to create technology that helps to elevate and connect people and push technology forward as a whole. 
                        Some technologies I currently enjoy working with are React/React-Native , Python/Flask, and MongoDB.
                    </p>

                    <a  download="" href={CV} className="button button--flex">
                        Download CV
                        <i class="uil uil-import"></i>
                    </a>
                </div>
            </div>
        </section>
    )
}