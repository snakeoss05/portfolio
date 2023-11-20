import React from "react";
import ReactDOM from "react-dom";
import { ControlProvider } from "./Context/control";
import App from "./App.js";

ReactDOM.render(
  <ControlProvider>
    <App />
  </ControlProvider>,
  document.getElementById("app")
);
