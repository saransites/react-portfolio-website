import React from "react";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import Herosection from "./components/Herosection";
import About from "./components/About";
import Contact from "./components/Contact/Contact.jsx";
import Projects from "./components/Projects/Projects.jsx";
import  hero  from "/removebg-preview.png";
import Skills from "./components/Skills.jsx";
const App = () => {
  return (
    <>
      <Parallax className="styling" pages={3.39}>
        <ParallaxLayer offset={0.05} speed={-1}>
            <img
            src={hero}
            className="w-[16rem] md:w-[24rem] fixed top-[1rem] md:top-0 right-0"
            alt="Loading..."
          />
        </ParallaxLayer>
        <ParallaxLayer className="layer1" factor={4} offset={0} speed={0.5}>
          <Herosection />
        </ParallaxLayer>
        <ParallaxLayer className="layer2" factor={4} offset={1} speed={0.8}>
          <Skills />
        </ParallaxLayer>
        <ParallaxLayer className="layer3" factor={4} offset={1.5} speed={0.7}>
          <About />
        </ParallaxLayer>
        <ParallaxLayer className="layer4" factor={4} offset={1.99} speed={0.5}>
          <Projects />
        </ParallaxLayer>
        <ParallaxLayer className="layer5" factor={4} offset={2.87} speed={1}>
          <Contact />
        </ParallaxLayer>
      </Parallax>
    </>
  );
};

export default App;
