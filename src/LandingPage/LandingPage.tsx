import { Box, Container } from "@mui/material";
import { AboutSection } from "./AboutSection/AboutSection";
import { ContactSection } from "./ContactSection/ContactSection";
import { HeroSection } from "./HeroSection/HeroSection";
import { AppBar } from "./AppBar/AppBar";
import { ResumeSection } from "./ResumeSection/ResumeSection";
import * as styles from "./common.styles";

export const LandingPage = () => (
  <Box component="div" sx={styles.container}>
    <AppBar />
    <Container maxWidth="lg">
      <HeroSection />
      <AboutSection />
      <ResumeSection />
      <ContactSection />
    </Container>
  </Box>
);
