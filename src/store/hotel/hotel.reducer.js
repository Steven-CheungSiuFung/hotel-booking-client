import { HOTEL_ACTION_TYPES } from "./hotel.types";

const INITIAL_STATE = {
    currentHotel: null,
};

export const HotelReducer = (state = INITIAL_STATE, action) => {
    const { type, payload } = action;

    switch (type) {
        case HOTEL_ACTION_TYPES.SET_CURRENT_HOTEL_DATA:
            return {...state, currentHotel: payload};
        case HOTEL_ACTION_TYPES.SET_CURRENT_HOTEL_EMPTY:
            return {...state, currentHotel: null};
        default:
            return state;
    }

}