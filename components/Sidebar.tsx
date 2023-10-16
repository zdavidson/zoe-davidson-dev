import { Box, Button, List } from "@mui/material";
import React from "react";
import EmailIcon from "@mui/icons-material/Email";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import YouTubeIcon from "@mui/icons-material/YouTube";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";

const Sidebar = () => {
  const icons = [
    <EmailIcon key="email" />,
    <LinkedInIcon key="linkedin" />,
    <YouTubeIcon key="youtube" />,
    <LocalPhoneIcon key="phone" />,
  ];
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "flex-start",
        position: "sticky",
        bottom: "5vh",
      }}
    >
      <List sx={{ display: "flex", flexDirection: "column" }}>
        {icons.map((i) => {
          return (
            <Button
              key={i.toString()}
              sx={{
                margin: 0,
                padding: 0,
                marginBottom: "0.5rem",
                display: "flex",
                justifyContent: "flex-start",
                "&:hover": {
                  background: "none",
                },
              }}
            >
              {i}
            </Button>
          );
        })}
      </List>
    </Box>
  );
};

export default Sidebar;
