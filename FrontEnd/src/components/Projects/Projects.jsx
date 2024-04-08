import React from "react";
import Projectsdetails from "./Projectsdetails";

const Projects = () => {

  return (
    <section id="projects">
      <h1
          className={`text-[var(--text)] ml-[1.5rem] w-fit border-b-2 text-[length:var(--head--size)] font-semibold `}
        >
          Projects
        </h1>
      <div className="rounded-[10%] p-3">
        <Projectsdetails />
      </div>
    </section>
  );
};

export default Projects;
