import { Box, Typography, IconButton, Stack, Link } from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import * as commonStyles from "../common.styles";
import * as styles from "./ContactSection.styles";

export const ContactSection = () => (
  <Box sx={commonStyles.section}>
    <Typography variant="h3" gutterBottom sx={commonStyles.header} id="contact">
      Contact Me
    </Typography>
    <Stack
      direction="row"
      justifyContent="center"
      gap={2}
      sx={{
        "@media (max-width: 900px)": {
          flexDirection: "column",
          alignItems: "start",
        },
      }}
    >
      <Stack direction={"row"}>
        <IconButton aria-label="email" href="mailto:zeilmannnoah@gmail.com">
          <EmailIcon />
        </IconButton>
        <Stack>
          <Typography variant="body1" sx={styles.linkLabel}>
            Mail
          </Typography>
          <Link
            href="mailto:zeilmannnoah@gmail.com"
            variant="body1"
            underline="none"
            sx={styles.link}
          >
            zeilmannnoah@gmail.com
          </Link>
        </Stack>
      </Stack>
      <Stack direction={"row"}>
        <IconButton aria-label="phone" href="tel:+8164233521">
          <PhoneIcon />
        </IconButton>
        <Stack>
          <Typography variant="body1" sx={styles.linkLabel}>
            Phone
          </Typography>
          <Link
            href="tel:+8164233521"
            variant="body1"
            underline="none"
            sx={styles.link}
          >
            +1 (816) 423-3521
          </Link>
        </Stack>
      </Stack>
      <Stack direction={"row"}>
        <IconButton
          aria-label="linked"
          href="https://www.linkedin.com/in/noah-zeilmann/"
        >
          <LinkedInIcon />
        </IconButton>
        <Stack>
          <Typography variant="body1" sx={styles.linkLabel}>
            LinkedIn
          </Typography>
          <Link
            href="https://www.linkedin.com/in/noah-zeilmann/"
            variant="body1"
            underline="none"
            sx={styles.link}
          >
            https://www.linkedin.com/in/noah-zeilmann/
          </Link>
        </Stack>
      </Stack>
    </Stack>
    <Typography variant="body1" color="text.secondary" mt={2}>
      Feel free to reach out to me!
    </Typography>
  </Box>
);
