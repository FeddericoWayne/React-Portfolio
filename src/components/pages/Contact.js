import React, { useState } from 'react';
import '../../styles/pages.css';

export default function Contact() {

    const [ nameWarning, setNameWarning ] = useState(undefined);
    const [ emailWarning, setEmailWarning ] = useState(undefined);
    const [ messageWarning, setMessageWarning ] = useState(undefined);
    const [ submitWarning, setSubmitWarning ] = useState(undefined);

    const checkName = (e) => {

        if (e.target.value === '') {
            setNameWarning("Oops! Please enter your name!");
            setSubmitWarning("");
        } else {
            setNameWarning("");
        }

    };

    const checkEmail = (e) => {

        const regEx = /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/ ;

        if (e.target.value.match(regEx)) {
            setEmailWarning("");
        } else if (e.target.value === '') {
            setEmailWarning("Oops! Please enter a valid email!");
            setSubmitWarning("");
        } else {
            setEmailWarning("Oops! Please enter a valid email!");
            setSubmitWarning("");
        }
    };

    const checkMessage = (e) => {

        if (e.target.value === '') {
            setMessageWarning("Oops! Please enter your message!");
            setSubmitWarning("");
        } else {
            setMessageWarning("");
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (nameWarning === undefined || emailWarning === undefined || messageWarning === undefined) {
            
            document.getElementById("submit-warning").classList.remove("green");
            setSubmitWarning("Please enter all the required fields!");
            setTimeout(()=> {
                setSubmitWarning("");
            },1500);
            return;
        };

        if (nameWarning.length || emailWarning.length || messageWarning.length) {

            document.getElementById("submit-warning").classList.remove("green");
            setSubmitWarning("Please enter all the required fields!");
            setTimeout(()=> {
                setSubmitWarning("");
            },1500);
            return;
        };

        if (!nameWarning.length && !emailWarning.length && !messageWarning.length) {

            document.getElementById("submit-warning").classList.add("green");
            setSubmitWarning("Message submitted. Thank you!")
            document.getElementById("name").value = "";
            document.getElementById("email").value = "";
            document.getElementById("message").value = "";
            setTimeout(()=> {
                setSubmitWarning("");
                document.location.reload();
            },2000);
            
        }
    };


    return (
        <div className='contact-content'>
            <h4 id='contact-title'>Contact Me:</h4>
                <div className='form-container'>

                    <div className='input-container'>
                        <label className='label'>Name:</label>
                        <input onChange={checkName} onBlur ={checkName} id="name" type="text" placeholder='Enter Your Name Here ...'></input>
                        <p className='warning'>{nameWarning}</p>
                    </div>

                    <div className='input-container'>
                        <label className='label'>Email:</label>
                        <input onChange={checkEmail} onBlur={checkEmail} id="email" type='text' placeholder='Enter Your Email Here ...'></input>
                        <p className='warning'>{emailWarning}</p>
                    </div>

                    <div className='message-container'>
                        <label>Message:</label>
                        <textarea onChange={checkMessage} onBlur={checkMessage} id="message" placeholder='Enter Your Message Here ...'></textarea>
                        <p className='warning'>{messageWarning}</p>
                    </div>

                    <div>
                        <button onClick={handleSubmit} type='submit' id='submit'>Submit</button>
                        <p className='submit-warning' id='submit-warning'>{submitWarning}</p>
                    </div>
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