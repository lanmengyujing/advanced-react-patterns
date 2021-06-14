import { useState } from "react";

export function useCounter(intialeCount) {
  const [count, setCount] = useState(intialeCount);
  const handleDecrement = () => {
    setCount((precount) => Math.max(0, precount - 1));
  };

  const handleIncrement = () => {
    setCount((precount) => precount + 1);
  };

  return {
    count,
    handleDecrement,
    handleIncrement,
  };
}
