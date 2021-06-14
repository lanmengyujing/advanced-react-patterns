import React from "react";
import { Counter } from "./Counter";
import { useCounter } from "./useCounter";

const MyPattern = () => {
  const { count, handleIncrement, handleDecrement } = useCounter(0);
  const MAX_COUNT = 10;

  const handleClickIncrement = () => {
    //Put your custom logic
    if (count < MAX_COUNT) {
      handleIncrement();
    }
  };

  return (
    <>
      <Counter value={count}>
        <Counter.Decrement onClick={handleDecrement} icon={"minus"}>
          -
        </Counter.Decrement>
        <Counter.Label>Counter</Counter.Label>
        <Counter.Count max={MAX_COUNT}></Counter.Count>
        <Counter.Increment
          icon={"plus"}
          onClick={handleClickIncrement}
          disabled={count === MAX_COUNT}
        >
          +
        </Counter.Increment>
      </Counter>
      <button onClick={handleClickIncrement} disabled={count === MAX_COUNT}>
        Custom increment btn 1
      </button>
    </>
  );
};

export { MyPattern };
