import React from 'react';
import MediaCard from "../components/MediaCard"
import myImage from "../assets/images/choir-23.jpg"
import InfoCard from '../components/InfoCard';

// Import images
import song1Image from "../assets/images/choir-23.jpg";
import song2Image from "../assets/images/choir-23.jpg";
import song3Image from "../assets/images/choir-23.jpg";
import song4Image from "../assets/images/choir-23.jpg";
import song5Image from "../assets/images/choir-23.jpg";
import song6Image from "../assets/images/choir-23.jpg";
import song7Image from "../assets/images/choir-23.jpg";
import song8Image from "../assets/images/choir-23.jpg";
import song9Image from "../assets/images/choir-23.jpg";

// Import audio
import song1Audio from "../assets/audio/Still-live.mp3";
import song2Audio from "../assets/audio/Farewell.Alt.mp3";
import song3Audio from "../assets/audio/Still-live.mp3";
import song4Audio from "../assets/audio/Still-live.mp3";
import song5Audio from "../assets/audio/Still-live.mp3";
import song6Audio from "../assets/audio/Still-live.mp3";
import song7Audio from "../assets/audio/Still-live.mp3";
import song8Audio from "../assets/audio/Still-live.mp3";
import song9Audio from "../assets/audio/Still-live.mp3";

// Define each song's details manually
const mediaItems1 = [
    { title: "Song 1", image: song1Image, audio: song1Audio, text: "This is the first song" },
    { title: "Song 2", image: song2Image, audio: song2Audio, text: "This is the second song" },
    { title: "Song 3", image: song3Image, audio: song3Audio, text: "A beautiful melody for the third song" },
];

const mediaItems2 = [
    { title: "Song 4", image: song1Image, audio: song1Audio, text: "This is the first song" },
    { title: "Song 5", image: song2Image, audio: song2Audio, text: "This is the second song" },
    { title: "Song 6", image: song3Image, audio: song3Audio, text: "A beautiful melody for the third song" },
];

const Choir: React.FC = () => {

    return (
        <div className="media-gallery">
            {/* Spotify Embed at the Top */}
            <div className="spotify-container">
                <iframe
                    src="https://open.spotify.com/embed/artist/7rFgKw092LF3TgxSUBK6OS?utm_source=generator"
                    width="100%"
                    object-position="top"
                    height="352"
                    frameBorder="0"
                    allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                ></iframe>
            </div>

            <div className="media-grid">
                {mediaItems1.map((item, index) => (
                    <MediaCard
                        key={index}
                        title={item.title}
                        text={item.text}
                        imageUrl={item.image}
                        audioSrc={item.audio}
                    />
                ))}
            </div>

            <div>
                <InfoCard />
            </div>

            <div className="media-grid">
                {mediaItems2.map((item, index) => (
                    <MediaCard
                        key={index}
                        title={item.title}
                        text={item.text}
                        imageUrl={item.image}
                        audioSrc={item.audio}
                    />
                ))}
            </div>
        </div>
    );
};

export default Choir;
