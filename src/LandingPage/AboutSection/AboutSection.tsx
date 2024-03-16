import { Box, Paper, Stack, Typography } from "@mui/material";
import * as commonStyles from "../common.styles";

export const AboutSection = () => (
  <Box sx={commonStyles.container}>
    <Stack
      direction={"row"}
      alignItems="center"
      gap={2}
      sx={{
        "@media (max-width: 900px)": {
          flexDirection: "column",
          alignItems: "center",
          gap: "15px",
        },
      }}
    >
      <Box
        component="img"
        src="./laptop.png"
        alt="Laptop"
        sx={{
          width: "500px",
          height: "500px",
          borderRadius: "25px",
          boxShadow: "30px 30px 30px rgba(0, 0, 0, 0.15)",
          borderWidth: "2px",
          borderStyle: "solid",
          borderColor: "text.primary",
          "@media (max-width: 900px)": {
            width: "250px",
            height: "250px",
          },
        }}
      />
      <Paper
        style={{
          padding: "2rem",
          marginTop: "1rem",
          boxShadow: "30px 30px 30px rgba(0, 0, 0, 0.15)",
        }}
      >
        <Typography variant="h3" gutterBottom fontWeight="bold" id="about">
          About me
        </Typography>
        <Typography
          variant="h5"
          color="text.secondary"
          fontWeight="bold"
          gutterBottom
        >
          A dedicated Front-end Developer{" "}
          <Box
            component="br"
            sx={{
              "@media(max-width: 900px)": {
                display: "none",
              },
            }}
          />
          based in Atlanta, GA 📍
        </Typography>
        <Typography variant="body1">
          Hello, I am a passionate Software Engineer specializing in front-end
          web development. With over seven years of experience in the tech
          industry, I've dedicated my career to crafting intuitive and
          responsive web applications that enhance user experiences and drive
          business success. <br />
          <br />
          I started programming in my Programming 1 class in high school and
          feel in love. I graduated from Missouri State University with a major
          in Software Development and a minor in Web Application Development.
          Since then, I've honed my skills in a variety of technologies,
          including React, Node.js, Ruby on Rails, and Apollo GraphQL, to name a
          few. <br />
          <br />
          Throughout my career, I've had the privilege of working with talented
          teams at companies like Brinks, J.E. Dunn Construction, and Cerner
          Corporation. In these roles, I've led initiatives to develop modern
          React websites, created and maintained construction management
          applications, and developed medical coding software, all while
          embracing Agile methodologies and fostering collaborative
          environments. <br />
          <br />
          I'm excited to continue pushing the boundaries of web development and
          making a positive impact in the tech industry. Let's connect if you're
          looking for a dedicated and innovative software engineer for your web
          projects!
        </Typography>
      </Paper>
    </Stack>
  </Box>
);
