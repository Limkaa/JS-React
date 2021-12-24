import { combineReducers, createStore } from "redux";
import cart from './cartStore';
import profile from "./profileStore";

const reducers = combineReducers({
    cart,
    profile
})
export const store = createStore(reducers)