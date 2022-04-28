import React from "react";
import CustomButton from "../button/customButton";
import { ProjectItemContainer } from "./projectItem.styled";

const ProjectItem = ({ title, imageUrls, description, website, github }) => {
  return (
    <ProjectItemContainer>
      <div className="description">
        <h3>{title}</h3>

        <div>{description}</div>
        <div>
          <div>
            <CustomButton
              className="link"
              link={website}
              children={`See Live`}
            />
          </div>
          <div>
            <CustomButton link={github} children={`Source Code`} />
          </div>
        </div>
      </div>
      <div className="images-container">
        {imageUrls.map((imageUrl) => (
          <img
            className={imageUrl.id}
            alt=""
            key={imageUrl.id}
            src={imageUrl.url}
          />
        ))}
      </div>
    </ProjectItemContainer>
  );
};

export default ProjectItem;
