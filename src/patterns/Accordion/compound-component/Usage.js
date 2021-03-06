import React, { useState } from "react";
import styled from "styled-components";
import { Accordion } from "./Accordion";

const items = [
  {
    title: "π΄",
    contents: (
      <div>
        Horses can sleep both lying down and standing up. Domestic horses have a
        lifespan of around 25 years. A 19th century horse named 'Old Billy' is
        said to have lived 62 years.
      </div>
    ),
  },
  {
    title: "π¦",
    contents: (
      <div>
        Rhino skin maybe thick but it can be quite sensitive to sunburns and
        insect bites which is why they like wallow so much β when the mud dries
        it acts as protection from the sunburns and insects.
      </div>
    ),
  },
  {
    title: "π¦",
    contents: (
      <div>
        If youβre looking to hunt a unicorn, but donβt know where to begin, try
        Lake Superior State University in Sault Ste. Marie, Michigan. Since
        1971, the university has issued permits to unicorn questers.
      </div>
    ),
  },
];

function Usage() {
  const [openIndexes, setOpenIndexes] = useState([]);
  const onChange = (openIndexes) => {
    console.log("all open indexes now", openIndexes);
    setOpenIndexes(openIndexes);
  };

  return (
    <StyledContainer>
      <Accordion onChange={onChange}>
        {items.map((item, index) => {
          return (
            <Accordion.AccordionItem key={item.title} direction="horizontal">
              <Accordion.AccordionButton index={index}>
                {item.title}{" "}
                <span>{openIndexes.includes(index) ? "π" : "π"}</span>
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
