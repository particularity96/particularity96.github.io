import React from "react";
import FadeInText from "../components/AnimFadeIn"; // Ensure correct path
import myImage from "../assets/test.png"; // Replace with your actual image path

export default function Home() {
    return (
        <div className="home-container">
            <FadeInText text="Nic Schilling" duration={1.5} />
            <FadeInText text="Musik - Theater - Games" duration={4} />
            <img src={myImage} alt="A descriptive alt text" className="home-image" />
        </div>
    );
}