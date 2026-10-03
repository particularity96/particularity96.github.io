import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
    return (
        <nav className="footer">
            <div className="footercontainer">
                <p>&copy; 2025 Nic Schilling. All rights reserved.</p>
                <ul className="footer-links">
                    <li><Link to="/impressum">Impressum</Link></li>
                    <li><Link to="/datenschutz">Datenschutz</Link></li>
                </ul>
            </div>
        </nav>
            
    );
};

export default Footer;
