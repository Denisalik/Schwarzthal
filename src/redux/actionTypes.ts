import { Albums, Songs } from "./interfaces/Entities";

export enum ActionStrings {
  FETCHSONGSSUCCESS = "FETCHSONGSSUCCESS",
  FETCHSONGSERROR = "FETCHSONGSERROR",
  FETCHSONGS = "FETCHSONGS",

  FETCHALBUMS = "FETCHALBUMS",
  FETCHALBUMSSUCCESS = "FETCHALBUMSSUCCESS",
  FETCHALBUMSERROR = "FETCHALBUMSERROR",
}

interface fetchAlbums {
  type: ActionStrings.FETCHALBUMS;
}

interface fetchAlbumsSuccess {
  type: ActionStrings.FETCHALBUMSSUCCESS;
  payload: Albums;
}

interface fetchAlbumsError {
  type: ActionStrings.FETCHALBUMSERROR;
  payload: string;
}

interface fetchSongsSuccess {
  type: ActionStrings.FETCHSONGSSUCCESS;
  payload: Songs;
}

interface fetchSongsError {
  type: ActionStrings.FETCHSONGSERROR;
  payload: string;
}

interface fetchSongs {
  type: ActionStrings.FETCHSONGS;
}

export type ActionTypes =
  | fetchSongs
  | fetchSongsSuccess
  | fetchSongsError
  | fetchAlbums
  | fetchAlbumsError
  | fetchAlbumsSuccess;
