import React from 'react';
import myImage from "../assets/images/nic/IMG_9710.jpg"; // Adjust the path according to your folder structure
import FadeInText from "../components/FadeInText"; // Assuming FadeInText is in the components folder

const Home: React.FC = () => {
    return (
        <div
            className="background-image-container"
            style={{ backgroundImage: `url(${myImage})` }} // Apply the image directly
        >
            <h1 className="title">Nic Schilling </h1>
            <FadeInText text="Musik - Theater - Games" duration={4} />
        </div>
    );
};

export default Home;