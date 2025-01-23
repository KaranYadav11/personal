import { motion } from "framer-motion";

// eslint-disable-next-line react/prop-types
const ShinyButton = ({ scrollToProjects, handleClick }) => {
  const handleClicker = () => {
    if (scrollToProjects) {
      scrollToProjects(); // Call the scroll function
    }
    if (handleClick) {
      handleClick(); // Call the additional onClick function if provided
    }
  };
  return (
    <motion.button
      onClick={handleClicker}
      className="select-none relative inline-flex items-center gap-2 border border-white/15 px-6 mt-1 h-12 rounded-xl overflow-hidden"
      whileHover={{ scale: 0.98 }} // Slight scale on hover
      whileTap={{ scale: 0.98 }}
      initial="rest"
      animate="shine"
    >
      {/* Shiny Effect */}
      <motion.span
        className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-white to-transparent opacity-30 transform skew-x-12"
        variants={{
          shine: { x: ["-150%", "150%"] }, // Shine moves from left to right
        }}
        transition={{
          duration: 1.8,
          ease: "easeInOut",
          repeat: Infinity,
        }}
      />
      {/* Button Text */}
      <div className="flex items-center justify-center gap-3">
        <span className="select-none font-semibold z-10 relative">Explore</span>
        {/* Icon */}
        {/* <svg
          xmlns="http://www.w3.org/2000/svg"
          height="24px"
          viewBox="0 -960 960 960"
          width="22px"
          fill="#5e91ff"
          className=" z-10 select-none"
        >
          <path d="M479.33-226.67 225-482l58.67-59.33 154.66 152.66v-382.66h84v384l153.34-153.34 58.66 59-255 255Z" />
        </svg> */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="22px"
          viewBox="0 0 64 64"
          width="22px"
          fill="#5e91ff"
          className="relative z-10 select-none"
        >
          <path
            d="M 32 10 C 30.896 10 30 10.896 30 12 L 30 47.279297 L 18.431641 36.076172 C 17.637641 35.308172 16.370516 35.329047 15.603516 36.123047 C 14.835516 36.916047 14.855438 38.182172 15.648438 38.951172 L 30.607422 53.4375 C 30.995422 53.8125 31.498 54 32 54 C 32.502 54 33.003625 53.8125 33.390625 53.4375 L 48.351562 38.951172 C 49.144562 38.183172 49.165484 36.916047 48.396484 36.123047 C 47.629484 35.329047 46.362359 35.308172 45.568359 36.076172 L 34 47.279297 L 34 12 C 34 10.896 33.104 10 32 10 z"
            stroke="#5e91ff"
            strokeWidth="2"
          />
        </svg>
      </div>
    </motion.button>
  );
};

export default ShinyButton;
