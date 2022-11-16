import React from "react";
import { ProjectsPreview } from "./ProjectsPreview";

export function ProjectsList({ projects }) {
  return (
    <>
      {projects.map((project) => (
        <div className="card" key={project.id}>
          <ProjectsPreview project={project} />
        </div>
      ))}
    </>
  );
}
