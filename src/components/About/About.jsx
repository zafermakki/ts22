import React, { useState } from "react";
import { Box, Typography } from "@mui/material";
import aboutImg from "../../assets/images/Group 62.png";
import VectorMusic from "../../assets/decorations/VectorMusic";
import Ellipse from "../../assets/decorations/Ellipse";
import DoodleItems from "../../assets/decorations/DoodleItems";
import VectorShare from "../../assets/decorations/VectorShare";
import Lightbulb from "../../assets/decorations/Lightbulb";
import Sleep from "../../assets/decorations/Sleep";
import { useTranslation } from "react-i18next";

const About = () => {
  const { t } = useTranslation();
  const [showMore, setShowMore] = useState(false);

  return (
    <Box
      sx={{
        minHeight: "800px",
        px: { xs: 2, md: 10 },
        py: { xs: 8, md: 12 },
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        gap: 6,
        flexDirection: { xs: "column", md: "row" },
        position: "relative",
      }}
    >
      {/* LEFT CONTENT */}
      <Box maxWidth={520} position="relative">
        <Box sx={{ position: "absolute", top: -80, left: 0 }}>
          <VectorMusic />
        </Box>
        <Box sx={{ position: "absolute", top: -20, right: 200, opacity: 0.8,zIndex:-1 }}>
          <Lightbulb />
        </Box>
        <Box sx={{ position: "absolute", bottom: -200, left: 80, opacity: 0.8 }}>
          <VectorShare />
        </Box>

        <Typography variant="h3" fontWeight={800} mb={2}>
          {t("about.title")}{" "}
          <Box component="span" color="primary.main">
          {t("about.titleHighlight")}
          </Box>
        </Typography>

        <Typography color="text.secondary" lineHeight={1.8}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi iusto assumenda,
          esse ducimus, quibusdam molestias quis earum, quidem accusamus nobis aperiam eum
          {!showMore && (
            <>
              ...{" "}
              <Box
                component="span"
                onClick={() => setShowMore(true)}
                sx={{
                  color: "#fff",
                  fontWeight: 600,
                  cursor: "pointer",
                  "&:hover": { color: "primary.main" },
                }}
              >
                {t("about.readMore")}
              </Box>
            </>
          )}

          {showMore && (
            <>
              Voluptatibus officia sit alias unde, totam odio? Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Facere doloremque illo accusamus cumque
              perspiciatis.
              <br />
              <br />
              <Box
                component="span"
                onClick={() => setShowMore(false)}
                sx={{
                  color: "#fff",
                  fontWeight: 600,
                  cursor: "pointer",
                  "&:hover": { color: "primary.main" },
                }}
              >
                {t("about.readLess")}
              </Box>
            </>
          )}
        </Typography>
      </Box>

      {/* RIGHT IMAGE AREA */}
      <Box
        position="relative"
        display={{ xs: "none", md: "flex" }}
        alignItems="center"
        justifyContent="center"
        width={450}
      >
        <Box sx={{ position: "absolute", zIndex: 1, right: -40, top: -30, opacity: 0.4 }}>
          <DoodleItems />
        </Box>

        <Box sx={{ position: "relative", zIndex: 2, transform: "translate(-50px, 170px)" }}>
          <Box
            sx={{
              position: "absolute",
              bottom: -15,
              left: "50%",
              transform: "translateX(-50%)",
              zIndex: 1,
            }}
          >
            <Ellipse />
          </Box>

          <Box sx={{ position: "absolute", top: 0, right: 300, opacity: 0.8 }}>
            <Sleep />
          </Box>

          <Box sx={{ position: "relative", zIndex: 2 }}>
            <img src={aboutImg} alt="About illustration" style={{ width: 420 }} />
          </Box>
        </Box>
      </Box>

      {/* HORIZONTAL LINE UNDER CONTENT */}
      <Box
        sx={{
          position: "absolute",
          bottom: 20,
          left: 0,
          width: "100%",
          height: "2px",
          backgroundColor: "rgba(255,255,255,0.15)",
        }}
      />
    </Box>
  );
};

export default About;
