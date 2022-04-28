import React from "react";
import { ButtonContainer } from "./customButton.styled";

const CustomButton = ({ link, children }) => {
  return (
    <ButtonContainer>
      <a href={link}>{children} &rarr;</a>
    </ButtonContainer>
  );
};

export default CustomButton;
