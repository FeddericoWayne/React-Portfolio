// imports react and stylesheet for navbar
import React from 'react';
import '../styles/header.css';

export default function Naviation({ currentView,handlePageDisplay }) {

    return (
        <div className='navlinks-container'>

            <div className='navlinks'>
                <a href="#about" onClick={()=>handlePageDisplay('about')} className={currentView === 'about'? 'navlink active-right' : 'navlink'}>About Me</a>
            </div>
            <div className='navlinks'>
                <a href="#portfolio" onClick={()=>handlePageDisplay('portfolio')} className={currentView === 'portfolio'? 'navlink active-left' : 'navlink'}>Portfolio</a>
            </div>
            <div className='navlinks'>
                <a href="#contact" onClick={()=>handlePageDisplay('contact')} className={currentView === 'contact'? 'navlink active-right' : 'navlink'}>Contact</a>
            </div>
            <div className='navlinks'>
                <a href="#resume" onClick={()=>handlePageDisplay('resume')} className={currentView === 'resume'? 'navlink active-left' : 'navlink'}>Resume</a>
            </div>

        </div>

    )
}