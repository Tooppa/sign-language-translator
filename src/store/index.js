import { createStore, applyMiddleware } from "redux";
import appReducers from "./reducers";
import { loginMiddleware } from './middleware/loginMiddleware'
import { composeWithDevTools } from "redux-devtools-extension";

export const store = createStore(
  appReducers,
  composeWithDevTools(applyMiddleware(loginMiddleware))
);

export default store;