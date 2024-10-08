import { motion } from "framer-motion";

// eslint-disable-next-line react/prop-types
const ShinyButton = ({ scrollToProjects }) => {
  return (
    <motion.button
      onClick={scrollToProjects}
      className="relative inline-flex items-center gap-2 border border-white/15 px-6 mt-1 h-12 rounded-xl overflow-hidden"
      whileHover={{ scale: 0.98 }} // Slight scale on hover
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
      <span className="font-semibold relative z-10">Explore</span>
      {/* Icon */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        height="24px"
        viewBox="0 -960 960 960"
        width="22px"
        fill="#5e91ff"
        className="relative z-10"
      >
        <path d="M479.33-226.67 225-482l58.67-59.33 154.66 152.66v-382.66h84v384l153.34-153.34 58.66 59-255 255Z" />
      </svg>
    </motion.button>
  );
};

export default ShinyButton;
