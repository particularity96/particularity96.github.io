import { motion } from "framer-motion";

export default function FadeInText() {
    const tagline = "Musik - Theater - Games"; // Hardcoded tagline

    // Split the tagline into words
    const words = tagline.split(" ");

    return (
        <motion.div
            style={{
                fontSize: "2.5rem",
                textAlign: "center",
                marginTop: "20px",
            }}
        >
            {words.map((word, index) => (
                <motion.span
                    key={index}
                    initial={{ opacity: 0 }} // Start with no opacity
                    animate={{ opacity: 1 }} // Fade to full opacity
                    transition={{
                        delay: index * 0.5, // Delay each word by 0.5 seconds
                        duration: 1, // Duration of the fade-in effect for each word
                    }}
                    style={{ display: "inline-block", margin: "0 5px" }} // Ensure words are spaced
                >
                    {word}
                </motion.span>
            ))}
        </motion.div>
    );
}
