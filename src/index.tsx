import React from "react";
import ReactDOM from "react-dom/client";
import { HashRouter, useLocation } from "react-router-dom";

import App from "./App";
import "./assets/css/App.min.css";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <HashRouter>
    <App />
  </HashRouter>
);