import React from "react";
import "./projectspage.scss";
import ProjectItem from "../../components/projectItem/projectItem";
import VideoBackground from "../../components/videoBackground/videoBackground";

const ProjectsPage = ({ projects }) => {
  return (
    <div className="projects-container">
      <VideoBackground />
      <div className="projects-heading">MY PAST REACT JS PROJECTS</div>
      {Object.keys(projects).map((key) => (
        <ProjectItem
          key={projects[key].id}
          title={projects[key].title}
          description={projects[key].description}
          imageUrls={projects[key].imageUrls}
          website={projects[key].website}
          github={projects[key].github}
        />
      ))}
    </div>
  );
};

export default ProjectsPage;
