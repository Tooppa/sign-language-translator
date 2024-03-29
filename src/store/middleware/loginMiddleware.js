import { createOrFindUser } from "../../endpoints/users";
import {
  ACTION_LOGIN_ATTEMPT,
  ACTION_LOGIN_SUCCESS,
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
          dispatch(loginSuccessAction());
          dispatch(sessionSetAction(foundUser));
        } else {
          console.error(`User not found with ${action.payload}`);
        }
      } catch (error) {
        dispatch(loginErrorAction(error));
        console.error(error);
      }
    }
  };
