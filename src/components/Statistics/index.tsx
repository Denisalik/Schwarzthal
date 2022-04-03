import React from "react";
import { Network } from "vis-network/peer/esm/vis-network";
import { DataSet } from "vis-data/peer/esm/vis-data";

import { useAppActions, useAppSelector } from "../../lib/hooks";
import { Album } from "../../redux/interfaces/Entities";

const Statistics: React.FC = () => {
  const graph = React.useRef() as React.MutableRefObject<HTMLDivElement>;
  const { albums, loading, error } = useAppSelector((state) => state.albums);
  const history = useAppSelector((state) => state.history);
  const { fetchAlbums } = useAppActions();
  React.useEffect(() => {
    let artists: { id: number; count: number }[] = [];
    history.songs.forEach((song) => {
      const index = artists.findIndex((art) => art.id === song.artistId);
      if (index === -1) artists.push({ id: song.artistId, count: 1 });
      else artists[index].count += 1;
    });
    artists = artists.sort((a, b) => b.count - a.count).slice(0, 5);
    fetchAlbums(artists.map((artist) => artist.id));
  }, [history.songs]);
  React.useEffect(() => {
    if (albums.length) {
      let allAlbums: Album[] = [];
      albums.map((album) => album.results).forEach((album) => allAlbums.push(...album));
      allAlbums = allAlbums.filter(
        (album) =>
          album.wrapperType === "artist" || (album.trackCount && album.trackCount > 1),
      );

      // album with 2 artists that connects to Zach, but not Jack

      // amgArtistId: 649174
      // artistId: 79223185
      // artistName: "Zach Gill & Jack Johnson"
      // collectionId: 1445304981
      // collectionName: "Family - Single"
      // collectionType: "Album"
      // releaseDate: "2008-01-01T08:00:00Z"
      // trackCount: 2

      const nodes = new DataSet([
        ...allAlbums.map((album) =>
          album.wrapperType === "artist"
            ? {
                fixed: true,
                id: album.artistId,
                label: album.artistName,
              }
            : {
                id: album.collectionId,
                label: album.collectionName,
              },
        ),
      ]);
      const edges = new DataSet(
        allAlbums.map((album, index) => ({
          to: album.collectionId,
          from: album.artistId,
          id: index,
        })),
      );
      const container = graph.current;
      const data = {
        nodes,
        edges,
      };
      const options = {
        physics: {
          barnesHut: {
            springConstant: 0,
            avoidOverlap: 1,
          },
        },
      };

      const network = new Network(container, data, options);
    }
  }, [albums]);

  return (
    <div
      ref={graph}
      style={{
        height: "90vh",
        border: "1px solid lightgray",
      }}
    />
  );
};

export default Statistics;
