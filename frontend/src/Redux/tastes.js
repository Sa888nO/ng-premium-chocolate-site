import {createAction, createReducer} from "@reduxjs/toolkit";

const initialState = {
    currentItems: [],
};

export const addNewCurrentItem = createAction("ADD_NEW_CURREN_ITEM");
export const deleteNewCurrentItem = createAction("DELETE_NEW_CURREN_ITEM");

export default createReducer(initialState, {
    [addNewCurrentItem]: (state, action) => {
        state.currentItems = [...state.currentItems, action.payload];
    },
    [deleteNewCurrentItem]: (state, action) => {
        state.currentItems = state.currentItems.filter(
            (item) => item !== action.payload
        );
    },
});
