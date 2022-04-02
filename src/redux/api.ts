const API = {
  URL: "https://itunes.apple.com",
  SEARCH: "search",
  LOOKUP: "lookup",
  ID: "id",
  TERM: "term",
  ENTITY: "entity",
  SONG: "song",
  ALBUM: "album",
  LIMIT: "limit",
};

// https://itunes.apple.com/lookup?id=909253&entity=album&limit=10
export const searchByArtist = (id: number, limit: number = 50) =>
  `${API.URL}/${API.LOOKUP}?${API.ID}=${id}&${API.ENTITY}=${API.ALBUM}&${API.LIMIT}=${limit}`;

// https://itunes.apple.com/search?term=jack+johnson&entity=song&limit=10
export const searchForSong = (term: string, limit: number = 50) =>
  `${API.URL}/${API.SEARCH}?${API.TERM}=${term.replaceAll(" ", "+")}&${API.ENTITY}=${
    API.SONG
  }&${API.LIMIT}=${limit}`;
