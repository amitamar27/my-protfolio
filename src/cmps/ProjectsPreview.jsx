import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faGithub } from "@fortawesome/free-brands-svg-icons";

export function ProjectsPreview({ project }) {
  return (
    <>
      <img src={project.img} alt="" />
      <div className="container">
        <h2 className="proj-name">{project.name.toUpperCase()}</h2>
        <p>{project.desc}</p>
        <h2 className="techs">{project.techs.join(", ").toUpperCase()}</h2>
        <div className="onHoverDiv">
          <a href={project.github} rel="noreferrer" className="go-git" target="_blank">
            <FontAwesomeIcon icon={faGithub} className="highlight" />
          </a>
          <button className="go-site">
            <a href={project.site} target="_blank" rel="noreferrer">Go To Site</a>
          </button>
        </div>
      </div>
    </>
  );
}
