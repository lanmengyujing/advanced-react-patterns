import React from "react";
import { StyledButton } from "./styles.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useCounterContext } from "../CounterContext";

function Decrement({ icon = "minus" }) {
  const { count, onChange } = useCounterContext();
  return (
    <StyledButton onClick={()=>onChange(Math.max(0, count - 1))}>
      <FontAwesomeIcon icon={icon} color="#17a2b8" />
    </StyledButton>
  );
}

export { Decrement };
