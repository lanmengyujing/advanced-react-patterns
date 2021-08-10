import React, { useRef, useEffect } from "react";
import styled from "styled-components";
import { AccordionButton } from "./components/AccordionButton";
import { AccordionContents } from "./components/AccordionContents";

export const Accordion = ({children}) => {
  return <div>{children}</div>;
};

Accordion.AccordionButton = AccordionButton;
Accordion.AccordionContents = AccordionContents;
