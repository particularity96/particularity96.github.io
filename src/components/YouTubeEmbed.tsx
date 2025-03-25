import React from "react";

interface YouTubeEmbedProps {
    youtubeId: string; // YouTube video ID
    title: string; // Title of the game
}

const YouTubeEmbed: React.FC<YouTubeEmbedProps> = ({ youtubeId, title}) => {
    return (
        <div className="video-container">
            <iframe
                width="100%"
                height="100%"
                src={`https://www.youtube.com/embed/${youtubeId}`}
                title={title}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
            ></iframe>
        </div>
    );
};

export default YouTubeEmbed;