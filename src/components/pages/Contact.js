import React, { useState } from 'react';
import '../../styles/pages.css';

export default function Contact() {

    const [warning, setWarning] = useState(false);
    const [emailWarning, setEmailWarning] = useState(false);

    const checkContent = (e) => {

        if (e.target.value === '') {
            console.log('empty field')
            setWarning(true);
        } else {
            setWarning(false);
            console.log('ok')
        }

    };

    const checkEmail = (e) => {

        const regEx = /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/ ;

        if (e.target.value.match(regEx)) {
            console.log('email ok')
            setEmailWarning(false);
        } else {
            console.log('invalid email')
            setEmailWarning(true);
        }
    };


    return (
        <div className='contact-content'>
            <h4 id='contact-title'>Contact Me:</h4>


                <div className='form-container'>
                    <p id='warning'>Name, Email, and Message are Required!</p>
                    <div className='input-container'>
                        <label className='label'>Name:</label>
                        <input onBlur={checkContent} id="name" type="text" placeholder='Enter Your Name Here ...'></input>
                    </div>
                    <div className='input-container'>
                        <label className='label'>Email:</label>
                        <input onBlur={checkEmail} id="email" type='text' placeholder='Enter Your Email Here ...'></input>
                    </div>
                    <div className='message-container'>
                        <label>Message:</label>
                        <textarea onBlur={checkContent} id="message" placeholder='Enter Your Message Here ...'></textarea>
                    </div>
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