import { Container, Stack } from "@mui/material";
import { AboutSection } from "./AboutSection/AboutSection";
import { ContactSection } from "./ContactSection/ContactSection";
import { HeroSection } from "./HeroSection/HeroSection";
import { AppBar } from "./AppBar/AppBar";
import "./LandingPage.css";
import { ResumeSection } from "./ResumeSection/ResumeSection";

export const LandingPage = () => (
  <div>
    <AppBar />
    <Container maxWidth="lg">
      <Stack gap={5}>
        <HeroSection />
        <AboutSection />
        <ResumeSection />
        <ContactSection />
      </Stack>
    </Container>
  </div>
);
