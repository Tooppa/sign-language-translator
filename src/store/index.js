import { createStore, applyMiddleware } from "redux";
import appReducers from "./reducers";
import { loginMiddleware } from "./middleware/loginMiddleware";
import { composeWithDevTools } from "redux-devtools-extension";
import { sessionMiddleware } from "./middleware/sessionMiddleware";

export const store = createStore(
  appReducers,
  composeWithDevTools(applyMiddleware(loginMiddleware, sessionMiddleware))
);

export default store;
