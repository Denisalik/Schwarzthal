import { Songs } from "../interfaces/Entities";
import { ActionStrings, ActionTypes } from "../actionTypes";

interface SongsState {
  songs: Songs;
  error: string;
  loading: boolean;
}

const initialState: SongsState = {
  songs: {
    resultCount: 0,
    results: [],
  },
  error: "",
  loading: false,
};

export const reducer = (
  action: ActionTypes,
  state: SongsState = initialState,
): SongsState => {
  switch (action.type) {
    case ActionStrings.FETCHSONGS:
      return { ...state, loading: true };
    case ActionStrings.FETCHSONGSSUCCESS:
      return { ...state, songs: action.payload, loading: false, error: "" };
    case ActionStrings.FETCHSONGSERROR:
      return { ...state, error: action.payload, loading: false };
    default:
      return state;
  }
};
