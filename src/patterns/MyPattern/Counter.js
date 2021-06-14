import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { StyledButton } from "./components/styles.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {Label} from "./components/Label"
import {Count} from "./components/Count"

function Decrement({ icon = "minus",handleDecrement }) {
  return (
    <StyledButton onClick={handleDecrement}>
      <FontAwesomeIcon icon={icon} color="#17a2b8" />
    </StyledButton>
  );
}


function Increment({ icon = "plus",handleIncrement }) {
    return (
      <StyledButton onClick={handleIncrement}>
        <FontAwesomeIcon icon={icon} color="#17a2b8" />
      </StyledButton>
    );
}

const Counter = (props)=>{
    
    return (
        <StyledCounter>
            {props.children}
        </StyledCounter>
    );
}


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
export {Counter}