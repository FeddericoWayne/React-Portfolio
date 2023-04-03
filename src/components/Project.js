import React from 'react';
import About from './pages/About';
import Resume from './pages/Resume';
import '../styles/project.css'

export default function Project(props) {

    if (props.currentView === 'about') {
        return (
            <div className='project-container'>
                <div className='about-me-container in-view-from-right'>
                    <About />    
                </div>
                <div className='portfolio-container'>
                    <div className='portfolio'>Portfolio</div>    
                </div>
                <div className='contact-container'>
                    <div className='contact'>Contact</div>    
                </div>
                <div className='resume-container'>
                    <div className='resume'>Resume</div>    
                </div>
            </div>
        )
    } else if (props.currentView === 'portfolio') {
        return (
            <div className='project-container'>
                <div className='about-me-container'>
                    <div className='about-me'>About Me</div>    
                </div>
                <div className='portfolio-container in-view-from-left'>
                    <div className='portfolio'>Portfolio</div>    
                </div>
                <div className='contact-container'>
                    <div className='contact'>Contact</div>    
                </div>
                <div className='resume-container'>
                    <div className='resume'>Resume</div>    
                </div>
            </div>
        )
    } else if (props.currentView === 'contact') {
        return (
            <div className='project-container'>
                <div className='about-me-container'>
                    <div className='about-me'>About Me</div>    
                </div>
                <div className='portfolio-container'>
                    <div className='portfolio'>Portfolio</div>    
                </div>
                <div className='contact-container in-view-from-right'>
                    <div className='contact'>Contact</div>    
                </div>
                <div className='resume-container'>
                    <div className='resume'>Resume</div>    
                </div>
            </div>
        )
    } else {
        return (
            <div className='project-container'>
                <div className='about-me-container'>
                    <div className='about-me'>About Me</div>    
                </div>
                <div className='portfolio-container'>
                    <div className='portfolio'>Portfolio</div>    
                </div>
                <div className='contact-container'>
                    <div className='contact'>Contact</div>    
                </div>
                <div className='resume-container in-view-from-left'>
                    <Resume />   
                </div>
            </div>
        )
    }

}