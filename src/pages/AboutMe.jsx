import { useEffect, useRef, useState } from "react";
import Card from "../components/Card";
import CardHeader from "../components/CardHeader";
import SectionHeader from "../components/SectionHeader";
import { motion } from "framer-motion";

function AboutMe() {
  const text =
    "A dedicated React & MERN developer with a strong foundation in JavaScript and expertise in crafting engaging user interfaces with React.js. I thrive on challenges and have honed my problem-solving skills through coding practice on platforms like LeetCode, where I've successfully solved coding problems.\n I’m constantly learning and exploring new technologies to expand my skills. I hold a Bachelor of Technology (B.Tech) degree in Computer Science and Engineering & have done courses in React and JavaScript (Front-End Development). Through my projects, I've developed efficient back-end services with Node.js and Express, while utilizing MongoDB for effective data management.";

  const letterVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.5 }, // Added scale
    visible: { opacity: 1, y: 0, scale: 1 }, // Restored scale
  };

  const [isVisible, setIsVisible] = useState(false);

  const textRef = useRef(null); // Ref to attach to the text element

  // Use Intersection Observer to detect when the text comes into view
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true); // Set isVisible to true when in view
          observer.disconnect(); // Stop observing once it has entered the view
        }
      },
      { threshold: 0.2 } // Trigger when 10% of the element is visible
    );

    if (textRef.current) {
      observer.observe(textRef.current); // Observe the text element
    }

    return () => {
      observer.disconnect(); // Clean up the observer on component unmount
    };
  }, []);

  return (
    <section className="py-16 mb-16 lg:py-28" id="about">
      <div className="container">
        <SectionHeader
          title="Explore my World"
          description="Discover more about me who I am, skills and technologies I have worked with."
          eyebrow="About Me"
        />
        <div className="mt-10 flex flex-col gap-8">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-5 lg:grid-cols-3">
            <div className="h-[300px] md:h-[250px] lg:h-[230px] md:col-span-5 lg:col-span-3">
              <div className="flex flex-col p-6 md:px-10 md:py-8">
                <div className="inline-flex justify-center items-center gap-2">
                  <span className="text-3xl font-calistoga">
                    Hello , I&apos;m
                  </span>
                  <span className="font-calistoga text-3xl tracking-wide bg-gradient-to-r from-sky-400 to-gray-300 text-transparent bg-clip-text text-center">
                    Karan
                  </span>
                </div>
                <hr className="border-t-2 border-white/5 mt-4 md:mt-5" />
                <p
                  style={{ whiteSpace: "pre-line" }}
                  className="text-sm  h-fit text-center lg:text-base text-white/60 mt-1 lg:mt-2"
                  ref={textRef}
                >
                  {text.split("").map((char, index) => (
                    <motion.span
                      key={index}
                      variants={letterVariants}
                      initial="hidden" // Start state for each letter
                      animate={isVisible ? "visible" : "hidden"}
                      transition={{
                        duration: 0.1,
                        delay: isVisible ? index * 0.025 : 0, // Staggered delay for letter reveal
                        type: "spring", // Optional: Change to "spring" for a bouncy effect
                        stiffness: 100, // Optional: Adjust stiffness for bounce
                      }}
                    >
                      {char}
                    </motion.span>
                  ))}
                </p>
              </div>
            </div>
          </div>
          {/* <div className="grid bg-purple-400 grid-cols-1 gap-8 md:grid-cols-5 lg:grid-cols-3"> */}
          {/* <Card className="h-[190px] md:h-[250px] lg:h-[280px] md:col-span-2 lg:col-span-1">
              <CardHeader
                svgs={
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="24px"
                    viewBox="0 -960 960 960"
                    width="24px"
                    fill="#4B77D1"
                  >
                    <path d="M480-120 200-272v-240L40-600l440-240 440 240v320h-80v-276l-80 44v240L480-120Zm0-332 274-148-274-148-274 148 274 148Zm0 241 200-108v-151L480-360 280-470v151l200 108Zm0-241Zm0 90Zm0 0Z" />
                  </svg>
                }
                title="Education"
                description="I hold a Bachelor of Technology (B.Tech) degree in Computer Science and Engineering & have done courses in React and JavaScript (Front-End Development)."
              />
            </Card> */}
          {/* <Card className="h-[290px] md:h-[250px] lg:h-[280px] md:col-span-3 lg:col-span-2">
              <CardHeader
                svgs={
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="24px"
                    viewBox="0 -960 960 960"
                    width="24px"
                    fill="#9DC384"
                  >
                    <path d="M320-240h60v-80h80v-60h-80v-80h-60v80h-80v60h80v80Zm200-30h200v-60H520v60Zm0-100h200v-60H520v60Zm44-152 56-56 56 56 42-42-56-58 56-56-42-42-56 56-56-56-42 42 56 56-56 58 42 42Zm-314-70h200v-60H250v60Zm-50 472q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h560q33 0 56.5 23.5T840-760v560q0 33-23.5 56.5T760-120H200Zm0-80h560v-560H200v560Zm0-560v560-560Z" />
                  </svg>
                }
                title="Skills & Tech"
                description="I have experience working with the MERN stack (MongoDB, Express.js, React.js, Node.js), and I love building dynamic, user-friendly web applications. My passion lies in creating seamless, responsive front-end experiences using React. Through my projects, I've developed efficient back-end services with Node.js and Express, while utilizing MongoDB for effective data management."
              />
            </Card> */}
          {/* </div> */}
          {/* <div className="grid grid-cols-1 gap-8 md:grid-cols-5 lg:grid-cols-3">
            <Card className="h-[300px] md:h-[250px] lg:h-[280px] md:col-span-3 lg:col-span-3">
              <div className="flex flex-col p-6 md:px-10 md:py-8">
                <div className="inline-flex justify-center items-center gap-2">
                  <span className="text-3xl font-calistoga">Hello , I'm</span>
                  <span className="font-calistoga text-3xl tracking-wide bg-gradient-to-r from-sky-400 to-gray-300 text-transparent bg-clip-text text-center">
                    Karan
                  </span>
                </div>
                <hr className="border-t-2 border-white/5 mt-4 md:mt-5" />
                <p className="text-sm text-center lg:text-base text-white/60 mt-1 lg:mt-2">
                  A dedicated React & MERN developer with a strong foundation in
                  JavaScript and expertise in crafting engaging user interfaces
                  with React.js. I thrive on challenges and have honed my
                  problem-solving skills through coding practice on platforms
                  like LeetCode, where I've successfully solved 200+ coding
                  problems. I’m constantly learning and exploring new
                  technologies to expand my skills.
                </p>
              </div>
            </Card>
          </div> */}
          {/* <Card className="h-[180px] md:h-[250px] lg:h-[280px]  md:col-span-2 lg:col-span-1">
              <CardHeader
                svgs={
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="24px"
                    viewBox="0 -960 960 960"
                    width="24px"
                    fill="#BD4C31"
                  >
                    <path d="M160-200q-33 0-56.5-23.5T80-280v-400q0-33 23.5-56.5T160-760h640q33 0 56.5 23.5T880-680v400q0 33-23.5 56.5T800-200H160Zm0-80h640v-400H160v400Zm160-40h320v-80H320v80ZM200-440h80v-80h-80v80Zm120 0h80v-80h-80v80Zm120 0h80v-80h-80v80Zm120 0h80v-80h-80v80Zm120 0h80v-80h-80v80ZM200-560h80v-80h-80v80Zm120 0h80v-80h-80v80Zm120 0h80v-80h-80v80Zm120 0h80v-80h-80v80Zm120 0h80v-80h-80v80ZM160-280v-400 400Z" />
                  </svg>
                }
                title="Techinical Skills"
                description="HTML, CSS, JavaScript, React, Node.js, Express.js, MongoDB, Tailwind CSS"
              />
            </Card> */}
        </div>
      </div>
    </section>
  );
}

export default AboutMe;
