import { Counter } from "./Counter";
import React, {  useState } from "react";

const MyPattern = () => {
    const MAX = 1000;
    const [count, setCount] = useState(0)

    const handleDecrement =()=>{
        if(count>0){
            setCount(count-1)
        }
    }

    const handleIncrement =()=>{
        if(count<MAX){
            setCount(count+1)
        }
    }
  return (
    <Counter>
      <Counter.Decrement handleDecrement={handleDecrement}/>
      <Counter.Label>Counter</Counter.Label>
      <Counter.Count count={count} max={MAX}></Counter.Count>
     <Counter.Increment handleIncrement={handleIncrement}>+</Counter.Increment>
    </Counter>     
  );
};

export { MyPattern };
