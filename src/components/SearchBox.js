import React from "react";

const SearchBox = ({ onSearch }) => {
  return (
    <div className=" ">
      <input
        className="searchbox  bg-white br2 pa1 ba b--silver  "
        onChange={onSearch}
        type="search"
        placeholder="Search a post"
      />
      {/* <small>
        <button className=" ml0 pa1">search</button>
      </small> */}
    </div>
  );
};

export default SearchBox;
