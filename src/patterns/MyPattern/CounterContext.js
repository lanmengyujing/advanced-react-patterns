import React, {useContext} from "react";

const CounterContext = React.createContext(undefined);

export const CounterContextProvider = ({ children, value }) => {
  return (
    <CounterContext.Provider value={value}>
      {children}
    </CounterContext.Provider>
  );
};

export const useCounterContext = ()=>{
    const context =  useContext(CounterContext);
    if (context === undefined) {
        // throw new Error("useCounterContext must be used within a CounterProvider");
    }
    return context
}