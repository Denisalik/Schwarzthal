import { actions as albums } from "./albums";
import { actions as songs } from "./songs";
import { actions as history } from "./history";

export const actions = {
  ...albums,
  ...songs,
  ...history,
};
