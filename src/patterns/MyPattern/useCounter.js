import { useReducer } from "react";

function defaultReducer(state, action) {
    switch (action.type) {
      case 'increment':
        return {count: state.count + 1};
      case 'decrement':
        return {count:  Math.max(0,  state.count - 1)};
      default:
        throw new Error();
    }
  }

export function useCounter(intialeCount=0, reducer = defaultReducer) {
  const initialState = {count: intialeCount};
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleDecrement = () => {
    dispatch({type: 'decrement'})
  };

  const handleIncrement = () => {
    dispatch({type: 'increment'})
  };

  return {
    count: state.count,
    handleDecrement,
    handleIncrement,
  };
}

useCounter.defaultReducer = defaultReducer