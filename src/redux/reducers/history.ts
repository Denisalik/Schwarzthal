import { Song } from "../interfaces/Entities";
import { ActionStrings, ActionTypes } from "../actionTypes";

interface HistoryState {
  songs: Song[];
}

const initialState: HistoryState = {
  songs: [],
};

export const reducer = (
  state: HistoryState = initialState,
  action: ActionTypes,
): HistoryState => {
  switch (action.type) {
    case ActionStrings.LIKESONG:
      return { ...state, songs: [...state.songs, action.payload] };
    case ActionStrings.DISLIKESONG:
      return {
        ...state,
        songs: state.songs.filter((song) => song.trackId !== action.payload.trackId),
      };
    default:
      return state;
  }
};
