import { ThemeOptions } from "@mui/material/styles";

const lightThemeOptions: ThemeOptions = {
  palette: {
    mode: "light",
  },
};

const darkThemeOptions: ThemeOptions = {
  palette: {
    primary: { main: "#e4e4f5", dark: "#494957", contrastText: "#5953f5" },
  },
  typography: {
    allVariants: { fontFamily: "Avenir, sans-serif" },
    h1: {
      fontSize: "1rem",
      fontWeight: 800,
      letterSpacing: 5,
      textTransform: "uppercase",
      marginBottom: "2rem",
      "@media (max-width:600px)": {
        marginBottom: "1rem",
        marginTop: "1rem",
      },
    },
    h2: {
      fontSize: "7rem",
      fontWeight: 700,
      textTransform: "uppercase",
      lineHeight: 0.85,
      letterSpacing: -4.5,

      "@media (max-width:600px)": {
        fontSize: "3rem",
      },
    },
    h3: {
      fontSize: "2rem",
      fontWeight: 500,
    },
    h4: {
      fontSize: "0.85rem",
      fontWeight: 600,
      letterSpacing: 5,
      textTransform: "uppercase",
      marginBottom: "2vh",
    },
    h5: {
      fontSize: "6rem",
      fontWeight: 600,
      textTransform: "uppercase",
      lineHeight: 0.3,
      "@media (max-width:900px)": {
        fontSize: "4.5rem",
      },
      "@media (max-width:600px)": {
        fontSize: "3rem",
      },
    },
    body1: {
      fontSize: "4rem",
      color: "#e4e4f5",
      lineHeight: 1,

      "@media (max-width:600px)": {
        fontSize: "2rem",
      },
    },
    body2: {
      fontSize: "1rem",
      fontWeight: 700,
      color: "#e4e4f5",
    },
  },
  components: {
    MuiSvgIcon: {
      styleOverrides: {
        root: {
          color: "#e4e4f5",
          "&:hover": {
            color: "#5953f5",
          },
        },
      },
    },
  },
};

export const COLORS = {
  background: "#131321",
  main: "#e4e4f5",
  dark: "#494957",
  contrastText: "#5953f5",
  altContrastText: "#ebbd26",
  altContrast: "#007dff",
};

export default darkThemeOptions;
