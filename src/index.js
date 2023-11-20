import React from "react";
import ReactDOM from "react-dom";
import { ControlProvider } from "./Context/control";
import App from "./App.js";
import { BrowserRouter } from "react-router-dom";
const root = ReactDOM.createRoot(document.getElementById("app"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <ControlProvider>
        <App />
      </ControlProvider>
    </BrowserRouter>
  </React.StrictMode>
);
