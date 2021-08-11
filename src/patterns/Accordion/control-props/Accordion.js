import React, { useRef, useEffect, useState } from "react";
import { AccordionButton } from "./components/AccordionButton";
import { AccordionContents } from "./components/AccordionContents";
import { AccordionItem } from "./components/AccordionItem";
import { AccordionProvider } from "./useAccordianContext";

export const Accordion = ({ children, onChange, value = null, onControledChange }) => {
  const isControlled = value != null && !!onControledChange;
  const [openIndexes, setOpenIndexes] = useState([]);

  const getOpenIndexes = () => {
    return isControlled ? value : openIndexes;
  };

  const changeOpenIndexes = (currentIndex) => {
    const closing = openIndexes.includes(currentIndex);
    const newOpenIndexes = closing
      ? openIndexes.filter((i) => i !== currentIndex)
      : [...openIndexes, currentIndex];

    return isControlled ? onControledChange(currentIndex) : setOpenIndexes(newOpenIndexes);
  };

  const handleAccordionTitleClick = (index) => {
    changeOpenIndexes(index);
  };

  const firstMounded = useRef(true);
  useEffect(() => {
    if (!firstMounded.current && !isControlled) {
      onChange && onChange(openIndexes);
    }
    firstMounded.current = false;
  }, [onChange, openIndexes, isControlled]);

  return (
    <AccordionProvider value={{ openIndexes: getOpenIndexes(), handleAccordionTitleClick }}>
      <div>{children}</div>
    </AccordionProvider>
  );
};

Accordion.AccordionButton = AccordionButton;
Accordion.AccordionContents = AccordionContents;
Accordion.AccordionItem = AccordionItem;
