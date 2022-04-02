import { combineReducers } from "redux";
import { reducer as albums } from "./albums";
import { reducer as songs } from "./songs";
import { reducer as history } from "./history";

export const rootReducer = combineReducers({
  albums,
  songs,
  history,
});
