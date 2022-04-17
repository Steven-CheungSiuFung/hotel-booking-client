import { combineReducers } from "redux";
import { CounterReducer } from "./counter/counter.reducer";
import { UserReducer } from "./user/user.reducer";

export const rootReducer = combineReducers({
    counter: CounterReducer,
    user: UserReducer,
})