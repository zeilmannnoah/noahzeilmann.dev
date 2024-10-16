import { Box, Paper, Stack, Typography } from "@mui/material";
import * as commonStyles from "../common.styles";

export const AboutSection = () => (
  <Box sx={commonStyles.section}>
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
          A dedicated Senior Front-end Engineer{" "}
          <Box
            component="br"
            sx={{
              "@media(max-width: 900px)": {
                display: "none",
              },
            }}
          />
          based in Kansas City, MO 📍
        </Typography>
        <Typography variant="body1">
          Hello, I’m a Senior Frontend Engineer with over seven years of
          experience leading the development of high-performance, scalable web
          applications. My career has been defined by a passion for creating
          intuitive, responsive user interfaces and a commitment to delivering
          solutions that drive business growth and enhance user experiences.{" "}
          <br />
          <br />
          My journey into programming began in high school, and that early spark
          led me to pursue a degree in Software Development with a focus on Web
          Application Development at Missouri State University. Since then, I’ve
          worked extensively with modern technologies like React, Next.js,
          GraphQL, and Node.js to build everything from enterprise applications
          to mission-critical internal tools. <br />
          <br />
          Over the years, I’ve led key frontend initiatives at companies like
          Brinks, J.E. Dunn Construction, and Cerner Corporation, where I
          introduced frontend best practices, transformed legacy systems, and
          mentored development teams. I thrive in Agile environments, where I
          can contribute to both technical strategy and hands-on development,
          ensuring that the solutions we build are not only innovative but also
          maintainable and scalable. <br />
          <br />
          I’m always looking for opportunities to push the boundaries of what’s
          possible in web development, whether it’s through improving frontend
          architectures, fostering team collaboration, or mentoring the next
          generation of developers. If you’re seeking a senior engineer with a
          deep understanding of frontend technologies and a track record of
          delivering impactful solutions, let’s connect.
        </Typography>
      </Paper>
    </Stack>
  </Box>
);
