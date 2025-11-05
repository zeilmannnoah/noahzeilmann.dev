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
          based in Bellevue, WA 📍
        </Typography>
        <Typography variant="body1">
          Hello, I’m a Senior Frontend Engineer with 8+ years of experience building 
          high-performance, scalable web applications. I specialize in modern 
          JavaScript ecosystems — particularly React, TypeScript, Next.js, GraphQL, 
          and Node.js — and I’m passionate about crafting intuitive, responsive 
          experiences that deliver real business impact. <br />
          <br />
          My path in software began in high school and continued through my Software 
          Development degree at Missouri State University, where I focused on web 
          application development. Since then, I’ve built solutions across industries 
          — including healthcare, fintech, retail technology, and construction — 
          working at organizations such as Centene, Brink’s (Balance Innovations), 
          JE Dunn Construction, and Cerner (Oracle Health). <br />
          <br />
          Throughout my career, I’ve led modernization efforts from legacy systems 
          to modern React architectures, established component libraries and 
          frontend standards, introduced automated testing practices, and mentored 
          engineers to grow high-performing teams. I enjoy balancing architectural 
          thinking with hands-on engineering, helping teams move quickly without 
          compromising quality or maintainability. <br />
          <br />
          I thrive in collaborative, product-focused environments where engineering 
          excellence and thoughtful design come together to solve meaningful problems. 
          Today, I’m especially excited about the future of frontend engineering — 
          including AI-enhanced user experiences, intelligent interfaces, and systems 
          that scale effortlessly across platforms and brands. <br />
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
