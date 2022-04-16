import { createAction } from "../../utils/reducer/reducer.utils";
import { COUNTER_ACTION_TYPES } from "./counter.type";

export const increment = (count) => {
    return createAction(COUNTER_ACTION_TYPES.INCREMENT, count + 1);
}

export const decrement = (count) => {
    return createAction(COUNTER_ACTION_TYPES.DECREMENT, count - 1);
}