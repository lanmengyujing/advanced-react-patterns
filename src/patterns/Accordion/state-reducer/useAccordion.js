import { useReducer } from "react";

const defaultState = {
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

const useAccordion = (
    initialState = defaultState,
  reducer = internalReducer
) => {
  const [state, dispatch] = useReducer(reducer, {
    openIndexes: initialState.openIndexes,
  });

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
    openIndexes: state.openIndexes,
    handleItemClick,
  };
};

useAccordion.reducer = internalReducer;

export { useAccordion };
