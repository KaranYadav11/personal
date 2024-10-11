import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

// eslint-disable-next-line react/prop-types
const Text = ({ texts }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      // eslint-disable-next-line react/prop-types
      setCurrentIndex((prevIndex) => (prevIndex + 1) % texts.length);
    }, 2000); // Change text every 2 seconds

    return () => clearInterval(interval);
    // eslint-disable-next-line react/prop-types
  }, [texts.length]);

  return (
    <div className="relative inline-block w-[40px] text-center">
      <AnimatePresence mode="wait">
        <motion.span
          key={texts[currentIndex]}
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -15 }}
          transition={{
            duration: 0.4,
            type: "spring",
            mass: 0.2,
            damping: 40,
            stiffness: 500,
          }}
          className="select-none absolute bottom-0 left-1 bg-gradient-to-r from-sky-400 to-gray-300  bg-clip-text text-transparent font-bold text-lg tracking-normal"
        >
          {texts[currentIndex]}
        </motion.span>
      </AnimatePresence>
    </div>
  );
};

export default Text;
