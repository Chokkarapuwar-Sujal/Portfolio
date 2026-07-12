import { useState, useCallback } from "react";
import "./styles/global.css";

import { ThemeProvider } from "./context/ThemeContext";
import Loader from "./components/Loader";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import DeveloperIllustration from "./components/DeveloperIllustration";
import About from "./components/About";
import WhatIDo from "./components/WhatIDo";
import ProjectsIllustration from "./components/ProjectsIllustration";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  const [loaded, setLoaded] = useState(false);

  const handleLoaderComplete = useCallback(() => {
    setLoaded(true);
  }, []);

  return (
    <ThemeProvider>
      {!loaded && <Loader onComplete={handleLoaderComplete} />}
      <Navbar />
      <main>
        <Hero />
        <DeveloperIllustration />
        <About />
        <WhatIDo />
        <ProjectsIllustration />
        <Projects />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </ThemeProvider>
  );
}
