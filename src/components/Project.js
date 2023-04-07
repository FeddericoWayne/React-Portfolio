// imports necessary packages, stylesheet, and react components
import React from 'react';
import About from './pages/About';
import Portfolio from './pages/Portfolio';
import projects from './projects';
import Contact from './pages/Contact';
import Resume from './pages/Resume';
import '../styles/project.css'

export default function Project(props) {

    // if current view is set to the about-me page
    if (props.currentView === 'about') {
        return (
            <div className='project-container'>
                <div className='about-me-container in-view-from-right'>
                    <About />    
                </div>
                <div className='portfolio-container'>
                    <div className='portfolio'>Previous Projects:</div>    
                </div>
                <div className='resume-container'>
                    <div className='contact-container'>Contact Me:</div>    
                </div>
                <div className='resume-container'>
                    <div className='resume'>Skills:</div>    
                </div>
            </div>
        )
    
    // if current view is set to the portfolio page
    } else if (props.currentView === 'portfolio') {
        return (
            <div className='project-container'>
                <div className='about-me-container'>
                    <div className='about-me'>About Me</div>    
                </div>
                <div className='portfolio-container in-view-from-left'>
                    <Portfolio projects={projects}/>  
                </div>
                <div className='resume-container'>
                    <div className='contact-container'>Contact Me:</div>    
                </div>
                <div className='resume-container'>
                    <div className='resume'>Skills:</div>    
                </div>
            </div>
        )

    // if current view is set to the contact page
    } else if (props.currentView === 'contact') {
        return (
            <div className='project-container'>
                <div className='about-me-container'>
                    <div className='about-me'>About Me</div>    
                </div>
                <div className='portfolio-container'>
                    <div className='portfolio'>Previous Projects:</div>    
                </div>
                <div className='contact-container in-view-from-right'>
                    <Contact />  
                </div>
                <div className='resume-container'>
                    <div className='resume'>Skills:</div>    
                </div>
            </div>
        )
    // if current view is set to the resume page
    } else {
        return (
            <div className='project-container'>
                <div className='about-me-container'>
                    <div className='about-me'>About Me</div>    
                </div>
                <div className='portfolio-container'>
                    <div className='portfolio'>Previous Projects:</div>    
                </div>
                <div className='resume-container'>
                    <div className='contact-container'>Contact Me:</div>    
                </div>
                <div className='resume-container in-view-from-left'>
                    <Resume />   
                </div>
            </div>
        )
    }

}