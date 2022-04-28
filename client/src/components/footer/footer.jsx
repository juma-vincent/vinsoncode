import React from "react";
import { FooterContainer } from "./footer.styled";


const Footer = () => {
  return (
    <FooterContainer >
      <h4 className="title"> Contact Information</h4>
      <small> Email: vinsoncode@gmail.com </small> <br />
      <small>Phone: +254712062516</small> <br/>
      <small>&copy; {new Date().getFullYear().toString()} Vinsoncode. All rights reserved.</small>
    </FooterContainer >
  );
};

export default Footer;
