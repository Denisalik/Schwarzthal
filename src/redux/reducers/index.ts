import { combineReducers } from "redux";
import { reducer as albums } from "./albums";
import { reducer as songs } from "./songs";

export default combineReducers({
  albums,
  songs,
});
