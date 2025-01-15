import SectionHeader from "../components/SectionHeader";
import writeit from "../images/writeit.png";
import render2 from "../images/render2.png";
import { CornerDownRight } from "lucide-react";
const projectsData = [
  {
    company: "Snapzy",
    year: "2024",
    title: "Social Media Platform",
    results: [
      { title: "React" },
      { title: "Node" },
      { title: "Redux Toolkit" },
      { title: "Express" },
      { title: "MongoDB " },
      { title: "JWT" },
      { title: "Mongoose" },
      { title: "Socket.io" },
      { title: "Shadcn" },
      { title: "Tailwind CSS" },
    ],
    link: "https://snapzy.onrender.com",
    image: [render2],
  },
  {
    company: "NextHire",
    year: "2024",
    title: "Blog Platform",
    results: [
      { title: "React" },
      { title: "Node" },
      { title: "Redux Toolkit" },
      { title: "Express" },
      { title: "MongoDB " },
      { title: "JWT" },
      { title: "Mongoose" },
      { title: "TanStack Query" },
      { title: "Tailwind CSS" },
    ],
    link: "https://writeit-kgeb.onrender.com/",
    image: [writeit],
  },

  // {
  //   company: "Dataverse",
  //   year: "2022",
  //   title: "Data Analytics Tool",
  //   results: [
  //     { title: "React" },
  //     { title: "TailwindCSS" },
  //     { title: "Redux" },
  //     { title: "Express" },
  //     { title: "MongoDB Atlas" },
  //     { title: "Mongoose" },
  //     { title: "Node" },
  //     { title: "JWT" },
  //     { title: "Postman" },
  //     { title: "Shadcn" },
  //   ],
  //   link: "https://youtu.be/1234567890",
  //   image: [Image],
  // },
];
function Project() {
  return (
    <section className="pb-16 lg:py-24 pt-16" id="projects">
      <div className="container">
        <SectionHeader
          title="Featured Project"
          eyebrow="Real World Projects"
          description="Here are some of my featured projects.
          Ranging from social media platform to blog platform.
      "
        />

        <div className="flex flex-col mt-10 gap-20 md:mt-20">
          {projectsData.map((project, index) => (
            <div
              className={`bg-gradient-to-b from-black to-gray-900 rounded-3xl  after:content-[''] after:z-10 overflow-hidden after:absolute after:inset-0 after:outline-2 after:-outline-offset-2 after:rounded-3xl after:outline after:outline-white/20 md:pt-12 md:px-10 lg:pt-16 lg:px-20 px-8 pt-8 after:pointer-events-none sticky z-${
                index + 100
              }`}
              style={{
                top: `calc(68px + ${index * 20}px)`,
              }}
              key={project.title}
            >
              <div className="lg:grid lg:grid-cols-2 lg:gap-16 ">
                <div className="lg:pb-16">
                  <div className="bg-gradient-to-r from-sky-400 to-gray-300 inline-flex gap-2 text-transparent bg-clip-text text-sm font-bold tracking-widest uppercase">
                    <span>{project.company}</span>
                    <span>&bull;</span>
                    <span>{project.year}</span>
                  </div>

                  <h3 className="font-calistoga text-2xl mt-2 md:mt-5 md:text-4xl">
                    {project.title}
                  </h3>
                  <hr className="border-t-2 border-white/5 mt-4 md:mt-5" />

                  <ul className="flex flex-wrap mt-4 items-center md:mt-5 px-1 justify-start gap-2  text-sm text-gray-950 font-semibold">
                    {project.results.map((title) => (
                      <li
                        key={title.title}
                        className={`select-none bg-gradient-to-r from-sky-400  to-gray-300 border border-gray-950 rounded-xl px-3.5 py-[7px] md:px-3.5 md:py-2 `}
                      >
                        <span>{title.title}</span>
                      </li>
                    ))}
                  </ul>
                  <a target="_blank" href={project.link}>
                    <button
                      className="bg-white text-gray-950 h-10 w-full
                md:w-auto  px-6  rounded-full  font-semibold inline-flex justify-center items-center gap-2 mt-8"
                    >
                      {/* <svg
                        xmlns="http://www.w3.org/2000/svg"
                        height="24px"
                        viewBox="0 -960 960 960"
                        width="20px"
                        fill="#1c1c1b"
                      >
                        <path
                          transform="rotate(-90, 480, -480)"
                          d="M479.33-226.67 225-482l58.67-59.33 154.66 152.66v-382.66h84v384l153.34-153.34 58.66 59-255 255Z"
                        />
                      </svg> */}
                      <CornerDownRight size={18} strokeWidth={2.5} />
                      <span>View Live</span>
                    </button>
                  </a>
                </div>
                <div className="relative">
                  <img
                    className="mt-8 rounded-md lg:rounded-b-none -mb-4 lg:mt-0 md:-mb-0 lg:absolute  lg:h-full lg:w-auto lg:rounded-2xl lg:max-w-none "
                    src={project.image[0]}
                    alt={project.title}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Project;
