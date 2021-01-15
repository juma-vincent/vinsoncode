import React from "react";
import "./header.scss";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="header-container">
      <div className="logo">
        <img src="/images/logo.png" alt="" />
      </div>
      <div className="options-container">
        <Link to="/" className="option">
          HOME
        </Link>
        <Link to="/projects" className="option">
          PROJECTS
        </Link>
      </div>
    </div>
  );
};

export default Header;
