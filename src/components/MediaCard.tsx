import React from "react";

interface MediaCardProps {
    title: string;
    text: string;
    imageUrl: string;
    audioSrc: string;
    size?: number; // Optional: Default size in pixels
}

const MediaCard: React.FC<MediaCardProps> = ({
    title,
    text,
    imageUrl,
    audioSrc,
    size = 300, // Default to 300px
}) => {
    return (
        <div
            className="media-card"
            style={{
                width: size,
                height: size,
                borderRadius: "20px",
                overflow: "hidden",
                position: "relative",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                padding: "20px",
                backgroundSize: "cover",
                backgroundPosition: "center",
                marginBottom: "40px",
                backgroundImage: imageUrl
                    ? `linear-gradient(to bottom, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0) 80%), 
                    url(${imageUrl})`
                    : "none",
            }}
        >
            <h3 style={{ margin: 0, color: "white", textShadow: "2px 2px 5px black" }}>
                {title}
            </h3>
            <p
                style={{
                    margin: "10px 0",
                    color: "white",
                    textShadow: "2px 2px 5px black",
                    flexGrow: 1,
                }}
            >
                {text}
            </p>
            <audio controls style={{ width: "100%" }}>
                <source src={audioSrc} type="audio/mpeg" />
                Your browser does not support the audio element.
            </audio>
        </div>
    );
};

export default MediaCard;
