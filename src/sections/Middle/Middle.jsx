import React from "react";
import { Element } from "react-scroll";

import About from "./About";
import Projects from "./Projects";
import Skills from "./Skills";
import Education from "./Education";
import Contact from "./Contact";

function Middle() {
  return (
    <div>
      {/* About Section */}
      <Element name="about">
        <About />
      </Element>

      {/* Projects Section */}
      <Element name="projects">
        <Projects />
      </Element>

      {/* Skills Section */}
      <Element name="skills">
        <Skills />
      </Element>
      {/* Education Section */}

      <Education />
      <Element name="contact">
        <Contact />
      </Element>
    </div>
  );
}

export default Middle;
