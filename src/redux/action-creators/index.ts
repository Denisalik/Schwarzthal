import * as albums from "./albums";
import * as songs from "./songs";

export const actionCreators = {
  ...songs,
  ...albums,
};
