import React from "react";
import ProjectItem from "../../components/projectItem/projectItem";
import VideoBackground from "../../components/videoBackground/videoBackground";
// import { ProjectsContainer, ProjectsHeading } from "./projectspage.styled.jsx";
import "./projectspage.scss";

const ProjectsPage = ({ projects }) => {
  return (
  
    <div className="projects-container"> 
      <VideoBackground />
      
      <div className="projects-heading">PAST PROJECTS</div> 
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
