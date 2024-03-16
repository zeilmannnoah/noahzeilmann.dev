import { SxProps } from "@mui/material";

export const container: SxProps = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  gap: 2,
  scrollSnapAlign: "end",
  paddingBottom: "100px",
  "@media (min-width: 900px)": {
    height: "85vh",
  },
};

export const header: SxProps = { fontWeight: "bold" };
