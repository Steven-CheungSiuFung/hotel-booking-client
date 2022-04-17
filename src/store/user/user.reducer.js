import { USER_ACTION_TYPES } from "./user.types";

const INITIAL_STATE = {
    currentUser: null,
}

export const UserReducer = (state = INITIAL_STATE, action) => {
    const { type, payload } = action;

    switch (type) {
        case USER_ACTION_TYPES.USER_SIGN_IN:
            return { ...state, currentUser: payload };
        case USER_ACTION_TYPES.USER_SIGN_OUT:
            return { ...state, currentUser: null };
        default:
            return state;
    }
}