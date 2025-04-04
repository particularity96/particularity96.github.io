import React from 'react';
import myImage from "../assets/images/nic/Chor24-2.jpg"; // Adjust the path according to your folder structure
import FadeInText from "../components/FadeInText"; // Assuming FadeInText is in the components folder

const Home: React.FC = () => {
    return (
        <div
            className="background-image-container"
            style={{ backgroundImage: `linear-gradient(to top, rgba(0, 0, 0, 0.9) 0%, rgba(0, 0, 0, 0) 100%), url(${myImage})` }} // Apply the image directly
        >
            <h1 className="title">Nic Schilling </h1>
            <FadeInText />
        </div>

    );
};

export default Home;