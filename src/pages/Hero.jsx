import ShinyButton from "../components/ShinyButton";
import Tech from "../components/Tech";
import { Button } from "../components/ui/border-button";
import { FlipWords } from "../components/ui/flip-words";
import { GridBackground } from "../components/ui/grid";
import hero from "../images/your.png";
import { motion } from "framer-motion";

function Hero() {
  const words = ["Karan Yadav", "MERN Developer", "React Developer"];
  const handleDownload = () => {
    if (navigator.vibrate) {
      navigator.vibrate(50);
    }

    const resumeUrl = "/resume.pdf";
    const link = document.createElement("a");
    link.href = resumeUrl;
    link.download = "KaranYadav-Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
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
    <div className="py-36 md:py-36 lg:py-36 " id="home">
      <div className="absolute inset-0 z-0">
        <GridBackground />
      </div>
      <div className="container relative z-10">
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
          {/* <motion.div
            variants={animateVariantUpper}
            className=" border bg-pink-400 glow-btn select-none border-gray-700 rounded-lg px-4 p-1.5 inline-flex gap-4 items-center"
          >
            <div className="text-2xl wave-hand select-none">👋🏻</div>
            <div className="text-sm font-inter font-bold select-none">
              <span className="text-2xl">Download</span>
            </div>
          </motion.div> */}
        </motion.div>
        <motion.div
          initial="hidden"
          animate="show"
          variants={animateVariantBottom}
          className="max-w-lg mx-auto"
        >
          <motion.h1
            variants={animateVariantBottom}
            className="font-calistoga select-none text-3xl md:text-5xl text-center mx-auto  mt-8 tracking-wide"
          >
            Hello, I&apos;m <br />
            <FlipWords words={words} duration={1500} /> <br />
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
          className="flex flex-row md:flex-row justify-center items-center gap-4 mt-8"
        >
          <ShinyButton
            handleClick={handleClick}
            scrollToProjects={scrollToProjects}
          />

          <Button
            onClick={handleDownload}
            containerClassName="select-none  mt-1"
          >
            <div className="flex items-center gap-3 justify-center ">
              <span className="text-white relative z-10 font-semibold">
                Resume
              </span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="21px"
                viewBox="0 0 50 50"
                width="21px"
                fill="#d8d8d8"
                className="relative z-10 select-none"
              >
                <path d="M 38.1875 6.71875 C 36.261719 6.8125 34.34375 7.648438 32.84375 9.09375 C 32.8125 9.125 32.78125 9.15625 32.75 9.1875 C 32.746094 9.191406 32.722656 9.183594 32.71875 9.1875 C 32.675781 9.238281 32.632813 9.289063 32.59375 9.34375 C 32.550781 9.394531 32.507813 9.445313 32.46875 9.5 L 13.65625 28.40625 C 13.613281 28.457031 13.570313 28.507813 13.53125 28.5625 C 11.761719 30.480469 11.796875 33.515625 13.65625 35.375 C 15.5625 37.285156 18.75 37.285156 20.65625 35.375 C 20.75 35.28125 20.832031 35.175781 20.90625 35.0625 C 20.996094 34.996094 21.078125 34.921875 21.15625 34.84375 L 35.25 20.9375 C 35.878906 20.34375 36.054688 19.410156 35.683594 18.628906 C 35.3125 17.847656 34.484375 17.390625 33.625 17.5 C 33.171875 17.558594 32.753906 17.765625 32.4375 18.09375 L 18.34375 32 C 18.285156 32.070313 18.234375 32.140625 18.1875 32.21875 C 18.167969 32.230469 18.144531 32.238281 18.125 32.25 C 18.113281 32.269531 18.105469 32.292969 18.09375 32.3125 C 17.992188 32.375 17.898438 32.449219 17.8125 32.53125 C 17.433594 32.910156 16.878906 32.914063 16.5 32.53125 C 16.121094 32.152344 16.117188 31.601563 16.5 31.21875 L 35.59375 12.03125 C 35.636719 11.980469 35.679688 11.929688 35.71875 11.875 C 37.363281 10.359375 39.558594 10.371094 40.78125 11.59375 C 40.867188 11.675781 40.960938 11.75 41.0625 11.8125 C 41.074219 11.824219 41.082031 11.832031 41.09375 11.84375 C 41.152344 11.921875 41.214844 11.996094 41.28125 12.0625 C 42.425781 13.207031 42.234375 15.621094 40.625 17.3125 C 40.59375 17.34375 40.5625 17.375 40.53125 17.40625 L 19.84375 38.625 C 19.777344 38.671875 19.714844 38.726563 19.65625 38.78125 C 16.972656 41.464844 12.351563 41.789063 9.78125 39.21875 C 7.261719 36.699219 7.523438 32.140625 10.09375 29.4375 C 10.136719 29.398438 10.179688 29.355469 10.21875 29.3125 L 27.25 12.46875 C 27.878906 11.875 28.054688 10.941406 27.683594 10.160156 C 27.3125 9.378906 26.484375 8.921875 25.625 9.03125 C 25.171875 9.089844 24.753906 9.296875 24.4375 9.625 L 7.5 26.375 C 7.46875 26.40625 7.4375 26.4375 7.40625 26.46875 C 7.363281 26.519531 7.320313 26.570313 7.28125 26.625 C 3.234375 30.820313 2.683594 37.78125 6.9375 42.03125 C 11.160156 46.253906 18.082031 45.804688 22.28125 41.8125 C 22.324219 41.78125 22.367188 41.75 22.40625 41.71875 C 22.417969 41.707031 22.425781 41.699219 22.4375 41.6875 C 22.457031 41.667969 22.480469 41.644531 22.5 41.625 C 22.5 41.613281 22.5 41.605469 22.5 41.59375 L 22.625 41.46875 C 22.667969 41.417969 22.710938 41.367188 22.75 41.3125 L 43.40625 20.21875 C 43.554688 20.082031 43.679688 19.925781 43.78125 19.75 C 46.417969 16.734375 46.992188 12.148438 44.09375 9.25 C 44.042969 9.207031 43.992188 9.164063 43.9375 9.125 C 43.847656 8.988281 43.742188 8.863281 43.625 8.75 C 42.148438 7.273438 40.160156 6.621094 38.1875 6.71875 Z" />
              </svg>
            </div>
          </Button>
        </motion.div>
      </div>
    </div>
  );
}

export default Hero;
