import React from "react";
import "./projectItem.scss";

const ProjectItem = ({ title, imageUrls, description, website, github }) => {
  return (
    <div className="project-item-container">
      <div className="description">
        <h3>{title}</h3>

        <p>
          <div>{description}</div>
          <div>
            <span>
              <a href={website}> View site</a>{" "}
            </span>
            <span>
              <a href={github}>View on github</a>{" "}
            </span>
          </div>
        </p>
      </div>
      <div className="images-container">
        {imageUrls.map((imageUrl) => (
          <img className={imageUrl.id} key={imageUrl.id} src={imageUrl.url} />
        ))}
      </div>
    </div>
  );
};

export default ProjectItem;
