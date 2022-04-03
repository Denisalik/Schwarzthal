import { Albums, Song, Songs } from "./interfaces/Entities";

export enum ActionStrings {
  FETCHSONGSSUCCESS = "FETCHSONGSSUCCESS",
  FETCHSONGSERROR = "FETCHSONGSERROR",
  FETCHSONGS = "FETCHSONGS",

  FETCHALBUMS = "FETCHALBUMS",
  FETCHALBUMSSUCCESS = "FETCHALBUMSSUCCESS",
  FETCHALBUMSERROR = "FETCHALBUMSERROR",
  LIKESONG = "LIKESONG",
  DISLIKESONG = "DISLIKESONG",
}

interface fetchAlbums {
  type: ActionStrings.FETCHALBUMS;
}

interface fetchAlbumsSuccess {
  type: ActionStrings.FETCHALBUMSSUCCESS;
  payload: Albums[];
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

interface likeSong {
  type: ActionStrings.LIKESONG;
  payload: Song;
}

interface dislikeSong {
  type: ActionStrings.DISLIKESONG;
  payload: Song;
}

export type ActionTypes =
  | fetchSongs
  | fetchSongsSuccess
  | fetchSongsError
  | fetchAlbums
  | fetchAlbumsError
  | fetchAlbumsSuccess
  | likeSong
  | dislikeSong;
