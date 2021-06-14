import { Counter } from "./Counter";
import React,{useState} from "react";

const MyPattern = () => {
const [count, setCount] = useState(0);

  const handleChangeCounter = (newCount) => {
    setCount(newCount);
  };
  return (
    <Counter count={count} onChange={handleChangeCounter}>
      <Counter.Decrement icon={"minus"} >-</Counter.Decrement>
      <Counter.Label>Counter</Counter.Label>
      <Counter.Count max={5} ></Counter.Count>
      <Counter.Increment icon={"plus"}>+</Counter.Increment>
    </Counter>     
  );
};

export { MyPattern };
