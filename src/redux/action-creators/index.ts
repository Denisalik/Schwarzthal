import * as albums from "./albums";
import * as songs from "./songs";
import * as history from "./history";

export const actionCreators = {
  ...songs,
  ...albums,
  ...history,
};
