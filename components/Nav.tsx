import { Box } from "@mui/material";
import Typography from "@mui/material/Typography";
import React, { ReactElement } from "react";

interface StyledLiProps {
  item: string;
}

const StyledLi = ({ item }: StyledLiProps) => {
  return (
    <Typography variant="h4" sx={{ marginBottom: "0.5vh" }}>
      {item}
    </Typography>
  );
};

const Nav = () => {
  const navElements = ["about", "work", "contact"];
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "flex-end",
        position: "sticky",
        top: 0,
      }}
    >
      <ul>
        {navElements.map((el) => {
          return <StyledLi item={el} key={el} />;
        })}
      </ul>
    </Box>
  );
};

export default Nav;
