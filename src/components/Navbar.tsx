import React from 'react';
import { Link } from 'react-router-dom';

const Navbar: React.FC = () => {
    return (
        <nav>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/music">Music</Link></li>
                <li><Link to="/musicals">Musicals</Link></li>
                <li><Link to="/games">Games</Link></li>
                <li><Link to="/archive">Archive</Link></li>
                <li><Link to="/contact">Contact</Link></li>
            </ul>
        </nav>
    );
};

export default Navbar;
