import { createSelector } from "reselect";

const selectHotelReducer = (state) => state.hotel;

export const selectHotel = createSelector(
    [selectHotelReducer],
    (hotelSlice) => 
        hotelSlice.currentHotel
)