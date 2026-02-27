import React from "react";
import { Box, Typography,TextField,Button } from "@mui/material";
import contactImg from "../../assets/images/Group 2372.png";
import Send from "../../assets/icons/Send";
import Keyboard  from "../../assets/decorations/keyboard"
import Mail  from "../../assets/decorations/Mail"
import VectorContact  from "../../assets/decorations/VectorContact"
import EllipseContact from "../../assets/decorations/EllipseContact"

import { useTranslation } from "react-i18next";

const Contact = () => {
  const { t } = useTranslation();

  return (
    <Box
      sx={{
        minHeight: "100vh",
        width: "100%",
        px: { xs: 2, md: 10 },
        py: { xs: 8, md: 12 },
        boxSizing: "border-box",
        overflow: "hidden",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        gap: 6,
        flexDirection: { xs: "column", md: "row" },
        position: "relative",
      }}
    >
      <Box
        position="relative"
        display={{ xs: "none", md: "flex" }}
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        sx={{
          overflow: "hidden",
          width: { md: 420, lg: 450 },
          flexShrink: 0,
          overflow: "visible",
        }}
      >
        <Typography
          variant="h3"
          fontWeight={700}
          mb={2}
          sx={{ fontSize: "64px", lineHeight: 1.1 }}
        >
          {t("contact.title")}{" "}
          <Box component="span" color="primary.main">
          {t("contact.titleHighlight")}
          </Box>
        </Typography>
        <Box
          sx={{
            position: "absolute",
            left: 10,
            top: "70%",
            transform: "translateY(-50%)",
            width: 24,
            height: 24,
            opacity: 0.8,
            zIndex: 3,
          }}
        >
          <VectorContact
            style={{
              width: "100%",
              height: "100%",
            }}
          />
        </Box>
        <Box
          sx={{
            position: "absolute",
            top: { md: "105%", lg: "124%" },
            left: { md: "50%", lg: "64%" },
            transform: "translate(-50%, -50%)",
            width: { md: 150, lg: 260 },
            height: { md: 80, lg: 260 },
            opacity: 1,
            zIndex: 1,
            pointerEvents: "none",
            transition: "all 0.3s ease",
          }}
        >
          <EllipseContact
            style={{
              width: "100%",
              height: "100%",
            }}
          />
        </Box>

        <Box sx={{ position: "relative", zIndex: 2 }}>
          <img
            src={contactImg}
            alt="Contact illustration"
            style={{
              width: "100%",
              maxWidth: 420,
              height: "auto",
              display: "block",
              transform: "translateX(75px)",
            }}
          />
        </Box>
      </Box>

      <Box maxWidth={620} mx="0" px={{ xs: 2, sm: 4 }}  py={4} position="relative">
        <Box display="flex" flexDirection="column" gap={3} ml={{ xs: 0, sm: 4 }}>
          <Box display="flex" gap={2} flexDirection={{ xs: "column", sm: "row" }}>
            <Box
                sx={{
                  position: "absolute",
                  top: -55,          
                  left: 130,     
                  width: 24,
                  height: 24,
                  opacity: 0.8,
                }}
              >
                <Keyboard
                  style={{
                    width: "100%",
                    height: "100%",
                  }}
                />
              </Box>

          {/* Name Field */}
          <Box flex={1} display="flex" flexDirection="column" gap={1}>
            <Typography variant="subtitle2" fontWeight={600}>
            {t("contact.nameLabel")}
            </Typography>
            <TextField
              name="name"
              fullWidth
              placeholder={t("contact.namePlaceholder")}
              variant="filled"
              InputProps={{
                disableUnderline: true,
                sx: {
                  backgroundColor: "#393E4680",
                  borderRadius: 2,
                  height: 52,
                  display: "flex",
                  alignItems: "center",
                  px: 2,
                  "& input": {
                    color: "#fff",
                    padding: 0,
                    height: "100%",
                    boxSizing: "border-box",
                  },
                },
              }}
            />
          </Box>

          {/* Email Field */}
          <Box flex={1} display="flex" flexDirection="column" gap={1}>
            <Typography variant="subtitle2" fontWeight={600}>
            {t("contact.emailLabel")}
            </Typography>
            <TextField
              name="email"
              type="email"
              fullWidth
              placeholder={t("contact.emailPlaceholder")}
              variant="filled"
              InputProps={{
                disableUnderline: true,
                sx: {
                  backgroundColor: "#393E4680",
                  borderRadius: 2,
                  height: 52,
                  display: "flex",
                  alignItems: "center",
                  px: 2,
                  "& input": {
                    color: "#fff",
                    padding: 0,
                    height: "100%",
                    boxSizing: "border-box",
                    
                  },
                  },
              }}
            />
          </Box>
        </Box>

        {/* Message Field */}
        <Box display="flex" flexDirection="column" gap={1}>
          <Typography variant="subtitle2" fontWeight={600}>
          {t("contact.messageLabel")}
          </Typography>
          <TextField
            name="message"
            fullWidth
            multiline
            minRows={6}
            maxRows={10}
            placeholder={t("contact.messagePlaceholder")}
            variant="filled"
            InputProps={{
              disableUnderline: true,
              sx: {
                backgroundColor: "#393E4680",
                borderRadius: 2,
                px: 2,
                py: 1.5,
                "& textarea": {
                  color: "#fff",
                  padding: 0,
                  lineHeight: 1.6,
                  boxSizing: "border-box",
                },
              },
            }}
          />
        </Box>

        <Box position="relative" alignSelf="flex-start">
                <Button
                  variant="contained"
                  sx={{
                    textTransform: "none",
                    backgroundColor: "#00ADB5",
                    color: "#fff",
                    borderRadius: "20px",
                    py: 1.5,
                    px: 3,
                    display: "flex",
                    alignItems: "center",
                    gap: 1,
                    textShadow: "0 4px 6px rgba(0,0,0,0.45)",
                  }}
                >
                  {t("contact.send")} <Send />
                </Button>

                <Box
                  sx={{
                    position: "absolute",
                    top: "100%",      
                    left: "90%",
                    transform: "translateX(-50%)",
                    mt: 1.5,
                    width: 24,
                    height: 24,
                    opacity: 0.8,
                  }}
                >
                  <Mail
                    style={{
                      width: "100%",
                      height: "100%",
                    }}
                  />
                </Box>
              </Box>
            </Box>
        </Box>
        <Box
          sx={{
            position: "absolute",
            bottom: 0,
            left: 0,
            width: "100%",
            height: "2px",
            backgroundColor: "rgba(255,255,255,0.15)",
          }}
        />
    </Box>
  );
};

export default Contact;
