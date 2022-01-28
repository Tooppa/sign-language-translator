import { combineReducers } from "redux";
import { loginReducer } from './loginReducer'

const appReducers = combineReducers({
    login: loginReducer
});

export default appReducers;
