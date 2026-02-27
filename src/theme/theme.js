import { createTheme } from "@mui/material/styles";

const getTheme = (direction = "ltr") =>
  createTheme({
    direction: direction, 

    palette: {
      mode: "dark",
      background: {
        default: "#222831",
        paper: "#1f2630",
      },
      primary: {
        main: "#16c7c3",
      },
      text: {
        primary: "#ffffff",
        secondary: "#a0aec0",
      },
    },

    typography: {
      fontFamily:
        direction === "rtl"
          ? "Cairo, Poppins, sans-serif" // خط عربي
          : "Poppins, sans-serif",
    },
  });

export default getTheme;