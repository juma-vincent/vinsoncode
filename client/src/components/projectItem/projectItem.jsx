import React from "react";
import "./projectItem.scss";
import CustomButton from "../button/customButton";

const ProjectItem = ({ title, imageUrls, description, website, github }) => {
  return (
    <div className="project-item-container">
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
    </div>
  );
};

export default ProjectItem;
