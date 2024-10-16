import { Box, Typography } from "@mui/material";
import * as commonStyles from "../common.styles";

export const ResumeSection = () => (
  <Box sx={commonStyles.section}>
    <Typography variant="h3" gutterBottom sx={commonStyles.header} id="resume">
      Resume
    </Typography>
    <Box
      component={"iframe"}
      src="./Noah's Resume.pdf"
      title="Noah's Resume"
      sx={{ width: "100%", height: "100%" }}
    />
  </Box>
);
