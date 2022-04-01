import { createStore, combineReducers } from "redux";
// Store 만들고, Reducers 를 묶어라
import dict from "./modules/dict";

const rootReducer = combineReducers({ dict });
// Reducer들을 묶은 것 => rootReducer

const store = createStore(rootReducer);

export default store;
