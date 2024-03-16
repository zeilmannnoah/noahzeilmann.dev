import {
  AppBar as MuAppBar,
  Button,
  Toolbar,
  Typography,
  useMediaQuery,
} from "@mui/material";
import * as styles from "./AppBar.styles";
import { ThemeToggle } from "./ThemeToggle/ThemeToggle";
import { NavMenu } from "./NavMenu/NavMenu";

export const AppBar = () => {
  const isLargeDevice = useMediaQuery("(min-width: 900px)");

  return (
    <MuAppBar position="sticky" sx={{ backgroundColor: "background.default" }}>
      <Toolbar>
        <Typography
          variant="h6"
          component="div"
          color="text.primary"
          flexGrow={1}
          fontWeight="bold"
        >
          NoahZeilmann.dev
        </Typography>
        {isLargeDevice ? (
          <>
            <Button sx={styles.navBtn} href="#home">
              Home
            </Button>
            <Button sx={styles.navBtn} href="#about">
              About
            </Button>
            <Button sx={styles.navBtn} href="#resume">
              Resume
            </Button>
            <Button sx={styles.navBtn} href="#contact">
              Contact
            </Button>
            <ThemeToggle />
          </>
        ) : (
          <>
            <ThemeToggle />
            <NavMenu />
          </>
        )}
      </Toolbar>
    </MuAppBar>
  );
};
