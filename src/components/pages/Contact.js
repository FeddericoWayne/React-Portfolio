import React from 'react';
import '../../styles/pages.css';

export default function Contact() {

    return (
        <div className='contact-content'>
            <h4 id='contact-title'>Contact Me:</h4>
            <div className='form-container'>
                <div className='input-container'>
                    <label className='label'>Name:</label>
                    <input id="name" type="text" placeholder='Enter Your Name Here ...'></input>
                </div>
                <div className='input-container'>
                    <label className='label'>Email:</label>
                    <input id="email" type='text' placeholder='Enter Your Email Here ...'></input>
                </div>
                <div className='message-container'>
                    <label>Message:</label>
                    <textarea id="message" placeholder='Enter Your Message Here ...'></textarea>
                </div>
                <button type='submit' id='submit'>Submit</button>
            </div>
            <div className='contact-info-container'>
                <h4>Phone:</h4>
                <p>646-651-0384</p>
                <h4>Email:</h4>
                <a href='mailto:jackiew1120@hotmail.com'>jackiew1120@hotmail</a>
            </div>
        </div>

    )

};