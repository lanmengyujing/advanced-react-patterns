import React, { useRef, useEffect } from "react";
import { AccordionButton } from "./components/AccordionButton";
import { AccordionContents } from "./components/AccordionContents";
import { AccordionItem } from "./components/AccordionItem";
import { AccordionProvider } from "./useAccordianContext";

export const Accordion = ({ children, openIndexes, onChange }) => {
  const firstMounded = useRef(true);
  useEffect(() => {
    if (!firstMounded.current) {
      onChange && onChange(openIndexes);
    }
    firstMounded.current = false;
  }, [onChange, openIndexes]);

  return (
    <AccordionProvider value={{ openIndexes }}>
      <div>{children}</div>
    </AccordionProvider>
  );
};

Accordion.AccordionButton = AccordionButton;
Accordion.AccordionContents = AccordionContents;
Accordion.AccordionItem = AccordionItem;
