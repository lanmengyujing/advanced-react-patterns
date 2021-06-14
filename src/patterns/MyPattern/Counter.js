import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { Label } from "./components/Label";
import { Count } from "./components/Count";
import { Increment } from "./components/Increment";
import { Decrement } from "./components/Decrement";
import { CounterContextProvider } from "./CounterContext";

const Counter = ({children, count, onChange}) => {

  const handleDecrement = () => {
    onChange(Math.max(0, count - 1));
  };

  const handleIncrement = () => {
    onChange(count + 1);
  };

  return (
    <CounterContextProvider value={{ count, handleDecrement, handleIncrement }}>
      <StyledCounter>{children}</StyledCounter>
    </CounterContextProvider>
  );
};

const StyledCounter = styled.div`
  display: inline-flex;
  border: 1px solid #17a2b8;
  line-height: 1.5;
  border-radius: 0.25rem;
  overflow: hidden;
`;

Counter.Count = Count;
Counter.Label = Label;
Counter.Increment = Increment;
Counter.Decrement = Decrement;
export { Counter };
