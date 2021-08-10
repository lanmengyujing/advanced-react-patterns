import React from "react";
import styled from "styled-components";
import { Accordion } from "./Accordion";
import { useAccordion } from "./useAccordion";

const items = [
  {
    title: "🐴",
    contents: (
      <div>
        Horses can sleep both lying down and standing up. Domestic horses have a
        lifespan of around 25 years. A 19th century horse named 'Old Billy' is
        said to have lived 62 years.
      </div>
    ),
  },
  {
    title: "🦏",
    contents: (
      <div>
        Rhino skin maybe thick but it can be quite sensitive to sunburns and
        insect bites which is why they like wallow so much – when the mud dries
        it acts as protection from the sunburns and insects.
      </div>
    ),
  },
  {
    title: "🦄",
    contents: (
      <div>
        If you’re looking to hunt a unicorn, but don’t know where to begin, try
        Lake Superior State University in Sault Ste. Marie, Michigan. Since
        1971, the university has issued permits to unicorn questers.
      </div>
    ),
  },
];

function Usage() {
  const singleReducer = (state, action) => {
    switch (action.type) {
      case "opening":
        return { ...action, openIndexes: action.openIndexes.slice(-1) };
      default:
        return state;
    }
  };

  const { openIndexes, handleItemClick } = useAccordion(
    { openIndex: 0 }
    // singleReducer
  );

  return (
    <StyledContainer>
      {items.map((item, index) => {
        return (
          <Accordion key={index} openIndexes={openIndexes}>
            <Accordion.AccordionButton
              isOpen={openIndexes.includes(index)}
              onClick={() => handleItemClick(index)}
            >
              {item.title}{" "}
              <span>{openIndexes.includes(index) ? "👇" : "👈"}</span>
            </Accordion.AccordionButton>
            <Accordion.AccordionContents isOpen={openIndexes.includes(index)}>
              {item.contents}
            </Accordion.AccordionContents>
          </Accordion>
        );
      })}
    </StyledContainer>
  );
}

export { Usage };

const StyledContainer = styled.div`
  margin-top: 20px;
  text-align: left;
`;
