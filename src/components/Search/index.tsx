import React from "react";
import {
  CircularProgress,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
  Typography,
} from "@mui/material";
import { useDebounce } from "use-debounce";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { useAppActions, useAppSelector } from "../../lib/hooks";
import { Song } from "../../redux/interfaces/Entities";

const Search: React.FC = () => {
  const [songName, setSongName] = React.useState("");
  const { fetchSongs, likeSong, dislikeSong } = useAppActions();
  const { songs, error, loading } = useAppSelector((state) => state.songs);
  const history = useAppSelector((state) => state.history);
  const [debouncedText] = useDebounce(songName, 1000);
  React.useEffect(() => {
    fetchSongs(debouncedText);
  }, [debouncedText]);

  const headers = [
    "",
    "Collection",
    "Artist",
    "Track",
    "Collection Price",
    "Track Price",
    "Release Date",
    "Disc Number",
    "Track Number",
    "Track Time",
    "Country",
    "Genre",
  ];
  const msToTime = (s: number) => {
    const ms = s % 1000;
    s = (s - ms) / 1000;
    const secs = s % 60;
    s = (s - secs) / 60;
    const mins = s % 60;
    const hrs = (s - mins) / 60;
    return hrs === 0 ? `${mins}:${secs}` : `${hrs}:${mins}:${secs}`;
  };
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSongName(event.target.value);
  };
  const findLikes = (song: Song) =>
    history.songs.find((like: Song) => song.trackId === like.trackId);
  return (
    <>
      <TextField
        color="primary"
        fullWidth
        value={songName}
        onChange={handleChange}
        variant="outlined"
        helperText="Please enter song name"
        sx={{ padding: 4 }}
      />
      {loading ? (
        <CircularProgress />
      ) : (
        <TableContainer component={Paper}>
          <Table aria-label="simple table">
            <TableHead sx={{ background: "#AAB7B8" }}>
              <TableRow>
                {headers.map((cell, index) => (
                  <TableCell key={cell} align={index ? "center" : undefined}>
                    <Typography sx={{ fontWeight: 600 }}>{cell}</Typography>
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {songs.results.map((row: Song) => (
                <TableRow
                  key={row.trackId}
                  sx={{
                    "&:nth-of-type(odd)": {
                      background: "#EAECEE",
                    },
                    "&:last-child td, &:last-child th": { border: 0 },
                  }}
                >
                  <TableCell align="left">
                    {findLikes(row) === undefined ? (
                      <FavoriteBorderIcon
                        onClick={() => likeSong(row)}
                        sx={{ cursor: "pointer" }}
                        fontSize="large"
                      />
                    ) : (
                      <FavoriteIcon
                        onClick={() => dislikeSong(row)}
                        sx={{ cursor: "pointer" }}
                        fontSize="large"
                      />
                    )}
                  </TableCell>
                  <TableCell align="center">
                    <Typography>{row.collectionName}</Typography>
                  </TableCell>
                  <TableCell align="center">
                    <Typography>{row.artistName}</Typography>
                  </TableCell>
                  <TableCell align="center">
                    <Typography>{row.trackName}</Typography>
                  </TableCell>
                  <TableCell align="center">
                    <Typography>{`${row.collectionPrice} ${row.currency}`}</Typography>
                  </TableCell>
                  <TableCell align="center">
                    <Typography>{`${row.trackPrice} ${row.currency}`}</Typography>
                  </TableCell>
                  <TableCell align="center">
                    <Typography>{new Date(row.releaseDate).toDateString()}</Typography>
                    {/* todo */}
                  </TableCell>
                  <TableCell align="center">
                    <Typography>{`${row.discNumber}/${row.discCount}`}</Typography>
                  </TableCell>
                  <TableCell align="center">
                    <Typography>{`${row.trackNumber}/${row.trackCount}`}</Typography>
                  </TableCell>
                  <TableCell align="center">
                    <Typography>{msToTime(row.trackTimeMillis)}</Typography>
                  </TableCell>
                  <TableCell align="center">
                    <Typography>{row.country}</Typography>
                  </TableCell>
                  <TableCell align="center">
                    <Typography>{row.primaryGenreName}</Typography>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      )}
    </>
  );
};

export default Search;
