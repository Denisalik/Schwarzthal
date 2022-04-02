import { ActionStrings } from "../actionTypes";
import { Songs } from "../interfaces/Entities";

export const actions = {
  fetchSongsSuccess: (payload: Songs) => ({
    type: ActionStrings.FETCHSONGSSUCCESS,
    payload,
  }),
  fetchSongsError: (payload: string) => ({
    type: ActionStrings.FETCHSONGSERROR,
    payload,
  }),
  fetchSongs: () => ({
    type: ActionStrings.FETCHSONGS,
  }),
};
