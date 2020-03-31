import React from "react";
import ReactDOM from "react-dom";
import StoreContextProvider from "./StoreContext";

import App from "./App";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>
    <StoreContextProvider>
      <App />
    </StoreContextProvider>
  </React.StrictMode>,
  rootElement
);
