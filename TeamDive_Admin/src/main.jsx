import React from "react";
import { BrowserRouter } from "react-router-dom";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./style/global.scss";

ReactDOM.createRoot(document.getElementById("root")).render(
    <BrowserRouter>
        <React.StrictMode>
            <App /> 
        </React.StrictMode>
    </BrowserRouter>
);      
  