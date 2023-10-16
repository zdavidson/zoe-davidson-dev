import { Box, List, Typography } from "@mui/material";
import React, { useState } from "react";

import Spline from "@splinetool/react-spline";
import { COLORS } from "../styles/theme/lightThemeOptions";

const Work = () => {
  const [selected, setSelected] = useState<any>(null);
  const work = [
    {
      activity: "develop",
      description:
        "I work with businesses, large and small, to come up with custom designs & artistic solutions that fit their unique needs & budget.",
    },
    {
      activity: "ecommerce",
      description:
        "I build custom ecommerce sites for companies looking to stand out from the crowd.",
    },
    {
      activity: "create",
      description:
        "I turn ideas into art, using a laptop or a camera. Sometimes both.",
    },
    {
      activity: "educate",
      description:
        "I spend my free time teaching, either on set or in front of a camera.",
    },
  ];
  return (
    <Box sx={{ height: "100vh" }}>
      <Box
        sx={{
          "@media (max-width:900px)": {
            display: "none",
          },
        }}
      >
        <Spline
          scene="https://prod.spline.design/38pNV6bDomiErYqM/scene.splinecode"
          style={{
            position: "absolute",
            height: "50vh",
            width: "35vw",
            zIndex: -1,

            transform: "translate(-25vw, -25vh)",
          }}
        />
      </Box>
      <Typography variant="h4">What I Do</Typography>
      <List>
        <Box sx={{ marginTop: "2vh" }}>
          {work.map((w) => {
            return (
              <>
                <Box
                  sx={{
                    display: "grid",
                    gridTemplateColumns: "20vw 2fr",
                    gridTemplateRows: "10vh",
                    alignItems: "center",
                    columnGap: "25vw",
                    backgroundColor:
                      selected === w.activity ? COLORS.main : "auto",
                    backgroundSize: "cover",
                    transition: "background-color 0.5s 0.125s ease-in-out",

                    "@media (max-width:900px)": {
                      gridTemplateColumns: "1fr",
                      gridTemplateRows: "4fr 1fr",
                      rowGap: "3vh",
                    },
                  }}
                  onMouseEnter={() => setSelected(w.activity)}
                  onMouseLeave={() => setSelected(null)}
                >
                  <Typography
                    variant="h5"
                    key={w.activity}
                    sx={{
                      mr: "2vw",

                      backgroundSize: "5vh",
                      color:
                        selected === w.activity ? COLORS.background : "auto",
                    }}
                  >
                    {w.activity}
                  </Typography>
                  {selected === w.activity && (
                    <Typography
                      variant="body2"
                      sx={{
                        maxWidth: "25vw",
                        color:
                          selected === w.activity ? COLORS.background : "auto",
                        "@media (max-width:900px)": {
                          maxWidth: "none",
                        },
                      }}
                    >
                      {w.description}
                    </Typography>
                  )}
                </Box>
                <hr style={{ margin: 0 }}></hr>
              </>
            );
          })}
        </Box>
      </List>
      <Box
        sx={{
          "@media (max-width:900px)": {
            display: "none",
          },
        }}
      >
        <Spline
          scene="https://prod.spline.design/lAC79DTSzTB91Gih/scene.splinecode"
          style={{
            position: "absolute",
            height: "50vh",
            width: "35vw",
            zIndex: -1,
            transform: "translate(60vw, -25vh)",
          }}
        />
      </Box>
    </Box>
  );
};

export default Work;
