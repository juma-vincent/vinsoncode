import React from "react";
import "./projectspage.scss";
import ProjectItem from "../../components/projectItem/projectItem";

const ProjectsPage = ({ projects }) => {
  return (
    <div className="projects-container">
      {Object.keys(projects).map((key) => (
        <ProjectItem
          key={projects[key].id}
          title={projects[key].title}
          description={projects[key].description}
        />
      ))}
    </div>
  );
};

export default ProjectsPage;
