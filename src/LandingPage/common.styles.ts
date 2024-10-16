import { SxProps } from "@mui/material";

export const section: SxProps = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  gap: 2,
  scrollSnapAlign: "start",
  height: "100vh",
  paddingBottom: "100px",
};

export const container: SxProps = {
  scrollSnapType: "y mandatory",
  scrollBehavior: "smooth",
  overflowY: "scroll",
  height: "100vh",
  scrollPaddingTop: "64px",
};

export const header: SxProps = { fontWeight: "bold" };
