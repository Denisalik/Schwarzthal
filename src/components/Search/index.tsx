import React from "react";
import { Autocomplete, CircularProgress, TextField } from "@mui/material";
import { useAppActions, useAppSelector } from "../../lib/hooks";

const Search: React.FC = () => {
  const [open, setOpen] = React.useState(false);
  const { fetchSongs } = useAppActions();
  const { songs, error, loading } = useAppSelector((state) => state.songs);
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
      // isOptionEqualToValue={(option, value) => option.title === value.title}
      // getOptionLabel={(option) => option.title}
      // options={options}
      // loading={loading}
      renderInput={(params) => (
        <TextField
          {...params}
          InputProps={{
            ...params.InputProps,
            endAdornment: (
              <React.Fragment>
                {/* {loading ? <CircularProgress color="inherit" size={20} /> : null} */}
                {params.InputProps.endAdornment}
              </React.Fragment>
            ),
          }}
        />
      )}
    />
  );
};

export default Search;
