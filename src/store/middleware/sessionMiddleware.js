import { loginSuccessAction } from "../actions/loginActions";
import { ACTION_SESSION_INIT, ACTION_SESSION_LOGOUT, ACTION_SESSION_SET } from "../actions/sessionActions";

const STORED_USER_KEY = 'sign-language-translator-session';

export const sessionMiddleware = ({ dispatch }) => next => action => {
    next(action);

    // Get saved session from local storage, if it has one
    if (action.type === ACTION_SESSION_INIT) {
        // When there is already stored user, log in straight away
        const storedUser = localStorage.getItem(STORED_USER_KEY);
        if (storedUser) {
            dispatch(loginSuccessAction(JSON.parse(storedUser)));
        }
    }
    else if (action.type === ACTION_SESSION_SET) {
        // Store set user as string to local storage
        localStorage.setItem(STORED_USER_KEY, JSON.stringify(action.payload));
    }
    else if (action.type === ACTION_SESSION_LOGOUT) {
        // Logging out clears stored user from local storage
        localStorage.removeItem(STORED_USER_KEY)
    }
}