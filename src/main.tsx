import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./index.css";

// Check for intended route from redirect (for servers without mod_rewrite)
const intendedRoute = sessionStorage.getItem('intendedRoute');
if (intendedRoute && window.location.pathname === '/') {
  sessionStorage.removeItem('intendedRoute');
  window.history.replaceState(null, '', intendedRoute);
}

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
