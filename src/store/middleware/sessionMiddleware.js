import { addTranslation, clearTranslations } from "../../endpoints/users";
import {
  loginAttemptAction,
  loginSuccessAction,
  logoutAction,
} from "../actions/loginActions";
import {
  ACTION_SESSION_INIT,
  ACTION_SESSION_LOGOUT,
  ACTION_SESSION_SET,
  ACTION_CLEAR_TRASLATIONS,
  ACTION_UPDATE_TRASLATION,
  sessionSetAction,
} from "../actions/sessionActions";

const STORED_USER_KEY = "sign-language-translator-session";

export const sessionMiddleware =
  ({ dispatch }) =>
  (next) =>
  async (action) => {
    next(action);

    // Get saved session from local storage, if it has one
    if (action.type === ACTION_SESSION_INIT) {
      // When there is already stored user, log in straight away
      const storedUser = localStorage.getItem(STORED_USER_KEY);
      if (storedUser) {
        const parsed = JSON.parse(storedUser);
        dispatch(loginAttemptAction(parsed.username));
      }
    } else if (action.type === ACTION_SESSION_SET) {
      // Store set user as string to local storage
      localStorage.setItem(STORED_USER_KEY, JSON.stringify(action.payload));
    } else if (action.type === ACTION_SESSION_LOGOUT) {
      // Logging out clears stored user from local storage
        localStorage.removeItem(STORED_USER_KEY);
        dispatch(logoutAction());
    } else if (action.type === ACTION_UPDATE_TRASLATION) {
      addTranslation(
        action.payload.user.username,
        action.payload.newTranslation
      );
      dispatch(
        sessionSetAction({
          ...action.payload.user,
          translations: [
            ...action.payload.user.translations,
            action.payload.newTranslation,
          ],
        })
      );
    } else if (action.type === ACTION_CLEAR_TRASLATIONS) {
      if (action.payload.id === undefined) {
        console.error("id not found");
        return;
      }
      const updatedUser = await clearTranslations(action.payload.id);
      dispatch(sessionSetAction(updatedUser));
    }
  };
