import React from 'react';

const Music: React.FC = () => {
    return (
        <div>
            <h2>My Music</h2>
            <p>Listen to my compositions:</p>
            <audio controls>
                <source src="your-music-file.mp3" type="audio/mpeg" />
                Your browser does not support the audio element.
            </audio>
            <p>Or check out my work on Spotify:</p>
            <iframe
                src="your-spotify-embed-link"
                width="300"
                height="80"
                frameBorder="0"
                allow="encrypted-media"
            ></iframe>
        </div>
    );
};

export default Music;
