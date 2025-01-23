import { SiMongodb, SiRedux } from "react-icons/si";
import { SiNodedotjs } from "react-icons/si";
import { SiExpress } from "react-icons/si";
import { SiJavascript } from "react-icons/si";
import { FaGithub, FaNpm, FaReact } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";
import { InfiniteMovingCards } from "./ui/infinite-cards";
function Tech() {
  const items = [
    {
      icon: <FaReact />,
      color: "#61DAFB", // React blue
    },
    {
      icon: <SiRedux />,
      color: "#764ABC", // React blue
    },
    {
      icon: <SiNodedotjs />,
      color: "#339933", // Node.js green
    },
    {
      icon: <FaNpm />,
      color: "#CB3837", // Node.js green
    },
    {
      icon: <SiMongodb />,
      color: "#47A248", // MongoDB green
    },
    {
      icon: <SiExpress />,
      color: "#444444", // Express gray
    },
    {
      icon: <SiJavascript />,
      color: "#F7DF1E", // JavaScript yellow
    },
    {
      icon: <SiTailwindcss />,
      color: "#38BDF8", // Tailwind CSS blue
    },
    {
      icon: <FaGithub />,
      color: "#ffffff", // Tailwind CSS blue
    },
  ];

  return (
    <div className="pt-1 mt-8 bg-yellow-0">
      <div className="container ">
        <div className="flex flex-wrap items-center justify-around gap-[14px] md:gap-5 ">
          <InfiniteMovingCards items={items} direction="left" speed="fast" />
        </div>
      </div>
    </div>
  );
}

export default Tech;
