import React, { useState, useEffect, useContext } from "react";
import { storeContext } from "./StoreContext";
import CounterDisplay from "./counterDisplay";

export default function(props) {
  const { dispatch } = useContext(storeContext);

  const increment = e => {
    dispatch({ type: "increment" });
  };

  const decrement = e => {
    dispatch({ type: "decrement" });
  };

  return (
    <div>
      <button onClick={increment}> Increment </button>
      <button onClick={decrement}> Decrement </button>
      <CounterDisplay />
    </div>
  );
}
