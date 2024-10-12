import SectionHeader from "../components/SectionHeader";
import Image from "../images/projectImage.jpg";
import P from "../images/z1.jpg";
const projectsData = [
  {
    company: "Next Hire",
    year: "2024",
    title: "Job Portal Website",
    results: [
      { title: "Build Using MERN Stack" },
      { title: "Improved site speed by 50%" },
      { title: "Increased mobile traffic by 35%" },
    ],
    link: "https://youtu.be/Z7I5uSRHMHg",
    image: [P],
  },
  {
    company: "Neural Nexus",
    year: "2024",
    title: "Machine Learning ",
    results: [
      { title: "Boosted model accuracy by 15%" },
      { title: "Reduced training time by 30%" },
      { title: "Expanded dataset by 20%" },
    ],
    link: "https://youtu.be/XYz123ABCDE",
    image: [Image],
  },
  {
    company: "Dataverse",
    year: "2022",
    title: "Data Analytics Tool",
    results: [
      { title: "Increased data visualization efficiency by 25%" },
      { title: "Enhanced data cleaning capabilities by 40%" },
      { title: "Improved data security measures by 30%" },
    ],
    link: "https://youtu.be/1234567890",
    image: [Image],
  },
];
function Project() {
  return (
    <section className="pb-16 lg:py-24 pt-16" id="projects">
      <div className="container">
        <SectionHeader
          title="Featured Project"
          eyebrow="Real World Projects"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo veniam eius eligendi culpa eaque facere veritatis laborum necessitatibus quis ipsum!
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
                  <ul className="flex flex-col gap-4 mt-4 md:mt-5">
                    {project.results.map((result) => (
                      <li
                        key={result.title}
                        className="flex gap-2 text-sm md:text-base text-white/50"
                      >
                        <span>✔️</span>
                        <span>{result.title}</span>
                      </li>
                    ))}
                  </ul>
                  <a href={project.link}>
                    <button
                      className="bg-white text-gray-950 h-12 w-full
                md:w-auto  px-6  rounded-xl font-semibold inline-flex justify-center items-center gap-2 mt-8"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        height="24px"
                        viewBox="0 -960 960 960"
                        width="22px"
                        fill="#1c1c1b"
                      >
                        <path
                          transform="rotate(-90, 480, -480)"
                          d="M479.33-226.67 225-482l58.67-59.33 154.66 152.66v-382.66h84v384l153.34-153.34 58.66 59-255 255Z"
                        />
                      </svg>

                      <span>Visit Site</span>
                    </button>
                  </a>
                </div>
                <div className="relative">
                  <img
                    className="mt-8 rounded-md lg:rounded-b-none -mb-4 lg:mt-0 md:-mb-0 lg:absolute lg:h-full lg:w-auto lg:rounded-2xl lg:max-w-none "
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
