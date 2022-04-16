import { combineReducers } from "redux";
import { CounterReducer } from "./counter/counter.reducer";

export const rootReducer = combineReducers({
    counter: CounterReducer,
})