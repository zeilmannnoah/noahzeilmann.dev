import { SxProps } from "@mui/material";

export const section: SxProps = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  gap: 2,
  scrollSnapAlign: "start",
  minHeight: "100vh",
  paddingBottom: "100px",
};

export const container: SxProps = {
  scrollSnapType: "y mandatory",
  scrollBehavior: "smooth",
  overflowY: "scroll",
  height: "100vh",
  scrollPaddingTop: "64px",
  scrollPaddingBlockEnd: "300px",
};

export const header: SxProps = { fontWeight: "bold" };

export const resume: SxProps = {
  width: "100%",
  height: "100%",
  minHeight: "80vh",
};
