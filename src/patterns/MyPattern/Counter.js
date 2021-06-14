import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { Label } from "./components/Label";
import { Count } from "./components/Count";
import { Increment } from "./components/Increment";
import { Decrement } from "./components/Decrement";
import { CounterContextProvider } from "./CounterContext";

const Counter = ({children, value=null, initialValue=0, onChange}) => {
  const [count, setCount] = useState(initialValue);

  const isControlled = value!==null && !! onChange;
  const getCount = () => (isControlled ? value : count);

  const handleCountChange = (newValue) =>{
     isControlled? onChange(newValue): setCount(newValue);
  }

  const handleDecrement = () => {
    handleCountChange(Math.max(0, getCount()  - 1));
  };

  const handleIncrement = () => {
    handleCountChange(getCount()  + 1);
  };

  return (
    <CounterContextProvider value={{ count: getCount(), handleDecrement, handleIncrement }}>
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
