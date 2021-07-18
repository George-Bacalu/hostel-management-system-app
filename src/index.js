import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App";
import reducer, { initialState } from "./reducer";
import { StateProvider } from "./StateProvider";

ReactDOM.render(
  <StateProvider initialState={initialState} reducer={reducer}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StateProvider>,
  document.getElementById("root")
);
