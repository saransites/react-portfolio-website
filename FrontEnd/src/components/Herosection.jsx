import React from "react";
import { FaGithub, FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa";
import { motion } from "framer-motion";
const Herosection = () => {
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
        duration: 1,
      },
    },
  };

  const item = {
    hidden: { x: 200, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { duration: 1 },
    },
  };
  return (
    <main>
      <section className="overflow-hidden w-[75%] sm:w-[74%] md:w-[70%] lg:w-[65%] flex gap-2 justify-around items-center h-screen">
        <div className="text-white flex flex-col mt-4 md:mt-0 gap-2">
          <button className="Btn">
            <div className="sign">
              <FaGithub />
            </div>
            <div className="text">
              <a href="https://github.com/saransites?tab=repositories" target="_blank">Github</a>
            </div>
          </button>
          <button className="Btn">
            <div className="sign">
              <FaInstagram />
            </div>
            <div className="text">Instagram</div>
          </button>
          <button className="Btn">
            <div className="sign">
              <FaTwitter />
            </div>
            <div className="text">Twitter</div>
          </button>
          <button className="Btn">
            <div className="sign">
              <FaLinkedin />
            </div>
            <div className="text">
              <a href="https://www.linkedin.com/in/saran-natarajan9584/" target="_blank">
              LinkedIn
              </a>
              </div>
          </button>
        </div>
        <motion.div
          variants={container}
          initial="hidden"
          animate="visible"
          className="text-white ml-3"
        >
          <motion.p variants={item} className="intro font-semibold">
            Hiii! This is...
          </motion.p>
          <div className="heroContent">
            <motion.h1 variants={item} className="heroName">
              Saran
            </motion.h1>
            <motion.h1 variants={item} className="heroName">
              Saran
            </motion.h1>
          </div>
          <motion.p variants={item} className="role font-semibold mt-20 md:mt-36">
            MERN-STACK DEVELOPER
          </motion.p>
          <motion.p variants={item} className="aboutMe my-2 leading-5 tracking-widest">
            I specialize in crafting dynamic and responsive digital solutions
            and deliver robust, user-centric web applications. Explore my
            portfolio to witness innovative design, seamless functionality, and
            intuitive user experiences.
          </motion.p>
          <motion.button variants={item} className="btn">
            Hire Me
          </motion.button>
        </motion.div>
      </section>
    </main>
  );
};

export default Herosection;
