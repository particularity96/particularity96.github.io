import { motion } from "framer-motion";

interface FadeInTextProps {
    text: string; // The text to display
    duration?: number; // Optional: Set a custom animation duration
}

export default function FadeInText({ text, duration = 2 }: FadeInTextProps) {
    return (
        <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration }}
            style={{ fontSize: "1.5rem", textAlign: "center", marginTop: "20px" }}
        >
            {text}
        </motion.p>
    );
}