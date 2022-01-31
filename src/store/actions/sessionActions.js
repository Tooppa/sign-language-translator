export const ACTION_SESSION_INIT = '[session] INIT';
export const ACTION_SESSION_SET = "[session] SET";
export const ACTION_SESSION_LOGOUT = "[session] LOGOUT";
export const ACTION_UPDATE_TRASLATION = "[session] UPDATE TRANSLATION";
export const ACTION_CLEAR_TRASLATIONS = "[session] CLEAR TRANSLATIONS";

export const sessionInitAction = () => ({
    type: ACTION_SESSION_INIT,
});

export const sessionSetAction = (user) => ({
    type: ACTION_SESSION_SET,
    payload: user
});

export const sessionLogoutAction = () => ({
    type: ACTION_SESSION_LOGOUT,
})

export const updateTranslationsAction = (user, newTranslation) => ({
  type: ACTION_UPDATE_TRASLATION,
  payload: {
    user: user,
    newTranslation: newTranslation,
  },
});

export const clearTranslationsAction = (user) => ({
  type: ACTION_CLEAR_TRASLATIONS,
  payload: user,
});