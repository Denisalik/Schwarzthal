import React from "react";
import { Provider } from "react-redux";
import { AppBar, Box, CssBaseline, Grid, ThemeProvider, Toolbar } from "@mui/material";
import { BrowserRouter, Routes, Route, Navigate, Link } from "react-router-dom";
import theme from "./theme/theme";
import { store } from "./redux/store";
import { routes } from "./lib/routes";
import { pages, PathStrings } from "./lib/urls";

const App = () => (
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <CssBaseline />
        <Box p={2} minHeight="100vh" sx={{ background: "#F2F3F4" }}>
          <AppBar position="static" sx={{ background: "#2C3E50", marginBottom: "16px" }}>
            <Toolbar variant="dense">
              <Grid container justifyContent="flex-start" alignItems="center">
                {pages.map((page) => (
                  <Grid item key={page.path} xs={2}>
                    <Link
                      to={page.path}
                      style={{ textDecoration: "none", color: "#B7950B" }}
                    >
                      {page.name}
                    </Link>
                  </Grid>
                ))}
              </Grid>
            </Toolbar>
          </AppBar>
          <Routes>
            {routes.map((route) => (
              <Route key={route.path} path={route.path} element={<route.element />} />
            ))}
            <Route path="*" element={<Navigate to={PathStrings.SEARCH} />} />
          </Routes>
        </Box>
      </BrowserRouter>
    </ThemeProvider>
  </Provider>
);

export default App;
