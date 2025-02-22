import React from "react";
import { BrowserRouter } from "react-router-dom";
import ReactDOM from "react-dom/client";
import App from "./App";
import store from "./store/index";
import { persistUserState } from "./store/UserSlice";
import { Provider } from "react-redux";


persistUserState(store);

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>   
        <Provider store={store}>
            <BrowserRouter>
                <App /> 
            </BrowserRouter>
        </Provider>  
    </React.StrictMode>
);      
