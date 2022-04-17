import { createAction } from "../../utils/reducer/reducer.utils";
import { USER_ACTION_TYPES } from "./user.types";

export const signInUser = (user) => createAction(USER_ACTION_TYPES.USER_SIGN_IN, user);

export const signOutUser = () => createAction(USER_ACTION_TYPES.USER_SIGN_OUT);
