import {
  ACTION_SESSION_INIT,
  ACTION_SESSION_LOGOUT,
  ACTION_SESSION_SET,
} from "../actions/sessionActions";

const initialState = {
  user: {},
  isLoggedIn: false,
};

export const sessionReducer = (state = { ...initialState }, action) => {
  switch (action.type) {
    case ACTION_SESSION_SET:
      return {
        user: { ...action.payload },
        isLoggedIn: true,
      };

    case ACTION_SESSION_INIT:
    case ACTION_SESSION_LOGOUT:
      return initialState;

    default:
      return state;
  }
};
