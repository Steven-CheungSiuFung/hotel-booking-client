import { combineReducers } from "redux";
import { CounterReducer } from "./counter/counter.reducer";
import { HotelReducer } from "./hotel/hotel.reducer";
import { UserReducer } from "./user/user.reducer";

export const rootReducer = combineReducers({
    counter: CounterReducer,
    auth: UserReducer,
    hotel: HotelReducer,
})