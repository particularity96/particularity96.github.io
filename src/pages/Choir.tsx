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
                <div className="flex-container">
                    <iframe
                        src="https://open.spotify.com/embed/artist/7rFgKw092LF3TgxSUBK6OS?utm_source=generator"
                        width="100%"
                        object-position="top"
                        height="352"
                        frameBorder="0"
                        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                        loading = "lazy"
                    ></iframe>
                </div>
        </div>
    );
};

export default Music;
