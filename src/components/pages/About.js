// imports react and stylesheet
import React from 'react';
import '../../styles/pages.css';

export default function About() {

    return (
        <div className='about-content'>
            <h4 id='about-title'>About Me:</h4>
            <img id='profile-image' src='assets/images/profile-image.jpg' alt='profile'></img>
            <p className='about-text text'>
                Having worked in the fashion industry for the past 7 years, 
                I understand that e-commerce is the future of the industry.
                With my prior training in fashion margeting, production, and creative writing, 
                I wanted to aquired the skills necessary for me to further my career and contribute to the world of web development and web Design 
                in the context of fashion e-commerce.
            </p>
        </div>

    )

}