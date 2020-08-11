import React from "react";
import "./projectsDirectory.scss";
import ProjectItem from "../projectItem/projectItem";

const ProjectsDirectory = ({ projects }) => {
  return (
    <div className="projects-container">
      {Object.keys(projects).map((key) => (
        <ProjectItem
          key={projects[key].id}
          title={projects[key].title}
          imageUrls={projects[key].imageUrls}
          description={projects[key].description}
        />
      ))}
    </div>
  );
};

export default ProjectsDirectory;
