import Header from "./pages/Header";
import Footer from "./pages/Footer";
import Hero from "./pages/Hero";
import Project from "./pages/Project";
import AboutMe from "./pages/AboutMe";
import Contact from "./pages/Contact";
import Skills from "./pages/Skills";

function App() {
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    section.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <div>
      <Header scrollToSection={scrollToSection} />
      <Hero />

      <Project />
      <AboutMe />
      <Skills />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
