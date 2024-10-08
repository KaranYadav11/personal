import Leetcode from "../images/leetcode.png";
import { motion } from "framer-motion";
import In from "../images/in.png";
import Github from "../images/github.png";
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

function Footer() {
  return (
    <footer className="m-0">
      <div className="container">
        <div className="border-t border-white/40 gap-8 py-6 text-sm flex flex-col  md:flex-row md:justify-center items-center">
          {/* <div className="text-white/40">&copy; 2024 All Rights Reserved.</div> */}
          <nav className="flex flex-col md:flex-row items-center gap-8 md:space-x-10">
            {footerLinks.map((links) => (
              <motion.a
                className="inline-flex items-center gap-1.5"
                href={links.href}
                key={links.title}
                target="_blank" // Open link in new tab
                rel="noopener noreferrer" // Security and performance
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.3 }}
              >
                <span className="font-semibold text-sm">{links.title}</span>
                <img
                  src={links.img}
                  className="h-5 rounded-sm w-auto brightness-120 contrast-120"
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
