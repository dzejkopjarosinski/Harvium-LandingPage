import { motion } from "framer-motion";
import useReveal from "@/components/animations/reveal/useReveal.js";

const Reveal = ({ children }) => {

    const { ref, revealControls } = useReveal()

    return (
        <div ref={ref} className='relative overflow-hidden'>
            <motion.div
                variants={{
                    hidden: { opacity: 0, y: 75 },
                    visible: { opacity: 1, y: 0 },
                }}
                initial='hidden'
                animate={revealControls}
                transition={{ duration: 0.5, delay: 0.25 }}
            >
                {children}
            </motion.div>
        </div>
    );
};

export default Reveal;
