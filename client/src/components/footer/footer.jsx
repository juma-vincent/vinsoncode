import React from "react";
import "./footer.scss";

const Footer = () => {
  return (
    <div className="footer-container">
      <h4 className="title"> Contact Information</h4>
      <small> Email: vinsoncode@gmail.com </small> <br />
      <small>Phone: +254712062516</small> <br/>
      <small>&copy; {new Date().getFullYear().toString()} by Vinsoncode. All rights reserved.</small>
    </div>
  );
};

export default Footer;
//serve -s build"