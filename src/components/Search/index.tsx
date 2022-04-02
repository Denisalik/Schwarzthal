import React from "react";
import { Autocomplete, CircularProgress, TextField } from "@mui/material";
import { useAppActions, useAppSelector } from "../../lib/hooks";

const Search: React.FC = () => {
  const [open, setOpen] = React.useState(false);
  const { fetchSongs } = useAppActions();
  const { songs, error, loading } = useAppSelector((state) => state.songs);
  const options = open ? songs.results.map((song) => song.trackName) : [];
  // "artistName": "Jack Johnson",
  //   "collectionName": "Jack Johnson and Friends: Sing-A-Longs and Lullabies for the Film Curious George",
  //   "trackName": "Upside Down",

  React.useEffect(() => {}, [loading]);

  return (
    <Autocomplete
      sx={{ width: 300 }}
      open={open}
      onOpen={() => {
        setOpen(true);
      }}
      onClose={() => {
        setOpen(false);
      }}
      isOptionEqualToValue={(option, value) => option === value}
      getOptionLabel={(option) => option}
      options={options}
      loading={loading}
      renderInput={(params) => (
        <TextField
          {...params}
          InputProps={{
            ...params.InputProps,
            endAdornment: (
              <>
                {loading ? <CircularProgress color="inherit" size={20} /> : null}
                {params.InputProps.endAdornment}
              </>
            ),
          }}
        />
      )}
    />
  );
};

export default Search;
