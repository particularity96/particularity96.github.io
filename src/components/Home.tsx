import React from 'react';
import AnimFadeIn from "../components/AnimFadeIn";


const Home: React.FC = () => {
    return (

        <div>
            <h2>Nic Schilling</h2>
            <AnimFadeIn text="Musik - Theater - Chor" duration={4} />
        </div>
    );
};

export default Home;
