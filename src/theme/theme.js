import { createTheme } from "@mui/material/styles";

const getTheme = (direction = "ltr", mode = "light") =>
  createTheme({
    direction: direction,

    palette: {
      mode,

      primary: {
        main: "#16c7c3",
      },

      text: {
        primary: "#ffffff",
        secondary: "#a0aec0",
      },

      background:
        mode === "dark"
          ? {
              default: "#000000", 
              paper: "#000000",
            }
          : {
              default: "#222831", 
              paper: "#1f2630",
            },
    },

    typography: {
      fontFamily:
        direction === "rtl"
          ? "Cairo, Poppins, sans-serif"
          : "Poppins, sans-serif",
    },
  });

export default getTheme;