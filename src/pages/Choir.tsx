import React from 'react';
import MediaCard from "../components/MediaCard"
import myImage from "../assets/images/choir-23.jpg"
import InfoCard from '../components/InfoCard';

// Import images
import song1Image from "../assets/images/album-cover/Album_Cover_Still.png";
import song2Image from "../assets/images/album-cover/Album_Cover_Farewell.png";
import song3Image from "../assets/images/album-cover/Album_Cover_Farewell.png";
import song4Image from "../assets/images/choir-23.jpg";
import song5Image from "../assets/images/choir-23.jpg";
import song6Image from "../assets/images/choir-23.jpg";
import song7Image from "../assets/images/Toy-Story.jpg";
import song8Image from "../assets/images/Piano-Lonely.jpg";
import song9Image from "../assets/images/Miss_Saigon_Darker.png";

// Import audio
import song1Audio from "../assets/audio/Still-live.mp3";
import song2Audio from "../assets/audio/Sandburgen.mp3";
import song3Audio from "../assets/audio/Farewell to a dying star.mp3";
import song4Audio from "../assets/audio/Breaking.V7.full.mp3";
import song5Audio from "../assets/audio/Still-live.mp3";
import song6Audio from "../assets/audio/Still-live.mp3";
import song7Audio from "../assets/audio/Still-live.mp3";
import song8Audio from "../assets/audio/Still-live.mp3";
import song9Audio from "../assets/audio/Still-live.mp3";

// Define each song's details manually
const mediaItems1 = [
    { title: "Still", image: song1Image, audio: song1Audio, text: "Unichor Bayreuth" },
    { title: "Von Sehnsucht und Sandburgen", image: song2Image, audio: song2Audio, text: "Ein Stück über das älter werden, über Vertrautheit, und über das Abschied nehmen. (S: Annabell Strobel / A: Nina Pesch)" },
    { title: "Farewell to a Dying Star", image: song3Image, audio: song3Audio, text: "Inspiriert von dem Gedicht 'Do not go gentle into that good night' von Dylan Thomas. Zwei Sterne stehen seit Jahrmillionen nebeneinander am Nachthimmel. Während der eine verglüht, singt ihm der andere dieses Abschiedslied. (S/A: Annabell Strobel)" },
];

const mediaItems2 = [
    { title: "Breaking through the sky", image: song4Image, audio: song4Audio, text: "Das Schwesterstück zu 'Farewell to a dying star'. Zwei Liebende fallen durch den Himmel, während sie sich an den Händen halten. (S/A: Annabell Strobel)" },
    { title: "Song 5", image: song5Image, audio: song5Audio, text: "This is the second song" },
    { title: "Song 6", image: song6Image, audio: song6Audio, text: "A beautiful melody for the third song" },
];

const mediaItems3 = [
    { title: "When she loved me", image: song7Image, audio: song7Audio, text: "Bekannt aus dem Film 'Toy Story 2'." },
    { title: "Louder Than Words", image: song8Image, audio: song8Audio, text: "Aus dem Musical 'Tick Tick Boom' von Jonathan Larsson. Verfilmt unter der Regie von Lin-Manuel Miranda." },
    { title: "Why God Why?", image: song9Image, audio: song9Audio, text: "Aus dem Musical 'Miss Saigon'. Bei dieser Aufnahme handelt es sich nur um einen kurzen Ausschnitt aus dem Arrangement." },
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
            <div>
                <InfoCard />
            </div>
            <div className="media-grid">
                {mediaItems3.map((item, index) => (
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
