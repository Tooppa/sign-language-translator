import { ACTION_LOGIN_ATTEMPT, ACTION_LOGIN_SUCCESS } from "../actions/loginActions";

export const loginReducer = (state = 0, action) => {
    switch (action.type) {
        case ACTION_LOGIN_ATTEMPT:
            return state;
        case ACTION_LOGIN_SUCCESS:
            return {
              user: action.payload,
            };
        default:
            return state;
    }
};