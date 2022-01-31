export const ACTION_LOGIN_ATTEMPT = "[login] ATTEMPT";
export const ACTION_LOGIN_SUCCESS = "[login] SUCCESS";
export const ACTION_LOGOUT = "[login] LOGOUT";
export const ACTION_LOGIN_ERROR = "[login] ERROR";

export const loginAttemptAction = (username) => ({
  type: ACTION_LOGIN_ATTEMPT,
  payload: username
});

export const loginSuccessAction = () => ({
  type: ACTION_LOGIN_SUCCESS
});

export const logoutAction = () => ({
  type: ACTION_LOGOUT,
});

export const loginErrorAction = (error) => ({
  type: ACTION_LOGIN_ERROR,
  payload: error,
});