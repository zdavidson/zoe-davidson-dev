import { Box, Typography } from "@mui/material";
import React from "react";
import { COLORS } from "../styles/theme/lightThemeOptions";
import { motion, CustomValueType, MotionValue } from "framer-motion";

interface Props {
  ref: React.Ref<unknown> | undefined;
  y:
    | string
    | number
    | CustomValueType
    | MotionValue<number>
    | MotionValue<string>
    | MotionValue<any>
    | undefined;
}

const Hero = ({ ref, y }: Props) => {
  return (
    <Box
      ref={ref}
      sx={{
        overflow: "hidden",
        height: "75.5vh",
      }}
    >
      <video
        autoPlay
        muted
        loop
        style={{
          objectFit: "cover",
          width: "100%",
          height: "100%",
          position: "absolute",
          top: 0,
          left: 0,
          zIndex: -1,
        }}
      >
        {" "}
        <source src="./background-video-5.mp4" type="video/mp4" />
      </video>
      <motion.div
        style={{
          position: "relative",
          textAlign: "center",

          backgroundColor: "transparent",
          y,
          overflow: "hidden",
        }}
      >
        <Typography
          variant="h1"
          sx={{
            position: "relative",
            marginBottom: "2rem",
            backgroundColor: "transparent",
            overflow: "hidden",
          }}
        >
          Zoë Davidson
        </Typography>
        <Typography
          variant="h2"
          sx={{
            backgroundColor: "transparent",
            overflow: "hidden",
            position: "relative",
            height: "100%",
          }}
        >
          Sculpting<br></br> Ideas<br></br>
          <span style={{ color: COLORS.contrastText }}>Into Art</span>
          <br></br> Since<br></br> 2015
        </Typography>
      </motion.div>
    </Box>
  );
};

export default Hero;
