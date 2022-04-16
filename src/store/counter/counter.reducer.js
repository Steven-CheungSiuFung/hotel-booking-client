import { COUNTER_ACTION_TYPES } from "./counter.type";

const INITIAL_STATE = {
    value: 0,
};

export const CounterReducer = (state = INITIAL_STATE, action) =>{
    const { type, payload } = action;

    switch (type) {
        case COUNTER_ACTION_TYPES.INCREMENT:
            return {...state, value: payload};
        case COUNTER_ACTION_TYPES.DECREMENT:
            return {...state, value: payload};
        default:
            return state;
    }
}