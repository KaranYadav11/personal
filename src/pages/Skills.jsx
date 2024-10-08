import SectionHeader from "../components/SectionHeader";

import { motion } from "framer-motion";

import useSectionInView from "../utils/useSection";

function Skills() {
  const { ref, isInView } = useSectionInView("#skills");
  const skillsData = [
    { id: 1, skill: "HTML5" },
    { id: 2, skill: "CSS3" },
    { id: 3, skill: "React" },
    { id: 4, skill: "Node" },
    { id: 5, skill: "Express" },
    { id: 6, skill: "Javascript" },
    { id: 7, skill: "MongoDB" },
    { id: 8, skill: "RESTful API" },
    { id: 9, skill: "C++" },
    { id: 10, skill: "Tailwind" },
  ];

  return (
    <div className="py-16">
      <div className="container">
        <SectionHeader
          title="My toolbox"
          eyebrow="Skills"
          description="Discover the range of technologies, programming languages, and tools I use"
        />
        <ul
          id="skills"
          ref={ref}
          className="flex flex-wrap mt-10 px-1 md:px-36 lg:px-72 justify-center gap-2.5  md:gap-4 lg:gap-4 text-lg text-gray-950 font-semibold"
        >
          {skillsData.map((skill) => (
            <motion.li
              key={skill.id}
              className={`bg-gradient-to-r from-sky-400 to-gray-300 border border-gray-950 rounded-2xl px-3.5 py-2.5 md:px-4 md:py-3
               
                lg:px-5 lg:py-4${isInView ? "animate-fade-in" : ""}`}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: isInView ? 1 : 0, scale: isInView ? 1 : 0.9 }}
              transition={{ duration: 0.5, delay: skill.id * 0.05 }}
              whileHover={{ scale: 1.1, transition: { duration: 0.2 } }}
            >
              <span>{skill.skill}</span>
            </motion.li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Skills;
// flex gap-2 items-center
