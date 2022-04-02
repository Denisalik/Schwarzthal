import axios from "axios";
import { AppDispatch } from "../store";
import { actions } from "../actions";
import { Songs } from "../interfaces/Entities";
import { searchForSong } from "../api";

export const fetchSongs =
  (term: string, limit: number = 50) =>
  async (dispatch: AppDispatch) => {
    dispatch(actions.fetchSongs());
    return axios
      .get<Songs>(searchForSong(term, limit))
      .then((response) => {
        dispatch(actions.fetchSongsSuccess(response.data));
      })
      .catch((e) => {
        actions.fetchSongsError(e.message);
      });
  };
