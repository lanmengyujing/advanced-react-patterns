import { useReducer } from "react";

const initialState = {
  openIndexes: [],
};

const internalReducer = (state, { type, payload }) => {
  switch (type) {
    case "opening":
      return {
        ...state,
        openIndexes: payload.openIndexes,
      };
    case "closing":
      return {
        ...state,
        openIndexes: payload.openIndexes,
      };
    default:
      throw new Error(`Unhandled action type: ${type}`);
  }
};

const useAccordion = ({ initial }, reducer = internalReducer) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const openIndexes = state.openIndexes;

  const handleItemClick = (index) => {
    const closing = state.openIndexes.includes(index);
    const action = {
      type: closing ? "closing" : "opening",
      payload: {
        openIndexes: closing
          ? state.openIndexes.filter((i) => i !== index)
          : [...state.openIndexes, index],
      },
    };
    dispatch(action);
  };

  return {
    openIndexes,
    handleItemClick,
  };
};

useAccordion.reducer = internalReducer;

export {useAccordion}