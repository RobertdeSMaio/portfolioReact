import React from "react";
import ReactDOM from "react-dom/client";
import App from "./Pages/Home/App";
import "./styles.css";

const rootElement = document.getElementById("root");

if (!rootElement) {
  throw new Error(
    "Falha ao encontrar o elemento root. Verifique seu index.html",
  );
}

const root = ReactDOM.createRoot(rootElement);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
