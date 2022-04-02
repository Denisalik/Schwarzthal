import axios from "axios";
import { Dispatch } from "redux";
import { actions } from "../actions";
import { Albums } from "../interfaces/Entities";
import { searchByArtist } from "../api";

export const fetchAlbums =
  (id: number, limit: number = 50) =>
  async (dispatch: Dispatch) => {
    dispatch(actions.fetchAlbums());
    return axios
      .get<Albums>(searchByArtist(id, limit))
      .then((response) => {
        dispatch(actions.fetchAlbumsSuccess(response.data));
      })
      .catch((e) => {
        actions.fetchAlbumsError(e.message);
      });
  };
