import React from "react";

interface MusicalProps {
    title: string;
    subtitle: string;
    description: string;
    backgroundImage: string;
}

const MusicalShowcase: React.FC<MusicalProps> = ({ title, subtitle, description, backgroundImage }) => {
    return (
        <div className="musical-showcase" style={{ backgroundImage: `url(${backgroundImage})` }}>
            <div className="musical-content">
                <h1>{title}</h1>
                <h3>{subtitle}</h3>
                <p>{description}</p>
            </div>
        </div>
    );
};

export default MusicalShowcase;