import React from "react";
import styled from "styled-components";
import { useAccordionContext } from "../useAccordianContext";

export const AccordionButton = ({ children, isOpen, onClick }) => {
  const { openIndexes } = useAccordionContext();
  return (
    <AccordionButtonContainer isOpen={isOpen} onClick={onClick}>
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
    if (isOpen) {
      return `background-color: rgba(255, 255, 255, 0.2);`;
    } else {
      return `background-color: rgba(255, 255, 255, 0.5);`;
    }
  }}
`;
