import { useReducer } from "react";

function defaultReducer(state, action) {
    switch (action.type) {
      case 'increment':
        return {count: Math.min(state.count + 1, action.payload.max)};
      case 'decrement':
        return {count:  Math.max(0,  state.count - 1)};
      default:
        throw new Error(`Unhandled action type: ${action.type}`);
    }
  }

export function useCounter( intial, reducer = defaultReducer) {
  const initialState = {count: intial.count};
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleDecrement = () => {
    dispatch({type: 'decrement'})
  };

  const handleIncrement = () => {
    dispatch({type: 'increment',payload: {max:intial.max}})
  };

  return {
    count: state.count,
    handleDecrement,
    handleIncrement,
  };
}
useCounter.reducer = defaultReducer;
useCounter.types = {
  increment: "increment",
  decrement: "decrement"
};
