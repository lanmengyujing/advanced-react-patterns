import { useState } from "react";

//Function which concat all functions together
const callFnsInSequence =
  (...fns) =>
  (...args) =>
    fns.forEach((fn) => fn && fn(...args));

const defaultState = {
  openIndexes: [],
};

const useAccordion = (initialState = defaultState) => {
  const [state, setState] = useState(initialState);

  const handleItemClick = (index) => {
    const closing = state.openIndexes.includes(index);
    const openIndexes = closing
      ? state.openIndexes.filter((i) => i !== index)
      : [...state.openIndexes, index];
    setState({ openIndexes });
  };

  //props getter for 'useAccordion'
  const getOpenAccordionProps = ({ ...otherProps } = {}) => ({
    openIndexes: state.openIndexes,
    ...otherProps,
  });

  const getTitleItemProps = ({ onClick, index, ...otherProps } = {}) => ({
    onClick: callFnsInSequence(() => handleItemClick(index), onClick),
    index: index,
    ...otherProps,
  });

  const getContentsProps = ({ ...otherProps } = {}) => ({
    ...otherProps,
  });

  return {
    getOpenAccordionProps,
    getTitleItemProps,
    getContentsProps,
  };
};

export { useAccordion };
