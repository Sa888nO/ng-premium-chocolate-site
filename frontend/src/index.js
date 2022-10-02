import React from "react";
import "@configs/configureMobX";

import ReactDOM from "react-dom/client";

import App from "./App";

import "@styles/settings.scss";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
