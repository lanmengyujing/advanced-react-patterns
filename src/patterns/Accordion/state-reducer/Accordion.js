import React, { useRef, useEffect } from "react";
import styled from "styled-components";
import { AccordionButton } from "./components/AccordionButton";
import { AccordionContents } from "./components/AccordionContents";
import { CounterProvider } from "./useAccordianContext";

export const Accordion = ({ children, openIndexes, onChange }) => {
  const firstMounded = useRef(true);
  useEffect(() => {
    if (!firstMounded.current) {
      onChange && onChange(openIndexes);
    }
    firstMounded.current = false;
  }, [onChange, openIndexes]);

  return (
    <CounterProvider value={{ openIndexes }}>
      <div>{children}</div>
    </CounterProvider>
  );
};

Accordion.AccordionButton = AccordionButton;
Accordion.AccordionContents = AccordionContents;
