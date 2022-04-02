import { Albums } from "../interfaces/Entities";
import { ActionStrings } from "../actionTypes";

export const actions = {
  fetchAlbumsSuccess: (payload: Albums) => ({
    type: ActionStrings.FETCHALBUMSSUCCESS,
    payload,
  }),
  fetchAlbumsError: (payload: string) => ({
    type: ActionStrings.FETCHALBUMSERROR,
    payload,
  }),
  fetchAlbums: () => ({
    type: ActionStrings.FETCHALBUMS,
  }),
};
