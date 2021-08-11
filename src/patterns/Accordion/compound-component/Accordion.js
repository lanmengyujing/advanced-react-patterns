import React, { useRef, useEffect, useState } from "react";
import { AccordionButton } from "./components/AccordionButton";
import { AccordionContents } from "./components/AccordionContents";
import { AccordionItem } from "./components/AccordionItem";
import { CounterProvider } from "./useAccordianContext";

export const Accordion = ({ children, onChange }) => {
  const [ openIndexes, setOpenIndexes ] = useState([]);

  const handleAccordionTitleClick = (index)=>{
    const closing = openIndexes.includes(index);
    const action = {
      payload: {
        openIndexes: closing
          ? openIndexes.filter((i) => i !== index)
          : [...openIndexes, index],
      },
    };
    setOpenIndexes(action.payload.openIndexes)
  }


  const firstMounded = useRef(true);
  useEffect(() => {
    if (!firstMounded.current) {
      onChange && onChange(openIndexes);
    }
    firstMounded.current = false;
  }, [onChange, openIndexes]);

  return (
    <CounterProvider value={{ openIndexes, handleAccordionTitleClick }}>
      <div>{children}</div>
    </CounterProvider>
  );
};

Accordion.AccordionButton = AccordionButton;
Accordion.AccordionContents = AccordionContents;
Accordion.AccordionItem = AccordionItem;
