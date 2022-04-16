import { createSelector } from "reselect"

const selectCounterReducer = (state) => state.counter;

export const selectCount = createSelector(
    [selectCounterReducer],
    (counterSlice) => 
        counterSlice.value
);