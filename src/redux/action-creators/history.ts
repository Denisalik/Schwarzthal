import { Dispatch } from "redux";
import { actions } from "../actions";
import { Song } from "../interfaces/Entities";

export const likeSong = (song: Song) => async (dispatch: Dispatch) => {
  dispatch(actions.likeSong(song));
};
export const dislikeSong = (song: Song) => async (dispatch: Dispatch) => {
  dispatch(actions.dislikeSong(song));
};
