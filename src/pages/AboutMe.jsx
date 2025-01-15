import SectionHeader from "../components/SectionHeader";

function AboutMe() {
  const text =
    "A dedicated MERN stack developer with expertise in JavaScript, React.js, Node.js, Express.js, and MongoDB. I build dynamic, user-centric web applications, ensuring scalability and performance. I thrive on solving complex problems and am committed to continuous learning. I hold a B.Tech in Computer Science Engineering and have completed courses in React.js and JavaScript. Through hands-on projects, I’ve delivered end-to-end solutions, aiming to write clean, maintainable, and impactful code";
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
                  className="text-sm h-fit max-w-full overflow-auto-break-word text-center lg:text-base text-white/60  mt-1 lg:mt-2"
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
