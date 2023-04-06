import React, { useState } from 'react';
import '../../styles/pages.css';

export default function Contact() {

    const [ nameWarning, setNameWarning ] = useState(false);
    const [ emailWarning, setEmailWarning ] = useState(false);
    const [ messageWarning, setMessageWarning ] = useState(false);

    const checkName = (e) => {

        if (e.target.value === '') {
            setNameWarning(true);
        } else {
            setNameWarning(false);
        }

    };

    const checkEmail = (e) => {

        const regEx = /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/ ;

        if (e.target.value.match(regEx)) {
            setEmailWarning(false);
        } else if (e.target.value === '') {
            setEmailWarning(true);
        } else {
            setEmailWarning(true);
        }
    };

    const checkMessage = (e) => {

        if (e.target.value === '') {
            setMessageWarning(true);
        } else {
            setMessageWarning(false);
        }
    }


    return (
        <div className='contact-content'>
            <h4 id='contact-title'>Contact Me:</h4>
                <div className='form-container'>
                    {nameWarning ? (
                        <div className='input-container'>
                            <label className='label'>Name:</label>
                            <input onBlur={checkName} id="name" type="text" placeholder='Enter Your Name Here ...'></input>
                            <p className='warning'>Name is a required field!</p>
                        </div>
                    ) : (
                        <div className='input-container'>
                            <label className='label'>Name:</label>
                            <input onBlur={checkName} id="name" type="text" placeholder='Enter Your Name Here ...'></input>
                        </div>
                    )}
                    {emailWarning ? (
                        <div className='input-container'>
                            <label className='label'>Email:</label>
                            <input onBlur={checkEmail} id="email" type='text' placeholder='Enter Your Email Here ...'></input>
                            <p className='warning'>Please enter a valid email!</p>
                        </div>
                    ) : (
                        <div className='input-container'>
                            <label className='label'>Email:</label>
                            <input onBlur={checkEmail} id="email" type='text' placeholder='Enter Your Email Here ...'></input>
                        </div>
                    )}
                    {messageWarning ? (
                        <div className='message-container'>
                            <label>Message:</label>
                            <textarea onBlur={checkMessage} id="message" placeholder='Enter Your Message Here ...'></textarea>
                            <p className='warning'>Please enter your message!</p>
                        </div>
                    ) : (
                        <div className='message-container'>
                            <label>Message:</label>
                            <textarea onBlur={checkMessage} id="message" placeholder='Enter Your Message Here ...'></textarea>  
                        </div>
                    )}
                    <button type='submit' id='submit'>Submit</button>
                </div>

            <div className='contact-info-container'>
                <h4>Phone:</h4>
                <p>646-651-0384</p>
                <h4>Email:</h4>
                <a href='mailto:jackiew1120@hotmail.com'>jackiew1120@hotmail.com</a>
            </div>
        </div>

    )

};