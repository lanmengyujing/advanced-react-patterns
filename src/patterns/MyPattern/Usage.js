import React from "react";
import { Counter } from "./Counter";
import { useCounter } from "./useCounter";

const MAX_COUNT = 10;
const MyPattern = () => {
    const reducer = (state,action)=>{
        switch (action.type) {
            case "decrement":
              return {
                count: Math.max(0, state.count - 2) //The decrement delta was changed for 2 (Default is 1)
              };
            default:
              return useCounter.defaultReducer(state, action);
        }
    }
  const { count, handleIncrement, handleDecrement } = useCounter(0, reducer);

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
          onClick={handleIncrement}
          disabled={count === MAX_COUNT}
        >
          +
        </Counter.Increment>
      </Counter>
      <button onClick={handleIncrement} disabled={count === MAX_COUNT}>
        Custom increment btn 1
      </button>
    </>
  );
};

export { MyPattern };
