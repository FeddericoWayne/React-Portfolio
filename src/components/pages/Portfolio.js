// imports react and stylesheet
import React from 'react';
import '../../styles/pages.css';


export default function Portfolio(props) {

    const projectLength = props.projects.length;

    return (
        <div className='portfolio-content'>
            <h4 id='portfolio-title'>Previous Projects:</h4>
            {props.projects.map((project, index)=>{

                if (index === projectLength -1) {
                    return (
                        <div key={project.title} className='app-container'>
                            <h3 className='app-title'>{project.title}</h3>
                            <img className='screenshot' src={project.src} alt={project.title}></img>
                            <div className='link-container'>
                                <a href={project.appUrl} target='blank' className='app-link'>Go to Application</a>
                                <a href={project.repo} target='blank' className='app-link'>GitHub Repo</a>
                            </div>
                            <a href='#portfolio-title' id='back'>Back to Top</a>
                        </div>
                    )
                }
                
                return (
                    <div key={project.title} className='app-container'>
                        <h3 className='app-title'>{project.title}</h3>
                        <img className='screenshot' src={project.src} alt={project.title}></img>
                        <div className='link-container'>
                            <a href={project.appUrl} target='blank' className='app-link'>Go to Application</a>
                            <a href={project.repo} target='blank' className='app-link'>GitHub Repo</a>
                        </div>
                        <hr className='partition'/>
                    </div>
                )
            })}
        </div>

    )

};