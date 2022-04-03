import axios from "axios";
import { Dispatch } from "redux";
import { actions } from "../actions";
import { Albums } from "../interfaces/Entities";
import { searchByArtist } from "../api";

export const fetchAlbums =
  (ids: number[], limit: number = 50) =>
  async (dispatch: Dispatch) => {
    dispatch(actions.fetchAlbums());
    const albums: Albums[] = [];
    // eslint-disable-next-line no-plusplus
    for (let i = 0; i < ids.length; i++) {
      // eslint-disable-next-line no-await-in-loop
      await axios
        .get<Albums>(searchByArtist(ids[i], limit))
        .then((response) => albums.push(response.data))
        .catch((e) => actions.fetchAlbumsError(e.message));
    }
    dispatch(actions.fetchAlbumsSuccess(albums));
    // return axios
    //   .get<Albums>(searchByArtist(id, limit))
    //   .then((response) => {
    //     dispatch(actions.fetchAlbumsSuccess(response.data));
    //   })
    //   .catch((e) => {
    //     actions.fetchAlbumsError(e.message);
    //   });
  };
