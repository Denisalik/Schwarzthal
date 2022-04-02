import { actions as albums } from "./albums";
import { actions as songs } from "./songs";

export const actions = {
  ...albums,
  ...songs,
};
