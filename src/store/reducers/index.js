import { combineReducers } from "redux";
import { loginReducer } from './loginReducer'
import { sessionReducer } from "./sessionReducer";

const appReducers = combineReducers({
    login: loginReducer,
    session: sessionReducer
});

export default appReducers;
