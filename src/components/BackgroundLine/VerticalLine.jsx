import React from "react";
import { Box } from "@mui/material";

const VerticalLine = ({ left = "50%", opacity = 0.15 }) => {
  return (
    <Box
      sx={{
        position: "fixed",
        top: 0,
        bottom: 0,
        left,
        width: "0.5px",
        backgroundColor: `rgba(255,255,255,${opacity})`,
        zIndex: 1,
        pointerEvents: "none",
      }}
    />
  );
};

export default VerticalLine;
