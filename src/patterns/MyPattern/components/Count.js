import React from "react";
import styled from "styled-components";

function Count({ max, count }) {
  const hasError = max ? count >= max : false;

  return <StyledCount hasError={hasError}>{count}</StyledCount>;
}

const StyledCount = styled.div`
  background-color: ${({ hasError }) => (hasError ? "#bd2130" : "#17a2b8")};
  color: white;
  padding: 5px 7px;
`;

export { Count };
