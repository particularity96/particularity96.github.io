import React from "react";
import instagramIcon from "../assets/logos/instagram.png";
import linkedinIcon from "../assets/logos/linkedin.png";
import youtubeIcon from "../assets/logos/youtube.png";
import { Link } from "react-router-dom";

const Contact: React.FC = () => {
    return (
        <div className="fullScreenContainer">
            <div className="contact-container">
                <h1>Kontakt</h1>
                <ul className="contact-list">
                    <li><strong>Email:</strong> nic.schilling96@gmail.com</li>
                </ul>
                <div className="social-buttons">
                    <a href="https://www.instagram.com/nic.schilling/" target="_blank" rel="noopener noreferrer" className="social-button">
                        <img src={instagramIcon} alt="Instagram" />
                    </a>
                    <a href="https://www.linkedin.com/in/nic-schilling-90828a19a/" target="_blank" rel="noopener noreferrer" className="social-button">
                        <img src={linkedinIcon} alt="LinkedIn" />
                    </a>
                    <a href="https://www.youtube.com/channel/UCqIDHVXrbbAt0cZ1OLlyZBw" target="_blank" rel="noopener noreferrer" className="social-button">
                        <img src={youtubeIcon} alt="YouTube" />
                    </a>
                </div>
                <div className="legal-links">
                    <ul>
                        <li><Link to="/impressum">Impressum</Link></li> {/* Use Link component */}
                        <li><Link to="/datenschutz">Datenschutz</Link></li> {/* Use Link component */}
                    </ul>
                </div>
            </div>
            </div >
    );
};

export default Contact;