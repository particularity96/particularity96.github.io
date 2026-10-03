import React from "react";
import { useNavigate } from "react-router-dom";

interface ShowcaseProps {
    title: string;
    subtitle: string;
    description: string;
    backgroundImage: string;
    buttonText?: string;  // Optional button text
    buttonLink?: string;  // Optional link for the button
}

const Showcase: React.FC<ShowcaseProps> = ({
    title,
    subtitle,
    description,
    backgroundImage,
    buttonText,
    buttonLink
}) => {
    const navigate = useNavigate();

    // Function to handle button click (open link)
    const handleButtonClick = () => {
        if (!buttonLink) return;
        if (buttonLink.startsWith("/")) {
            navigate(buttonLink);  // Internal page: stay in the same tab
        } else {
            window.open(buttonLink, "_blank");  // External link: open in a new tab
        }
    };

    return (
        <div className="showcase" style={{ backgroundImage: `url(${backgroundImage})` }}>
            <div className="showcase-content">
                <h1>{title}</h1>
                <h3>{subtitle}</h3>
                <p>{description}</p>
                {/* Conditionally render the button if buttonText and buttonLink are provided */}
                {buttonText && buttonLink && (
                    <button className="showcase-button" onClick={handleButtonClick}>
                        {buttonText}
                    </button>
                )}
            </div>
        </div>
    );
};

export default Showcase;