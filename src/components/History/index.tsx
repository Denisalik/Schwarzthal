import React from "react";
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { useAppActions, useAppSelector } from "../../lib/hooks";
import { Song } from "../../redux/interfaces/Entities";

const History: React.FC = () => {
  const { dislikeSong } = useAppActions();
  const history = useAppSelector((state) => state.history);
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
  return (
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
          {history.songs
            .sort((a, b) => a.createDate.getTime() - b.createDate.getTime())
            .map((row: Song) => (
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
                  <FavoriteIcon
                    onClick={() => dislikeSong(row)}
                    sx={{ cursor: "pointer" }}
                    fontSize="large"
                  />
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
  );
};

export default History;
