import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { StyledButton } from "./styles.js";
import { useCounterContext } from "../CounterContext";

function Increment({ icon = "plus" }) {
  const { count, onChange } = useCounterContext();
  return (
    <StyledButton onClick={()=>onChange(count + 1)}>
      <FontAwesomeIcon icon={icon} color="#17a2b8" />
    </StyledButton>
  );
}

export { Increment };
