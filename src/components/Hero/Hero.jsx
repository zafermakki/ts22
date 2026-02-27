import { Box, Typography, Button } from "@mui/material";
import heroImg from "../../assets/images/Group 2346.png";
import ArrowDownIcon from "../../assets/icons/ArrowDownIcon";
import DoodlesMixedRound from "../../assets/decorations/DoodlesMixedRound";
import Ellipse from "../../assets/decorations/Ellipse";
import Vector from "../../assets/decorations/Vector";

import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import { useTranslation } from "react-i18next";

const Hero = () => {

  const { t } = useTranslation();

  return (
    <Box
      sx={{
        minHeight: "100vh",
        px: { xs: 2, md: 10 },
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* LEFT CONTENT */}
      <Box
        maxWidth={520}
        sx={{
          position: "relative",    
        }}
      >
        <Box
          sx={{
            position: "absolute",
            left: "-5px",
            top: "0px",
            zIndex: 0,
            opacity: 0.4,
            pointerEvents: "none",
          }}
        >
          <Vector />
        </Box>

        <Box
            sx={{
              pl: "100px", 
            }}
          >
            <Typography
              fontWeight={800}
              lineHeight={1.1}
              sx={{ fontSize: { xs: 42, md: 64 } }}
            >
              {t("hero.title1")}
            </Typography>

            <Typography
              fontWeight={800}
              color="primary"
              lineHeight={1.1}
              sx={{ fontSize: { xs: 42, md: 64 } }}
            >
              {t("hero.title2")}
            </Typography>

            <Box mt={4} display="flex" gap={2} >
              <Button variant="contained" sx={{color:"#fff",textTransform: "none",borderRadius: "20px",textShadow: "0 4px 6px rgba(0,0,0,0.45)"}} >{t("hero.hire")}</Button>
              <Button variant="contained" sx={{color:"#fff",textTransform: "none",borderRadius: "20px",backgroundColor:"#393E46",textShadow: "0 4px 6px rgba(0,0,0,0.45)",}}>
                {t("hero.download")} <ArrowDownIcon size={26} />
              </Button>
            </Box>
          </Box>

      </Box>

      {/* RIGHT SIDE  */}
      <Box
        sx={{
          position: "relative",
          width: 500,
          height: 520,
          display: { xs: "none", md: "block" },
        }}
      >
        <Box
          sx={{
            position: "absolute",
            top: "-40px",
            left: "-40px",
            width: 500,
            height: 500,
            zIndex: 0,
            pointerEvents: "none",
            opacity: 0.4,
          }}
        >
          <DoodlesMixedRound width="100%" height="100%" />
        </Box>

        <Box
          sx={{
            position: "absolute",
            bottom: 0,
            left: "25%",
            transform: "translateX(-50%)",
            zIndex: 1,
            filter: "blur(3px)",
          }}
        >
          <Ellipse />
        </Box>

        <Box
          component="img"
          src={heroImg}
          alt="Designer"
          sx={{
            position: "absolute",
            bottom: -90,
            left: "25%",
            transform: "translateX(-50%)",
            width: 420,
            zIndex: 2,
          }}
        />
      </Box>

      <Box
        sx={{
          position: "absolute",
          bottom: 100,
          left: "29%",
          transform: "translateX(-50%)",
          width: 44,
          height: 44,
          borderRadius: 2,
          background: "rgba(255,255,255,0.05)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          cursor: "pointer",
        }}
      >
        <ArrowDownwardIcon />
      </Box>
    </Box>
  );
};

export default Hero;
