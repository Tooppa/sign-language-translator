import {
  addTranslation,
  clearTranslations,
  createOrFindUser,
} from "../../endpoints/users";
import {
  ACTION_CLEAR_TRASLATIONS,
  ACTION_LOGIN_ATTEMPT,
  ACTION_LOGIN_SUCCESS,
  ACTION_UPDATE_TRASLATION,
  loginErrorAction,
  loginSuccessAction,
} from "../actions/loginActions";
import { sessionSetAction } from "../actions/sessionActions";

export const loginMiddleware =
  ({ dispatch }) =>
  (next) =>
  async (action) => {
    next(action);

    if (action.type === ACTION_LOGIN_ATTEMPT) {
      try {
        //   Make sure payload is set
        if (action.payload === undefined) {
          console.error("No username set");
          return;
        }

        const foundUser = await createOrFindUser(action.payload);
        // When we have created or found an foundUsers
        if (foundUser) {
          //  Dispatch it to our requesting component via the reducer
          // Always the take first index from found users
          // Backend returns all users matching the username variable EXACTLY.
          // This shouldn't be an issue since only one user per username is allowed
          dispatch(loginSuccessAction(foundUser));
        } else {
          console.error(`User not found with ${action.payload}`);
        }
      } catch (error) {
        dispatch(loginErrorAction(error));
      }
    } else if (action.type === ACTION_LOGIN_SUCCESS) {
      dispatch(sessionSetAction(action.payload));
    } else if (action.type === ACTION_UPDATE_TRASLATION) {
      addTranslation(
        action.payload.user.username,
        action.payload.newTranslation
      );
      dispatch(
        sessionSetAction({
          username: action.payload.user.username,
          translations: [
            ...action.payload.user.translations,
            action.payload.newTranslation,
          ],
        })
      );
    } else if (action.type === ACTION_CLEAR_TRASLATIONS) {
      clearTranslations(action.payload.id);
      dispatch(sessionSetAction(action.payload));
    }
  };
