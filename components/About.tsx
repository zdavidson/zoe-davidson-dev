import { Typography } from "@mui/material";
import Box from "@mui/material/Box";
import React from "react";
import { COLORS } from "../styles/theme/lightThemeOptions";

const About = () => {
  return (
    <Box
      sx={{
        height: "70vh",
        backgroundColor: COLORS.background,
        marginTop: "30vh",
      }}
    >
      <Typography variant="h4">About Me</Typography>
      <Typography variant="body1">
        I&apos;m a detailed-oriented{" "}
        <span style={{ color: COLORS.contrastText }}>web developer</span> with a
        strong focus on quality over quantity. Also, sometimes I make{" "}
        <span style={{ color: COLORS.contrastText }}>award-winning</span> films.
      </Typography>
    </Box>
  );
};

export default About;
