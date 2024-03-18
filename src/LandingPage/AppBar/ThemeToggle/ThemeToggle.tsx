import { DarkMode, LightMode } from "@mui/icons-material";
import { ToggleButton, ToggleButtonGroup } from "@mui/material";
import { useContext } from "react";
import { ThemeContext } from "../../../ThemeProvider/ThemeProvider";

export const ThemeToggle = () => {
  const themeContext = useContext(ThemeContext);
  const toggleTheme = (_event: any, themeMode: "light" | "dark") =>
    themeMode && themeContext?.setThemeMode(themeMode);

  return (
    <ToggleButtonGroup
      onChange={toggleTheme}
      value={themeContext?.themeMode}
      exclusive
    >
      <ToggleButton value={"light"}>
        <LightMode />
      </ToggleButton>
      <ToggleButton value={"dark"}>
        <DarkMode />
      </ToggleButton>
    </ToggleButtonGroup>
  );
};
