import { Albums } from "../interfaces/Entities";
import { ActionStrings, ActionTypes } from "../actionTypes";

interface AlbumsState {
  albums: Albums;
  error: string;
  loading: boolean;
}

const initialState: AlbumsState = {
  albums: {
    resultCount: 0,
    results: [],
  },
  error: "",
  loading: false,
};

export const reducer = (
  action: ActionTypes,
  state: AlbumsState = initialState,
): AlbumsState => {
  switch (action.type) {
    case ActionStrings.FETCHALBUMS:
      return { ...state, loading: true };
    case ActionStrings.FETCHALBUMSSUCCESS:
      return { ...state, albums: action.payload, loading: false, error: "" };
    case ActionStrings.FETCHALBUMSERROR:
      return { ...state, error: action.payload, loading: false };
    default:
      return state;
  }
};
