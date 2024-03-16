import { useMediaQuery, ThemeProvider as MuThemeProvider } from "@mui/material";
import { ReactNode, createContext, useState } from "react";
import { darkTheme, lightTheme } from "./theme";

export const ThemeContext = createContext<{
  themeMode: "light" | "dark";
  setThemeMode: (themeMode: "light" | "dark") => void;
} | null>(null);

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const prefersLightMode = useMediaQuery("(prefers-color-scheme: light)");
  const [themeMode, setThemeMode] = useState<"light" | "dark">(
    prefersLightMode ? "light" : "dark"
  );
  return (
    <ThemeContext.Provider value={{ themeMode, setThemeMode }}>
      <MuThemeProvider theme={themeMode === "light" ? lightTheme : darkTheme}>
        {children}
      </MuThemeProvider>
    </ThemeContext.Provider>
  );
};
