import React from "react";
import SearchBox from "./SearchBox";

const Navbar = ({ onSearch }) => {
  return (
    <div className=" flex ">
      <div className=" tl pt2">
        <img src="/images/logo.png" alt="Image" height="70" width="200" />
      </div>
      <div className=" tc pl6  ">
        <h1>ValBenson</h1>
      </div>
      <div className=" pl6 pt4">
        <SearchBox onSearch={onSearch} />
      </div>
    </div>
  );
};

export default Navbar;
