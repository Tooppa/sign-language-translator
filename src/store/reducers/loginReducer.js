import { ACTION_CLEAR_TRASLATIONS, ACTION_LOGIN_ATTEMPT, ACTION_LOGIN_SUCCESS, ACTION_UPDATE_TRASLATION } from "../actions/loginActions";

export const loginReducer = (state = 0, action) => {
    switch (action.type) {
      case ACTION_LOGIN_ATTEMPT:
        return state;
      case ACTION_LOGIN_SUCCESS:
        return {
          user: action.payload,
        };

      case ACTION_UPDATE_TRASLATION:
        return {
          user: {
            ...action.payload.user,
            translations: [...action.payload.user.translations, action.payload.newTranslation]
          }
        }
        
        case ACTION_CLEAR_TRASLATIONS:
        return action.payload;
      default:
        return state;
    }
};