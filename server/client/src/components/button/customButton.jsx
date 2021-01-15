import React from "react";
import "./customButton.scss";

const CustomButton = ({ link, children }) => {
  return (
    <div className="button-container">
      <a href={link}>{children} &rarr;</a>
    </div>
  );
};

export default CustomButton;
