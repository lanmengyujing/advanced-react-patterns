import React from "react";
import styled from "styled-components";
import { useAccordionContext } from "../useAccordianContext";

export const AccordionButton = ({ children, index, onClick, ...props }) => {
  const { openIndexes, handleAccordionTitleClick } = useAccordionContext();
  const isOpen = openIndexes.includes(index);
  return (
    <AccordionButtonContainer
      isOpen={isOpen}
      onClick={() => handleAccordionTitleClick(index)}
      {...props}
    >
      Accordion Titile {children}
    </AccordionButtonContainer>
  );
};

const AccordionButtonContainer = styled.button`
  display: flex;
  font-size: 20;
  padding: 10px;
  border: 1px solid #eee;
  outline: none;
  cursor: pointer;
  ${({ isOpen }) => {
    console.log(isOpen);
    if (isOpen) {
      return `background-color: rgba(255, 255, 255, 0.2);`;
    } else {
      return `background-color: rgba(255, 255, 255, 0.5);`;
    }
  }}
`;
