import {combineReducers} from "redux";
import shopItems from "./shopItems";
import tastes from "./tastes";

export default combineReducers({
    shopItems: shopItems,
    tastes: tastes,
});
