import { Albums } from "../interfaces/Entities";
import { ActionStrings, ActionTypes } from "../actionTypes";
import { Reducer } from "redux";

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
  state = initialState,
  action: ActionTypes,
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
