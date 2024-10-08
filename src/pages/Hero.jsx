import hero from "../images/your.png";

function Hero() {
  const scrollToProjects = () => {
    const projectsSection = document.getElementById("projects");
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <div className="py-36 md:py-36 lg:py-36" id="home">
      <div className="container">
        <div className="flex flex-col items-center">
          <img
            className="size-[170px] brightness-105"
            src={hero}
            alt="Avatar"
          />
          <div className="bg-gray-950 border glow-btn border-gray-700 rounded-lg px-4 p-1.5 inline-flex gap-4 items-center">
            <div className="text-2xl wave-hand">👋🏻</div>
            <div className="text-sm font-semibold">
              Hey, I'm <span>Karan</span>
            </div>
          </div>
        </div>
        <div className="max-w-lg mx-auto">
          <h1 className="font-calistoga text-3xl md:text-5xl text-center mt-8 tracking-wide">
            Crafting Dynamic User Experiences with React
          </h1>
          <p className="mt-4 text-center text-white/60 md:text-lg tracking-tight">
            As a budding React and MERN stack developer, I’m passionate about
            crafting dynamic web applications and eager to immerse myself in
            solving complex coding challenges
          </p>
        </div>
        <div className="flex flex-col md:flex-row justify-center items-center gap-4 mt-8">
          <button
            onClick={scrollToProjects}
            className="inline-flex items-center gap-2 border border-white/15 px-6 mt-1 h-12 rounded-xl"
          >
            <span className="font-semibold">Explore</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 -960 960 960"
              width="22px"
              fill="#5e91ff"
            >
              <path d="M479.33-226.67 225-482l58.67-59.33 154.66 152.66v-382.66h84v384l153.34-153.34 58.66 59-255 255Z" />
            </svg>
          </button>
          {/* <button className="inline-flex items-center gap-2 border border-white bg-white text-gray-900  h-12 px-6 rounded-xl">
            <span className="font-semibold">Let's Connect</span>
          </button> */}
        </div>
      </div>
    </div>
  );
}

export default Hero;
