import React from "react";
import ReactDOM from "react-dom/client";
import App from "./Components/App.jsx";
import { BrowserRouter } from "react-router-dom";

import "./Styles/index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>
);