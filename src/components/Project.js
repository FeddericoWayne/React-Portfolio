import React from 'react';
import '../styles/project.css'

export default function Project( props ) {

    if (props.currentView === 'about') {
        return (
            <div className='project-container'>
                <div className='about-me-container'>
                    <div className='about-me'>About Me</div>    
                </div>
            </div>
        )
    } else if (props.currentView === 'portfolio') {
        return (
            <div className='project-container'>
                <div className='portfolio-container'>
                    <div className='portfolio'>Portfolio</div>    
                </div>
            </div>
        )
    } else if (props.currentView === 'contact') {
        return (
            <div className='project-container'>
                <div className='contact-container'>
                    <div className='contact'>Contact</div>    
                </div>
            </div>
        )
    } else {
        return (
            <div className='project-container'>
                <div className='resume-container'>
                    <div className='resume'>Resume</div>    
                </div>
            </div>
        )
    }

}