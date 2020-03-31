import React, { useReducer, useContext, createContext } from "react";
import "./styles.css";

export const storeContext = createContext();

const initialState = 0;
const reducer = (CurrentState, action) => {
  switch (action.type) {
    case "increment":
      return CurrentState + 1;
    case "decrement":
      return CurrentState - 1;
    case "set":
      return action.count;
    default:
      throw new Error("Unexpected action");
  }
};

export default function AppStore(props) {
  const [store, dispatch] = useReducer(reducer, initialState);

  return (
    <storeContext.Provider value={{ store, dispatch }}>
      {props.children}
    </storeContext.Provider>
  );
}
