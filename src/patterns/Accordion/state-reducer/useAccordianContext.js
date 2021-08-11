import React from "react";

const AccordionContext = React.createContext(undefined);

function AccordionProvider({ children, value }) {
  return (
    <AccordionContext.Provider value={value}>{children}</AccordionContext.Provider>
  );
}

function useAccordionContext() {
  const context = React.useContext(AccordionContext);
  if (context === undefined) {
    throw new Error("useAccordionContext must be used within a AccordionContext Provider");
  }
  return context;
}

export { AccordionProvider, useAccordionContext };
