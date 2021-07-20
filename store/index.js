import { combineReducers, createStore } from "redux";

import CategoryReducer from "./reducers/categoryReducer";
import ScoreReducer from "./reducers/scoreReducer";

const RootReducer = combineReducers ({
    categories: CategoryReducer,
    scores: ScoreReducer,
})

export default createStore(RootReducer);