import CssBaseline from "@mui/material/CssBaseline";
import { LandingPage } from "./LandingPage/LandingPage";
import { ThemeProvider } from "./ThemeProvider/ThemeProvider";

export const App = () => (
  <ThemeProvider>
    <CssBaseline />
    <LandingPage />
  </ThemeProvider>
);
