import { legacy_createStore as createStore, combineReducers } from "redux";
import { CartItemReducer } from "./CartItem/CartItemReducer";

export const store = createStore(CartItemReducer);
