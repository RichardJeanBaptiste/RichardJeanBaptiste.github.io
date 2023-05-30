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
                    Hi, I was born and raised in Brooklyn, NY, where I attended Brooklyn College, earning a BS in Computer Science with a 3.5 GPA. Throughout my college career and beyond, I have actively pursued various projects that have not only deepened my passion for software development but also broadened my knowledge and expertise in the field.
                    During my time at Brooklyn College, I engaged in numerous hands-on projects that allowed me to apply the theoretical concepts I learned in the classroom to real-world scenarios. These experiences honed my problem-solving skills and instilled in me a strong foundation in software development principles.
                    
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