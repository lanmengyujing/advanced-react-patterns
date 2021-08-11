import React, { useState } from "react";
import styled from "styled-components";
import { Accordion } from "./Accordion";

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
  const [openIndexes, setOpenIndexes] = useState([]);
  const onChange = (currentIndex) => {
    // open two accordion at most
    const isOpened = openIndexes.includes(currentIndex)
    const newOpenIndexes = isOpened
      ? openIndexes.filter((index) => index !== currentIndex)
      : [...openIndexes, currentIndex].slice(-2);
    setOpenIndexes(newOpenIndexes);
  };

  return (
    <StyledContainer>
      <Accordion value={openIndexes} onControledChange={onChange}>
        {items.map((item, index) => {
          return (
            <Accordion.AccordionItem key={item.title} direction="horizontal">
              <Accordion.AccordionButton index={index}>
                {item.title}{" "}
                <span>{openIndexes.includes(index) ? "👇" : "👈"}</span>
              </Accordion.AccordionButton>
              <Accordion.AccordionContents index={index}>
                {item.contents}
              </Accordion.AccordionContents>
            </Accordion.AccordionItem>
          );
        })}
      </Accordion>
    </StyledContainer>
  );
}

export { Usage };

const StyledContainer = styled.div`
  margin-top: 20px;
  text-align: left;
`;
