import React from "react";
import ProjectItem from "../../components/projectItem/projectItem";
import VideoBackground from "../../components/videoBackground/videoBackground";
import { ProjectsContainer, ProjectsHeading } from "./projectspage.styled.jsx";
// import "./projectspage.scss";

const ProjectsPage = ({ projects }) => {
  return (
    <ProjectsContainer>
     {/* <div className="projects-container"> */}
      <VideoBackground />
      <ProjectsHeading>MY PAST REACT JS PROJECTS</ProjectsHeading>
      {/* <div className="projects-heading">MY PAST REACT JS PROJECTS</div>  */}
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
    {/* </div> */}
    </ProjectsContainer>
  );
};

export default ProjectsPage;
