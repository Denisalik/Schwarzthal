import { ActionStrings } from "../actionTypes";
import { Song} from "../interfaces/Entities";

export const actions = {
  likeSong: (payload: Song) => ({
    type: ActionStrings.LIKESONG,
    payload,
  }),
  dislikeSong: (payload: Song) => ({
    type: ActionStrings.DISLIKESONG,
    payload,
  }),
};
