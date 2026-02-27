import React from "react";
import {
  Box,
  Typography,
  IconButton,
  Stack,
} from "@mui/material";

import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import CallOutlinedIcon from "@mui/icons-material/CallOutlined";

import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import YouTubeIcon from "@mui/icons-material/YouTube";

import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation();
  return (
    <Box
      component="footer"
      sx={{
        py: { xs: 6, md: 8 },
        px: { xs: 2, md: 10 },
      }}
    >
      <Stack
        direction={{ xs: "column", md: "row" }}
        spacing={4}
        alignItems="center"
        justifyContent="center"
        mb={4}
      >
        <FooterLink icon={<HomeOutlinedIcon />} label={t("footer.home")} />
        <FooterLink icon={<PersonOutlineIcon />} label={t("footer.about")} />
        <FooterLink icon={<CallOutlinedIcon />} label={t("footer.contact")} />
      </Stack>

      <Stack
        direction="row"
        spacing={2}
        justifyContent="center"
        mb={4}
      >
        <SocialIcon icon={<FacebookIcon />} />
        <SocialIcon icon={<InstagramIcon />} />
        <SocialIcon icon={<TwitterIcon />} />
        <SocialIcon icon={<YouTubeIcon />} />
      </Stack>

      <Box
        sx={{
          display: "flex",
          justifyContent: { xs: "center", md: "flex-end" },
        }}
      >
        <Typography
          variant="body2"
          sx={{ color: "rgba(255,255,255,0.6)" }}
        >
          {t("footer.terms")} – {t("footer.privacy")}
        </Typography>
      </Box>
    </Box>
  );
};

/* SMALL COMPONENTS */

const FooterLink = ({ icon, label }) => (
  <Stack
    direction="row"
    spacing={1}
    alignItems="center"
    sx={{
      color: "#fff",
      cursor: "pointer",
      opacity: 0.8,
      transition: "0.3s",
      "&:hover": {
        opacity: 1,
        color: "primary.main",
      },
    }}
  >
    {icon}
    <Typography>{label}</Typography>
  </Stack>
);

const SocialIcon = ({ icon }) => (
  <IconButton
    sx={{
      width: 42,
      height: 42,
      backgroundColor: "rgba(255,255,255,0.08)",
      color: "#fff",
      transition: "0.3s",
      "&:hover": {
        backgroundColor: "primary.main",
        color: "#000",
      },
    }}
  >
    {icon}
  </IconButton>
);

export default Footer;
