import { ThemeOptions, createTheme } from "@mui/material/styles";

const commonTheme: ThemeOptions = {
  typography: {
    fontFamily: "Roboto, sans-serif",
  },
};

export const lightTheme = createTheme({
  ...commonTheme,
  palette: {
    mode: "light",
    primary: {
      main: "#007bff",
    },
    text: {
      primary: "rgb(0 0 0 / .9)",
    },
    background: {
      default: "#fff",
    },
  },
});

export const darkTheme = createTheme({
  ...commonTheme,
  palette: {
    mode: "dark",
    primary: {
      main: "#007bff",
    },
    text: {
      primary: "#f3f6f9",
    },
    background: {
      default: "#101418",
    },
  },
});
