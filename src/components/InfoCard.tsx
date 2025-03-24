import React from 'react';
import { Link } from 'react-router-dom';
import bgImage from "../assets/images/choir-23.jpg";

const InfoCard: React.FC = () => {
    return (
        <div style={containerStyle}>
            <h2 style={titleStyle}>Lust, zu singen?</h2>
            <p style={textStyle}>Für alle Kompositionen sind Noten und Trainings-Aufnahmen erhältlich!</p>
            <Link to="/contact" style={buttonStyle}>Kontaktiere mich gern!</Link>
        </div>
    );
};

const containerStyle: React.CSSProperties = {
    width: '100%',
    height: '40%',
    background: 'linear-gradient(20deg, var(--medium-blue), var(--dark-blue))',
    borderRadius: '10px',
    padding: '20px',
    boxSizing: 'border-box',  // Ensures padding is included in the width/height
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',  // Optional shadow for better visual
    marginBottom: "40px" 
};

const titleStyle: React.CSSProperties = {
    marginBottom: '10px',
    fontSize: '24px',
    color: 'white',
};

const textStyle: React.CSSProperties = {
    marginBottom: '20px',
    fontSize: '16px',
    color: 'white',
    textAlign: 'center',
};

const buttonStyle: React.CSSProperties = {
    padding: '10px 20px',
    backgroundColor: '#007BFF',  // Blue background color
    color: 'white',
    borderRadius: '5px',
    textDecoration: 'none',  // Removes underline
    fontSize: '16px',
    textAlign: 'center',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease',
};

export default InfoCard;