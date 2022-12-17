import React from "react";
import "@configs/configureMobX";

import ReactDOM from "react-dom/client";
import store from "./Redux/store";
import App from "./App";

import "@styles/settings.scss";
import "@styles/globalStyles.scss";
import {Provider} from "react-redux";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <Provider store={store}>
        <React.StrictMode>
            <App />
        </React.StrictMode>
    </Provider>
);
