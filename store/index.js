import { combineReducers, createStore } from "redux";

import CategoryReducer from "./reducers/categoryReducer";

const RootReducer = combineReducers ({
    categories: CategoryReducer,
})

export default createStore(RootReducer);