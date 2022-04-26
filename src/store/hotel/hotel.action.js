import { createAction } from "../../utils/reducer/reducer.utils";
import { HOTEL_ACTION_TYPES } from "./hotel.types";

export const updateCurrentHotel = (hotelData) => {
    return createAction(HOTEL_ACTION_TYPES.SET_CURRENT_HOTEL_DATA, hotelData);
}

export const resetCurrentHotel = () => {
    return createAction(HOTEL_ACTION_TYPES.SET_CURRENT_HOTEL_EMPTY);
}