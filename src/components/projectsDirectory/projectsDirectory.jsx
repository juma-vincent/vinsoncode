import React from "react";
import "./projectsDirectory.scss";
import ProjectItem from "../projectItem/projectItem";

const ProjectsDirectory = ({ projects }) => {
  return (
    <div className="projects-container">
      {projects.Object.keys.map((key) => (
        <ProjectItem
          key={key.id}
          title={key.title}
          imageUrls={key.imageUrls}
          description={key.description}
        />
      ))}
    </div>
  );
};

export default ProjectsDirectory;
