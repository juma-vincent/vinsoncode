import React from "react";
import "./header.scss";

const Header = () => {
  return (
    <div className="header-container">
      <div className="logo">
        <img src="/images/logo.png" alt="" />
      </div>
      <div className="options-container">
        <div className="option">Home</div>
        <div className="option">Projects</div>
      </div>
    </div>
  );
};

export default Header;
