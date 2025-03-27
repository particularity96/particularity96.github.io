import React from "react";
import {
    HashRouter as Router,
    Routes,
    Route,
    Link
} from "react-router-dom";
import { Helmet } from 'react-helmet'; 
import Home from "./pages/Home";
import About from "./pages/About";
import Choir from "./pages/Choir";
import Musical from "./pages/Musical";
import Games from "./pages/Games";
import Archive from "./pages/Archive";
import Contact from "./pages/Contact";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Impressum from "./pages/Impressum";
import Datenschutz from "./pages/Datenschutz";

const App: React.FC = () => {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path="/" element={
                    <>
                        <Helmet>
                            <title>Home | Nic Schilling</title>
                            <meta name="description" content="Musik - Theater - Chor" /> <meta name="robots" content="index, follow" />
                        </Helmet>
                        <Home />
                    </>
                } />
                <Route path="/about" element={
                    <>
                        <Helmet>
                            <title>Vita | Nic Schilling</title>
                            <meta name="description" content="Eine Kurzbiografie von Nic Schilling." />
                        </Helmet>
                        <About />
                    </>
                } />
                <Route path="/choir" element={
                    <>
                        <Helmet>
                            <title>Chor | Nic Schilling</title>
                            <meta name="description" content="Kompositionen, Chorwerke und Vokal-Arrangements von Nic Schilling mit Hörbeispielen." />
                        </Helmet>
                        <Choir />
                    </>
                } />
                <Route path="/musical" element={
                    <>
                        <Helmet>
                            <title>Musical | Nic Schilling</title>
                            <meta name="description" content="Musical, Musiktheater und Live-Hörspiele von Nic Schilling mit Hörbeispielen." />
                        </Helmet>
                        <Musical />
                    </>
                } />
                <Route path="/games" element={
                    <>
                        <Helmet>
                            <title>Games | Nic Schilling</title>
                            <meta name="description" content="Interaktive Bildung, Extended Reality und Games!" />
                        </Helmet>
                        <Games />
                    </>
                } />
                <Route path="/archive" element={
                    <>
                        <Helmet>
                            <title>Archiv | Nic Schilling</title>
                            <meta name="description" content="Eine Sammlung aller wesentlichen Projekte von und mit Nic Schilling." />
                        </Helmet>
                        <Archive />
                    </>
                } />
                <Route path="/contact" element={
                    <>
                        <Helmet>
                            <title>Kontakt | Nic Schilling</title>
                            <meta name="description" content="Kontaktmöglichkeiten für Anfragen und Aufträge." />
                        </Helmet>
                        <Contact />
                    </>
                } />
                <Route path="/impressum" element={
                    <>
                        <Helmet>
                            <title>Impressum | Nic Schilling</title>
                            <meta name="description" content="Rechtlich verbindliche Erklärung zur Verantwortung über den Inhalt" />
                        </Helmet>
                        <Impressum />
                    </>
                } />
                <Route path="/datenschutz" element={
                    <>
                        <Helmet>
                            <title>Datenschutz | Nic Schilling</title>
                            <meta name="description" content="Erklärung zum Datenschutz." />
                        </Helmet>
                        <Datenschutz />
                    </>
                } />
            </Routes>
            <Footer />
        </Router>
    );
};

export default App;