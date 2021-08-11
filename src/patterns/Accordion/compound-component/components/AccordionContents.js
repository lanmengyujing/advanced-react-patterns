import React from "react";
import styled from "styled-components";
import { useAccordionContext } from "../useAccordianContext";

export const AccordionContents = ({ children, index, ...props }) => {
  const { openIndexes } = useAccordionContext();
  const isOpen = openIndexes.includes(index);
  return (
    <div>
      <AccordionContentsContainer isOpen={isOpen} {...props}>
        {isOpen ? "open" : "close"}
        {children}
      </AccordionContentsContainer>
    </div>
  );
};

const AccordionContentsContainer = styled.div`
  margin: 20px;
  ${({ isOpen }) => {
    if (isOpen) {
      return `opacity: 1;`;
    } else {
      return `opacity: 0.5;`;
    }
  }}
`;
