import Card from "../components/Card";
import CardHeader from "../components/CardHeader";
import SectionHeader from "../components/SectionHeader";

function AboutMe() {
  return (
    <section className="py-16 lg:py-28" id="about">
      <div className="container">
        <SectionHeader
          title="Explore my World"
          description="Discover more about me who I am, skills and technologies I have worked with."
          eyebrow="About Me"
        />
        <div className="mt-10 flex flex-col gap-8">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-5 lg:grid-cols-3">
            <Card className="h-[180px] md:h-[250px] lg:h-[280px] md:col-span-2 lg:col-span-1">
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
                description="I have a B.Tech degree in Computer Science and Engineering from LKCTC. I have also completed a few online courses in Front-End Development."
              />
            </Card>
            <Card className="h-[180px] md:h-[250px] lg:h-[280px] md:col-span-3 lg:col-span-2">
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
                title="Problem Solving"
                description="Basic understanding of data structures and algorithms. I have solved a few problems on LeetCode."
              />
            </Card>
          </div>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-5 lg:grid-cols-3">
            <Card className="h-[180px] md:h-[250px] lg:h-[280px] md:col-span-3 lg:col-span-2">
              <CardHeader
                svgs={
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="24px"
                    viewBox="0 -960 960 960"
                    width="24px"
                    fill="#8B7DBE"
                  >
                    <path d="M160-200v-440 440-15 15Zm0 80q-33 0-56.5-23.5T80-200v-440q0-33 23.5-56.5T160-720h160v-80q0-33 23.5-56.5T400-880h160q33 0 56.5 23.5T640-800v80h160q33 0 56.5 23.5T880-640v171q-18-13-38-22.5T800-508v-132H160v440h283q3 21 9 41t15 39H160Zm240-600h160v-80H400v80ZM720-40q-83 0-141.5-58.5T520-240q0-83 58.5-141.5T720-440q83 0 141.5 58.5T920-240q0 83-58.5 141.5T720-40Zm20-208v-112h-40v128l86 86 28-28-74-74Z" />
                  </svg>
                }
                title="Experience"
                description="I have build my portfolio projects by implementing the skills I have learned."
              />
            </Card>
            <Card className="h-[180px] md:h-[250px] lg:h-[280px]  md:col-span-2 lg:col-span-1">
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
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutMe;
