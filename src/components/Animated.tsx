import { motion } from "framer-motion";

const Animated: React.FC = () => {
    return (
        <motion.div
            initial={{ x: -100, backgroundColor: "#ff0000" }}  // Start from left and red
            animate={{ x: 100, backgroundColor: "#00ff00" }}  // Move to right and change color to green
            transition={{ duration: 2 }} // Animation duration of 2 seconds
            style={{
                width: "100px",
                height: "100px",
                margin: "auto",
                display: "block"
            }}
        >
            I'm animated!
        </motion.div>
    );
};

export default Animated;