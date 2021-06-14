import { Counter } from "./Counter";
import React from "react";

const MyPattern = () => {
  return (
    <Counter initialCount={0}>
      <Counter.Decrement>-</Counter.Decrement>
      <Counter.Label>Counter</Counter.Label>
      <Counter.Count max={1000} ></Counter.Count>
      <Counter.Increment>+</Counter.Increment>
    </Counter>     
  );
};

export { MyPattern };
