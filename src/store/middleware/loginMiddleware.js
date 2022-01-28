import { createOrFindUser } from "../../endpoints/users";
import {
  ACTION_LOGIN_ATTEMPT,
  loginErrorAction,
  loginSuccessAction,
} from "../actions/loginActions";

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

        const foundUsers = await createOrFindUser(action.payload);
        // When we have created or found an foundUsers
        if (foundUsers.length > 0 && foundUsers[0] !== undefined) {
          //  Dispatch it to our requesting component via the reducer
          // Always the take first index from found users
          // Backend returns all users matching the username variable EXACTLY.
          // This shouldn't be an issue since only one user per username is allowed
          dispatch(loginSuccessAction(foundUsers[0]));
        } else {
          console.error(`User not found with ${action.payload}`);
        }
      } catch (error) {
        dispatch(loginErrorAction(error));
      }
    }
  };
