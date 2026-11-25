import React from "react";
import ReactDOM from "react-dom/client";
import "../css/styles.css";
import { App } from "./App";

const loader = document.getElementById("page-loader");
if (loader) {
  loader.style.opacity = "0";
  loader.style.pointerEvents = "none";
  setTimeout(() => loader.remove(), 300);
}

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
const errorSintaxis = ;
const errorSintaxis = ;