import React from "react";
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link,
    Navigate
} from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Choir from "./pages/Choir";
import Musical from "./pages/Musical";
import Games from "./pages/Games";
import Archive from "./pages/Archive";
import Contact from "./pages/Contact";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Seo from "./components/Seo";
import Impressum from "./pages/Impressum";
import Datenschutz from "./pages/Datenschutz";

// Titles and descriptions for each page live in src/seo/pages.json
const App: React.FC = () => {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path="/" element={
                    <>
                        <Seo path="/" />
                        <Home />
                    </>
                } />
                <Route path="/about" element={
                    <>
                        <Seo path="/about" />
                        <About />
                    </>
                } />
                <Route path="/choir" element={
                    <>
                        <Seo path="/choir" />
                        <Choir />
                    </>
                } />
                <Route path="/musical" element={
                    <>
                        <Seo path="/musical" />
                        <Musical />
                    </>
                } />
                <Route path="/games" element={
                    <>
                        <Seo path="/games" />
                        <Games />
                    </>
                } />
                <Route path="/entdecken" element={
                    <>
                        <Seo path="/entdecken" />
                        <Archive />
                    </>
                } />
                {/* Alte Adresse weiterleiten */}
                <Route path="/archive" element={<Navigate to="/entdecken" replace />} />
                <Route path="/contact" element={
                    <>
                        <Seo path="/contact" />
                        <Contact />
                    </>
                } />
                <Route path="/impressum" element={
                    <>
                        <Seo path="/impressum" />
                        <Impressum />
                    </>
                } />
                <Route path="/datenschutz" element={
                    <>
                        <Seo path="/datenschutz" />
                        <Datenschutz />
                    </>
                } />
                {/* Unbekannte Adressen auf die Startseite leiten */}
                <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
            <Footer />
        </Router>
    );
};

export default App;
