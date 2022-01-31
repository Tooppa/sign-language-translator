import { ACTION_LOGIN_ATTEMPT, ACTION_LOGIN_ERROR, ACTION_LOGIN_SUCCESS, ACTION_LOGOUT } from "../actions/loginActions";

const initalState = {
  isLoggedIn: false,
  error: ''
}

export const loginReducer = (state = {...initalState}, action) => {
    switch (action.type) {
      case ACTION_LOGIN_ATTEMPT:
        return state;
      case ACTION_LOGIN_SUCCESS:
        return {
          isLoggedIn: true,
          error: "",
        };
      case ACTION_LOGOUT:
        return initalState;
      case ACTION_LOGIN_ERROR:
        return {
          ...initalState,
          error: 'Login failed'
        }
      default:
        return state;
    }
};