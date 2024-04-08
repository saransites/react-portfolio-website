import React from "react";
import LazyLoad from "react-lazy-load";
const About = () => {
  return (
    <section
      id="about"
    >
      <LazyLoad 
      threshold={0.95}
      >
      <article
        className={`px-6 py-4
             relative w-3/4 md:w-1/2 text-[var(--text)] flex flex-col items-start rounded`}
      >
        <h1
          className={`text-center border-b-2 text-[length:var(--head--size)] font-semibold `}
        >
          About Me
        </h1>
        <p className="text-[0.5rem] p-1 md:text-[0.8rem] my-3 leading-5 tracking-widest text-justify">
          As a dynamic and ambitious MERN Stack developer, I bring a fresh
          perspective and a passion for crafting innovative solutions. My
          portfolio website showcases a collection of projects that highlight my
          proficiency in front-end and back-end development, demonstrating my
          commitment to creating seamless user experiences. Eager to contribute
          to the ever-evolving tech landscape, I am adapt at collaborating with
          cross-functional teams and adapting to new challenges. Explore my
          portfolio to witness my dedication to delivering high-quality code and
          my enthusiasm for pushing the boundaries of what is possible in web
          development.
        </p>
        <div className="flex gap-2 justify-center items-center">
          <button
            className={`button text-[7px] md:text-[14px]`}>
            Hire Me
          </button>
          <button
            className={`resumebtn text-[7px] md:text-[14px]`} >
            <a href="../../public/Saran Full-stack resume.pdf" download="SaranResume.pdf">
              My Resume
            </a>
          </button>
        </div>
      </article>
      </LazyLoad>
    </section>
  );
};

export default About;
