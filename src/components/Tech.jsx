import { SiMongodb } from "react-icons/si";
import { SiNodedotjs } from "react-icons/si";
import { SiExpress } from "react-icons/si";
import { SiJavascript } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";
function Tech() {
  return (
    <div className="pt-9">
      <div className="container ">
        <div className="flex flex-wrap items-center justify-around gap-[14px] md:gap-5 ">
          <div className="p-0">
            <FaReact className="text-4xl md:text-5xl text-[#61DAFB] " />
          </div>

          <div className="p-0">
            <SiNodedotjs className="text-4xl md:text-5xl text-[#339933]" />
          </div>
          <div className="p-0">
            <SiMongodb className="text-4xl md:text-5xl text-[#47A248]" />
          </div>
          <div className="p-0">
            <SiExpress className="text-4xl md:text-5xl text-[#444444]" />
          </div>
          <div className="p-0">
            <SiJavascript className="text-4xl md:text-5xl bg-black text-[#F7DF1E]" />
          </div>
          <div className="p-0">
            <SiTailwindcss className="text-4xl md:text-5xl text-[#38BDF8]" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Tech;
