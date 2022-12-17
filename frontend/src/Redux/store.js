import {configureStore, getDefaultMiddleware} from "@reduxjs/toolkit";
import rootReducer from "./rootReducer";

const middleware = [
    ...getDefaultMiddleware({
        serializableCheck: false,
        immutableCheck: true,
    }),
];

const store = configureStore({
    reducer: rootReducer,
    middleware,
});

export default store;
