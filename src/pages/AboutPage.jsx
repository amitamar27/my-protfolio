import React from "react";
import { motion } from "framer-motion";

import { Slider } from "../cmps/Slider";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faReact, faVuejs , faNode , faJs , faSass , faHtml5 , faCss3 , faGit , faNpm ,faAngular} from "@fortawesome/free-brands-svg-icons";

export function AboutPage() {
  const containerVarients = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: { delay: 0.2, duration: 1.5 },
    },
    exit: {
      x: "-100vw",
      transition: { ease: "easeInOut" },
    },
  };

  return (
    <motion.div
      className="about-container"
      variants={containerVarients}
      initial="hidden"
      animate="visible"
    >
      <div className="about-section">
        <h2>ABOUT ME</h2>
        <p>
          My name is Amit Amar, Full Stack Developer from Tel-Aviv Israel. I’m
          currently looking for my next role, I have a big passion for
          programming and creating web application end to end from scratch using
          the latest web technologies and frameworks. I’m an autodidact serious
          and hardworking person, paying attention the small details, and big
          picture thinker. I’m a quick learner, and a great team player.
        </p>
        <h2>MY SKILLS</h2>
        <div className="icons-skill">
          <div className="skill-dot" title="React">
            <FontAwesomeIcon icon={faReact} className="highlight" />
          </div>
          <div className="skill-dot" title="Vuejs">
            <FontAwesomeIcon icon={faVuejs} className="highlight" />
          </div>
          <div className="skill-dot" title="Angular">
            <FontAwesomeIcon icon={faAngular} className="highlight" />
          </div>
          <div className="skill-dot" title="NodeJs">
            <FontAwesomeIcon icon={faNode} className="highlight" />
          </div>
          <div className="skill-dot" title="JavaScript">
            <FontAwesomeIcon icon={faJs} className="highlight" />
          </div>
          <div className="skill-dot" title="Sass">
            <FontAwesomeIcon icon={faSass} className="highlight" />
          </div>
          <div className="skill-dot" title="Css3">
            <FontAwesomeIcon icon={faCss3} className="highlight" />
          </div>
          <div className="skill-dot" title="Html5">
            <FontAwesomeIcon icon={faHtml5} className="highlight" />
          </div>
          <div className="skill-dot" title="Git">
            <FontAwesomeIcon icon={faGit} className="highlight" />
          </div>
          <div className="skill-dot" title="Npm">
            <FontAwesomeIcon icon={faNpm} className="highlight" />
          </div>
        </div>
      </div>
      <div className="container-slider">
        <Slider />
      </div>
    </motion.div>
  );
}
