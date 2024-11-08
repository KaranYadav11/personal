import { useEffect, useRef, useState } from "react";
import Card from "../components/Card";
import CardHeader from "../components/CardHeader";
import SectionHeader from "../components/SectionHeader";
import { motion } from "framer-motion";

function AboutMe() {
  const text =
    "A dedicated React & MERN developer with a strong foundation in JavaScript and expertise in crafting engaging user interfaces with React.js. I thrive on challenges and have honed my problem-solving skills through coding practice on platforms like LeetCode, where I've successfully solved coding problems.\n I’m constantly learning and exploring new technologies to expand my skills. I hold a Bachelor of Technology (B.Tech) degree in Computer Science and Engineering & have done courses in React and JavaScript (Front-End Development). Through my projects, I've developed efficient back-end services with Node.js and Express, while utilizing MongoDB for effective data management.";

  // const [isVisible, setIsVisible] = useState(false);
  // const textRef = useRef(null);

  // Use Intersection Observer to detect when the text comes into view
  // useEffect(() => {
  //   const observer = new IntersectionObserver(
  //     ([entry]) => {
  //       if (entry.isIntersecting) {
  //         setIsVisible(true);
  //         observer.disconnect();
  //       }
  //     },
  //     { threshold: 0.2 }
  //   );

  //   if (textRef.current) {
  //     observer.observe(textRef.current);
  //   }

  //   return () => {
  //     observer.disconnect();
  //   };
  // }, []);

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
                  className="text-sm h-fit text-center lg:text-base text-white/60 mt-1 lg:mt-2"
                >
                  {text}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutMe;
