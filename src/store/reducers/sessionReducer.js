import {
  ACTION_SESSION_INIT,
  ACTION_SESSION_LOGOUT,
  ACTION_SESSION_SET,
  ACTION_UPDATE_TRASLATION,
  ACTION_CLEAR_TRASLATIONS,
} from "../actions/sessionActions";

const initialState = {
  user: {},
};

export const sessionReducer = (state = { ...initialState }, action) => {
  switch (action.type) {
    case ACTION_SESSION_SET:
      return {
        user: { ...action.payload },
      };

    case ACTION_UPDATE_TRASLATION:
      return {
        ...action.payload.user,
        translations: [
          ...action.payload.user.translations,
          action.payload.newTranslation,
        ],
      };
    case ACTION_CLEAR_TRASLATIONS:
      return {
        user: {
          ...action.payload,
        },
      };

    case ACTION_SESSION_LOGOUT:
      return initialState;

    default:
      return state;
  }
};
