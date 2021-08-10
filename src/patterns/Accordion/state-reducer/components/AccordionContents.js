import React from "react";
import styled from "styled-components";

export const AccordionContents = ({ children, isOpen }) => {
  return (
    <div>
      <AccordionContentsContainer isOpen={isOpen}>
          {isOpen? "open": "close"}
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
