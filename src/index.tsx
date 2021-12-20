import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { VerificationsContextProvider } from "./context";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>
    <VerificationsContextProvider>
      <App />
    </VerificationsContextProvider>
  </React.StrictMode>,
  rootElement
);
