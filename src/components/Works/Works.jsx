import React, { useState } from "react";
import { Box, Typography, Button } from "@mui/material";
import DoodleItems from "../../assets/decorations/DoodleItems";


import CourseWebsite from "../../assets/images/CourseWebsite.png";
import Laptop from "../../assets/images/Laptop.png";
import Mobile from "../../assets/images/Mobile.png";

import { useTranslation } from "react-i18next";

const Works = () => {
  const { t } = useTranslation();
  const tabs = ["All", "UI", "UX", "Web", "Design"];
  const [activeTab, setActiveTab] = useState("All");

  return (
    <Box
      sx={{
        width: "100%",
        minHeight: "100vh",
        maxWidth: 1440,
        mx: "auto",
        position: "relative",
        overflow: "hidden",
        backgroundColor: "#222831",
        px: { xs: 2, sm: 4, md: 8 },
        py: { xs: 6, md: 10 },
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Box
        sx={{
          position: "absolute",
          inset: 0,
          zIndex: 2,
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gridTemplateRows: "repeat(3, 1fr)",
          opacity: 0.25,
          pointerEvents: "none",
        }}
      >
        {[...Array(9)].map((_, i) => (
          <Box key={i} display="flex" alignItems="center" justifyContent="center">
            <DoodleItems />
          </Box>
        ))}
      </Box>

      <Box
        sx={{
          position: "relative",
          zIndex: 3,
          width: "100%",
          maxWidth: 1200,
          textAlign: { xs: "center", md: "left" },
        }}
      >
        <Typography
          variant="h3"
          fontWeight={800}
          mb={4}
          fontSize={{ xs: 32, sm: 38, md: 44 }}
        >
          
          {t("works.recent")}{" "}
          <Box component="span" color="primary.main">
          {t("works.works")}
          </Box>
        </Typography>

        <Box
          display="flex"
          gap={2}
          mb={6}
          flexWrap="wrap"
          justifyContent={{ xs: "center", md: "flex-start" }}
        >
          {tabs.map((tab) => (
            <Button
              key={tab}
              onClick={() => setActiveTab(tab)}
              sx={{
                px: 3,
                py: 1,
                borderRadius: "20px",
                textTransform: "none",
                fontWeight: 600,
                backgroundColor:
                  activeTab === tab
                    ? "primary.main"
                    : "rgba(255,255,255,0.1)",
                color: activeTab === tab ? "#000" : "#fff",
                "&:hover": {
                  backgroundColor: "primary.main",
                  color: "#000",
                },
              }}
            >
              {tab}
            </Button>
          ))}
        </Box>

        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: {
              xs: "1fr",
              sm: "repeat(2, 1fr)",
              md: "repeat(3, 1fr)",
            },
            gap: { xs: 3, md: 4 },
          }}
        >
          {[CourseWebsite, Laptop, Mobile].map((img, index) => (
            <Box
              key={index}
              sx={{
                background: "rgba(255,255,255,0.05)",
                borderRadius: "20px",
                p: 3,
                backdropFilter: "blur(10px)",
                transition: "0.3s ease",
                "&:hover": {
                  transform: "translateY(-10px)",
                },
              }}
            >
              <Box
                component="img"
                src={img}
                alt={`work-${index}`}
                sx={{
                  width: "100%",
                  borderRadius: "14px",
                }}
              />
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default Works;
