import ShinyButton from "../components/ShinyButton";
import Tech from "../components/Tech";
import hero from "../images/your.png";
import { motion } from "framer-motion";

function Hero() {
  const animateVariantBottom = {
    hidden: { opacity: 0, y: 100, scale: 0.95 }, // Slightly scaled down for subtle pop-up effect
    show: {
      opacity: 1,
      y: 0,
      scale: 1, // Back to normal scale
      transition: {
        ease: [0.6, -0.05, 0.01, 0.99], // Smooth easing curve for a natural motion
        duration: 1, // Extended duration for smoother animation
        staggerChildren: 0.2, // Faster stagger effect for each child
        delayChildren: 0, // Slight delay before starting child animations
      },
    },
  };
  const animateVariantUpper = {
    hidden: { opacity: 0, y: -100, scale: 0.95 }, // Slightly scaled down for subtle pop-up effect
    show: {
      opacity: 1,
      y: 0,
      scale: 1, // Back to normal scale
      transition: {
        ease: [0.6, -0.05, 0.01, 0.99], // Smooth easing curve for a natural motion
        duration: 1, // Extended duration for smoother animation
        staggerChildren: 0.2, // Faster stagger effect for each child
        delayChildren: 0, // Slight delay before starting child animations
      },
    },
  };

  const scrollToProjects = () => {
    const projectsSection = document.getElementById("projects");
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: "smooth" });
    }
  };
  const handleClick = () => {
    if ("vibrate" in navigator) {
      navigator.vibrate(20);
    } else {
      console.log("Vibration is NOT supported on this device.");
    }
  };
  return (
    <div className="py-36 md:py-36 lg:py-36" id="home">
      <div className="container">
        <motion.div
          initial="hidden"
          animate="show"
          variants={animateVariantUpper}
          className="flex flex-col items-center"
        >
          <motion.img
            variants={animateVariantUpper}
            className="size-[170px] brightness-105 select-none"
            src={hero}
            alt="Avatar"
          />
          <motion.div
            variants={animateVariantUpper}
            className="bg-gray-950 border glow-btn select-none border-gray-700 rounded-lg px-4 p-1.5 inline-flex gap-4 items-center"
          >
            <div className="text-2xl wave-hand select-none">👋🏻</div>
            <div className="text-sm font-inter font-bold select-none">
              Hey, I&apos;m <span>Karan</span>
            </div>
          </motion.div>
        </motion.div>
        <motion.div
          initial="hidden"
          animate="show"
          variants={animateVariantBottom}
          className="max-w-lg mx-auto"
        >
          <motion.h1
            variants={animateVariantBottom}
            className="font-calistoga select-none text-3xl md:text-5xl text-center mt-8 tracking-wide"
          >
            Crafting Dynamic User Experiences with React
          </motion.h1>
          <motion.p
            variants={animateVariantBottom}
            className="mt-0  select-none"
          >
            <Tech />
          </motion.p>
        </motion.div>

        <motion.div
          initial="hidden"
          animate="show"
          variants={animateVariantBottom}
          className="flex flex-col md:flex-row justify-center items-center gap-4 mt-8"
        >
          <ShinyButton
            handleClick={handleClick}
            scrollToProjects={scrollToProjects}
          />
        </motion.div>
      </div>
    </div>
  );
}

export default Hero;
