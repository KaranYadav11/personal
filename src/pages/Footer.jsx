import Leetcode from "../images/leetcode.png";
import { motion } from "framer-motion";
import In from "../images/in.png";
import Github from "../images/github.png";
import Text from "../components/Text";

const footerLinks = [
  {
    title: "LinkedIn",
    href: "https://linkedin.com/in/111-y-k",
    img: In,
  },
  {
    title: "LeetCode",
    href: "https://leetcode.com/u/Yadav_Karan/",
    img: Leetcode,
  },
  {
    title: "GitHub",
    href: "https://github.com/KaranYadav11",
    img: Github,
  },
];

const text = ["React", "Tailwind"];
function Footer() {
  return (
    <footer className="m-0 ">
      {/* <Text /> */}
      <div className="container">
        <div className="border-t border-white/40 gap-8 py-6 text-sm flex flex-col  md:flex-row md:justify-between items-center">
          <div className="text-white pb-1 items-center ml-[100px] md:ml-0 justify-right  min-w-[250px] relative font-semibold text-lg flex flex-row gap-1 ">
            <span className="select-none">Build with</span>
            <span className="absolute inset-y-2 select-none inset-x-[82px]">
              <Text texts={text} />
            </span>
          </div>
          <nav className="flex flex-col md:flex-row items-center gap-8 md:space-x-10">
            {footerLinks.map((links) => (
              <motion.a
                className="inline-flex items-center gap-1.5 tracking-wide"
                href={links.href}
                key={links.title}
                target="_blank" // Open link in new tab
                rel="noopener noreferrer" // Security and performance
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.3 }}
                whileTap={{ scale: 1.1 }}
              >
                <span className="font-semibold text-sm select-none">
                  {links.title}
                </span>
                <img
                  src={links.img}
                  className="h-5 rounded-sm w-auto brightness-120 contrast-120 select-none"
                  alt={links.title}
                />
              </motion.a>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
