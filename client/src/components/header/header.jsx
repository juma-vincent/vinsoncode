import React from "react";
import { Link} from "react-router-dom";

import "./header.scss";

const Header = () => {
  
  return (
    <div className = "header-container" >
      <div className="logo-container" >
      <Link to="/" ><img src="/images/logo.png" alt=""  /></Link>
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
