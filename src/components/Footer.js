import React from "react";
import '../styles/footer.css'

export default function Footer() {
    return (

        <div className="footer-container">
            <h5 className="footer-title">Check out my GitHub & Social Media Accounts:</h5>
            <a href="https://github.com/FeddericoWayne" target="_blank" className="social-icon"><img src='./assets/logos/github-logo.png' id="github" alt="github-link"></img></a>
            <a href="https://www.linkedin.com/in/fred-diaz-wang-88392313/" target="_blank" className="social-icon"><img src='./assets/logos/linkedin-logo.png' id="linkedin" alt="linkedin-link"></img></a>
            <a href="https://www.instagram.com/fedderico.wang/?hl=en" target="_blank" className="social-icon"><img src='./assets/logos/instagram-logo.png' id="instagram" alt="instagram-link"></img></a>
            <a href="https://www.facebook.com/freddie.wampson" target="_blank" className="social-icon"><img src='./assets/logos/facebook-logo.png' id="facebook" alt="facebook-link"></img></a>
        </div>
    )




}