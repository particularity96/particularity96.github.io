import React from 'react';
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
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
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 3, duration: 1 }} // Appears after the tagline has faded in
                style={{ marginTop: "40px" }}
            >
                <Link to="/musical" className="nomination-badge">
                    <span className="nomination-badge-highlight">2× nominiert</span>
                    <span className="nomination-badge-subtitle">Deutscher Musical Theater Preis 2026</span>
                </Link>
            </motion.div>
        </div>

    );
};

export default Home;