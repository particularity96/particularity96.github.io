import { motion } from "framer-motion";

export default function Home() {
    return (
        <motion.h1 initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            Welcome!
        </motion.h1>
    );
}
