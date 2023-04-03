import React from 'react';
import '../styles/header.css';

export default function Naviation({ currentView,handlePageDisplay }) {

    
    return (
        <div className='navlinks-container'>

            <div className='navlinks'>
                <a href="#about" onClick={()=>handlePageDisplay('about')} className="navlink active">About Me</a>
            </div>
            <div className='navlinks'>
                <a href="#portfolio" onClick={()=>handlePageDisplay('portfolio')} className={currentView === 'portfolio'? 'navlink active' : 'navlink'}>Portfolio</a>
            </div>
            <div className='navlinks'>
                <a href="#contact" onClick={()=>handlePageDisplay('contact')} className={currentView === 'contact'? 'navlink active' : 'navlink'}>Contact</a>
            </div>
            <div className='navlinks'>
                <a href="#resume" onClick={()=>handlePageDisplay('resume')} className={currentView === 'resume'? 'navlink active' : 'navlink'}>Resume</a>
            </div>

        </div>


    )
}