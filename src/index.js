import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./Pages/App/App";
import { LocalProvider } from "./Context/contextProvider";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>
      <LocalProvider>
        <Routes>
         <Route path="/*" element={<App />} /> 
        </Routes>
      </LocalProvider>
    </Router>
  </React.StrictMode>
);
