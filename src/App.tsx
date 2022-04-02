import React from "react";
import { Provider } from "react-redux";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { BrowserRouter } from "react-router-dom";
import theme from "./theme/theme";
import { store } from "./redux/store";

function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <BrowserRouter></BrowserRouter>
      </ThemeProvider>
    </Provider>
  );
}

export default App;
