import React from "react";
import { Link } from "react-router-dom";
import { HeaderContainer } from "./header.styled";

const Header = () => {
  return (
    <HeaderContainer>
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
    </HeaderContainer>
  );
};

export default Header;
