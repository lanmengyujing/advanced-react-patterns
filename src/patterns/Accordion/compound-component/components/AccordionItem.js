import React from "react";
import styled from "styled-components";

export const AccordionItem = ({ children, direction }) => {
  return (
    <AccordionItemContainer direction={direction}>
      {children}
    </AccordionItemContainer>
  );
};

const AccordionItemContainer = styled.div`
  display: flex;
  padding: 10px;
  ${({ direction }) => {
    if (direction === "vertical") {
      return `flex-direction: column;`;
    } else {
      return `flex-direction: row;`;
    }
  }}
`;
