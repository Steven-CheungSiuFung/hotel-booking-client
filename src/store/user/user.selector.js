import { createSelector } from "reselect";

const selectUserReducer = (state) => state.auth;

export const selectCurrentUser = createSelector(
    [selectUserReducer],
    (authSlice) => 
        authSlice.currentUser
)