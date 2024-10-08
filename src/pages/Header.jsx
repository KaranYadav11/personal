import { motion } from "framer-motion";
import { useEffect, useState } from "react";
let tabs = [
  { id: "home", label: "Home" },
  { id: "projects", label: "Projects" },
  { id: "about", label: "About" },
  { id: "contact", label: "Contact" },
];

// eslint-disable-next-line react/prop-types
function Header({ scrollToSection }) {
  const [activeTab, setActiveTab] = useState(tabs[3].id);

  useEffect(() => {
    scrollToSection("home");
  }, [scrollToSection]);

  function handleClick(id) {
    setActiveTab(id);
    scrollToSection(id);
  }
  return (
    <div className="flex justify-center items-center fixed top-3 w-full z-50">
      <nav className="select-none flex gap-1 p-0.5 rounded-full border border-white/15 bg-white/10 backdrop-blur">
        {tabs.map((tab) => (
          <button
            onClick={() => handleClick(tab.id)}
            href={`#${tab.id}`}
            key={tab.id}
            // onClick={() => setActiveTab(tab.id)}
            className={`${
              activeTab === tab.id ? "" : "hover:text-white"
            } nav-item select-none`}
            style={{
              WebkitTapHighlightColor: "transparent",
            }}
          >
            {activeTab === tab.id && (
              <motion.span
                layoutId="bubble"
                className="absolute inset-0 z-50 bg-white mix-blend-difference"
                style={{ borderRadius: 9999 }}
                transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
              />
            )}
            {tab.label}
          </button>
        ))}
      </nav>
    </div>
  );
}

export default Header;
