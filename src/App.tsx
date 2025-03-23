import React from "react";
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
} from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Music from "./pages/Music";
import Musicals from "./pages/Musicals";
import Games from "./pages/Games";
import Archive from "./pages/Archive";
import Contact from "./pages/Contact";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Animated from "./components/Animated"; // Import the new animated component

const App: React.FC = () => {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/music" element={<Music />} />
                <Route path="/musicals" element={<Musicals />} />
                <Route path="/games" element={<Games />} />
                <Route path="/archive" element={<Archive />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/animated" element={<Animated />} /> 
            </Routes>
            <Footer />
        </Router>
    );
};

export default App;