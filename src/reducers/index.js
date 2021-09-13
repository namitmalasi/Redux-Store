import counter from "./counter";
import toggle from "./toggle";
import { combineReducers } from "redux";

export const rootReducer = combineReducers({
  counter,
  toggle,
});
