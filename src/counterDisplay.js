import React, { useState, useEffect, useContext } from "react";

import { storeContext } from "./StoreContext";

export default function CounterDisplay(props) {
  const store = useContext(storeContext);
  return <h1> Count is {store.store}</h1>;
}
