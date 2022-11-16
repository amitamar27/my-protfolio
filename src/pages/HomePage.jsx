import React from "react";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import {Link} from 'react-router-dom'

export function HomePage() {
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

  const onButtonClick = () => {
    // using Java Script method to get PDF file
    fetch("resume.pdf").then((response) => {
      response.blob().then((blob) => {
        // Creating new object of PDF file
        const fileURL = window.URL.createObjectURL(blob);
        // Setting various property values
        let alink = document.createElement("a");
        alink.href = fileURL;
        alink.download = "resume.pdf";
        alink.click();
      });
    });
  };

  const mainImg = process.env.PUBLIC_URL + "/imgs/mainImgModified.png";
  

  return (
    <motion.section
      className="home-container"
      variants={containerVarients}
      initial="hidden"
      animate="visible"
    >
      <div className="main-container">
        <div className="main-info">
          <div className="main-content">
            <h2 className="txt-tiny">Hi, my name is</h2>
            <h2 className="txt-name">Amit Amar.</h2>
            <h2 className="txt-role">Full Stack Developer</h2>
            <p className="txt-info">
              I'm a Full Stack / Frontend Web Developer experienced with
              building single-page applications using advanced web technologies
              such as Node.js, Vue.js, React and Angular.
            </p>
          </div>
          <div className="main-img">
            <img src={mainImg} alt="mainImg" />
          </div>
        </div>
      </div>
      <div className="btn-info">
        <button>
          <Link to={"/about"}>About Me</Link>
        </button>

        <button>
          <Link to={"/projects"}>Projects</Link>
        </button>
        <button onClick={onButtonClick}>Download Resume</button>
      </div>
      <div className="contact-me">
        <h2>Get In Touch!</h2>
        <p>
          I’m currently looking for a Full-Stack/Front-End Development role,
          please contact me by Email or by any of the social medias below.
        </p>
        <div className="icons">
          <a href="mailto:amitush27@gmail.com">
            <FontAwesomeIcon icon={faEnvelope} />
          </a>
          <a
            href="https://www.linkedin.com/in/amit-amar-4467b1200/"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
          <a
            href="https://github.com/amitamar27"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon icon={faGithub} />
          </a>
        </div>
        <a href="mailto:amitush27@gmail.com">
          <button>Get In Touch</button>
        </a>
      </div>
    </motion.section>
  );
}
