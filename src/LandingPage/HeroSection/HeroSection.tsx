import {
  Avatar,
  Box,
  Divider,
  IconButton,
  Stack,
  Typography,
} from "@mui/material";
import { TypingAnimation } from "./TypingAnimation/TypingAnimation";
import { GitHub, LinkedIn } from "@mui/icons-material";
import { useContext } from "react";
import { ThemeContext } from "../../ThemeProvider/ThemeProvider";
import * as commonStyles from "../common.styles";
import * as styles from "./HeroSection.styles";

export const HeroSection = () => {
  const themeContext = useContext(ThemeContext);

  return (
    <Box sx={commonStyles.section}>
      <Stack
        direction="row"
        gap={10}
        sx={{
          "@media (max-width: 900px)": {
            flexDirection: "column-reverse",
            alignItems: "center",
            gap: "15px",
          },
        }}
      >
        <Stack direction="column" gap={2} justifyContent="center">
          <Typography
            variant="h3"
            component="h1"
            textAlign="left"
            fontWeight="bold"
            id="home"
            gutterBottom
            sx={{
              "@media (max-width: 900px)": {
                textAlign: "center",
              },
            }}
          >
            Senior <br />
            Software <br />
            Engineer 🧑🏻‍💻
          </Typography>
          <Typography variant="h5" component="h2" color="text.secondary">
            <TypingAnimation />
          </Typography>
          <Stack direction="row" gap={2}>
            <IconButton
              aria-label="linkedin"
              target="_blank"
              href="https://www.linkedin.com/in/noah-zeilmann/"
            >
              <LinkedIn />
            </IconButton>
            <IconButton
              aria-label="github"
              target="_blank"
              href="https://github.com/zeilmannnoah/"
            >
              <GitHub />
            </IconButton>
          </Stack>
        </Stack>
        <Avatar
          src="./headshot2.jpeg"
          sx={{
            width: 300,
            height: 300,
            marginTop: 2,
            borderWidth: "2px",
            borderStyle: "solid",
            borderColor: "text.primary",
            boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
            "@media (max-width: 900px)": {
              marginLeft: "0",
            },
          }}
        />
      </Stack>
      <Stack
        direction="row"
        gap={2}
        marginTop={2}
        alignItems={"center"}
        sx={{
          "@media(max-width: 900px)": {
            flexDirection: "column",
            alignItem: "center",
          },
        }}
      >
        <Typography variant="h6">Skilled in</Typography>
        <Divider
          orientation="vertical"
          sx={{
            "@media(max-width: 900px)": {
              display: "none",
            },
          }}
        />
        <Box
          component="img"
          alt="html & css"
          src={`https://skillicons.dev/icons?i=html,css&theme=${themeContext?.themeMode}`}
          sx={styles.skill}
        />
        <Divider
          orientation="vertical"
          sx={{
            "@media(max-width: 900px)": {
              display: "none",
            },
          }}
        />
        <Box
          component="img"
          alt="js & ts & cs & ruby"
          src={`https://skillicons.dev/icons?i=js,ts,cs,ruby&theme=${themeContext?.themeMode}`}
          sx={styles.skill}
        />
        <Divider
          orientation="vertical"
          sx={{
            "@media(max-width: 900px)": {
              display: "none",
            },
          }}
        />
        <Box
          component="img"
          alt="react & aws & firebase & graphql & dotnet"
          src={`https://skillicons.dev/icons?i=react,aws,firebase,graphql,dotnet&theme=${themeContext?.themeMode}`}
          sx={styles.skill}
        />
      </Stack>
    </Box>
  );
};
