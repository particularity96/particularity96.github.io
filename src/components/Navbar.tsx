import { Link } from "react-router-dom";
import { useState } from "react";

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <nav className="navbar">
            <div className="navbar-container">
                <h1 className="logo">Nic Schilling</h1>

                {/* Mobile Menu Button */}
                <button className="menu-button" onClick={() => setMenuOpen(!menuOpen)}>
                    ☰
                </button>

                {/* Desktop Navigation (Visible on PC) */}
                <ul className={`nav-links ${menuOpen ? "mobile-active" : ""}`}>
                    <li><Link to="/" onClick={() => setMenuOpen(false)}>Home</Link></li>
                    <li><Link to="/choir" onClick={() => setMenuOpen(false)}>Chor</Link></li>
                    <li><Link to="/musical" onClick={() => setMenuOpen(false)}>Musical</Link></li>
                    <li><Link to="/games" onClick={() => setMenuOpen(false)}>Games</Link></li>
                    <li><Link to="/about" onClick={() => setMenuOpen(false)}>Vita</Link></li>
                    <li><Link to="/archive" onClick={() => setMenuOpen(false)}>Archiv</Link></li>
                    <li><Link to="/contact" onClick={() => setMenuOpen(false)}>Kontakt</Link></li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
