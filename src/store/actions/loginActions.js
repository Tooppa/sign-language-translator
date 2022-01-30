export const ACTION_LOGIN_ATTEMPT = "[login] ATTEMPT";
export const ACTION_LOGIN_SUCCESS = "[login] SUCCESS";
export const ACTION_LOGIN_ERROR = "[login] ERROR";
export const ACTION_UPDATE_TRASLATION = "[login] UPDATE"
export const ACTION_CLEAR_TRASLATIONS = "[login] CLEAR";

export const loginAttemptAction = (username) => ({
  type: ACTION_LOGIN_ATTEMPT,
  payload: username,
});

export const loginSuccessAction = (user) => ({
  type: ACTION_LOGIN_SUCCESS,
  payload: user,
});

export const loginErrorAction = (error) => ({
  type: ACTION_LOGIN_ERROR,
  payload: error,
});

export const updateTranslationsAction = (user, newTranslation) => ({
  type: ACTION_UPDATE_TRASLATION,
  payload: {
    user: user,
    newTranslation: newTranslation,
  },
});

export const clearTranslationsAction = (user) => ({
  type: ACTION_CLEAR_TRASLATIONS,
  payload: user
});
