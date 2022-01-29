export const ACTION_SESSION_INIT = '[session] ATTEMPT';
export const ACTION_SESSION_SET = "[session] SET";
export const ACTION_SESSION_LOGOUT = "[session] LOGOUT";

export const sessionInitAction = () => ({
    type: ACTION_SESSION_INIT,
});

export const sessionSetAction = (session) => ({
    type: ACTION_SESSION_SET,
    payload: session
});

export const sessionLogoutAction = () => ({
    type: ACTION_SESSION_LOGOUT,
})