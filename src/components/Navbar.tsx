import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="container">
                <h1 className="logo">Nic Schilling</h1>
                <ul className="nav-links">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/music">Music</Link></li>
                    <li><Link to="/musicals">Musicals</Link></li>
                    <li><Link to="/games">Games</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;