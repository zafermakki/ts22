import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  Button,
  IconButton,
  Menu,
  MenuItem,
  Divider,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useTranslation } from "react-i18next";
import i18n from "../../i18n";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import { useTheme } from "@mui/material/styles";

const Navbar = ({ toggleTheme, mode }) => {
  const { t } = useTranslation();
  const theme = useTheme();

  const changeToGerman = () => {
    i18n.changeLanguage("de");
  };

  const changeToEnglish = () => {
    i18n.changeLanguage("en");
  };

  const changeToArabic = () => {
    i18n.changeLanguage("ar");
  };
  

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleOpenMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleCloseMenu = () => {
    setAnchorEl(null);
  };

  const navItems = ["nav.home", "nav.about", "nav.contact"];

  return (
    <AppBar position="static" elevation={0} sx={{ background: "transparent" }}>
      <Toolbar
        sx={{
          px: { xs: 2, md: 10 },
          display: "flex",
          justifyContent: "space-between",
          borderBottom: "1.44px solid rgba(255,255,255,0.15)",
        }}
      >
        <Typography
          fontWeight="bold"
          fontSize={18}
          sx={{ fontFamily: "Oswald, sans-serif",color:"#fff" }}
        >
          SaulDesign
        </Typography>

        {/* Show buttons only on md and up */}
        <Box display={{ xs: "none", md: "flex" }} gap={4}>
          <Button onClick={changeToGerman}>{t("DE")}</Button>
          <Button onClick={changeToEnglish}>{t("EN")}</Button>
          <Button onClick={changeToArabic}>{t("AR")}</Button>
          {navItems.map((item) => (
            <Button
              key={item}
              sx={{
                color: "#fff",
                textTransform: "none",
                fontSize: 14,
                opacity: 0.8,
                "&:hover": { opacity: 1 },
              }}
            >
              {t(item)}
            </Button>
          ))}
          <IconButton
            onClick={toggleTheme}
            sx={{
              color: theme.palette.text.primary,
            }}
          >
            {mode === "dark" ? <LightModeIcon /> : <DarkModeIcon />}
          </IconButton>
        </Box>

        {/* Menu icon for mobile */}
        <IconButton
          onClick={handleOpenMenu}
          sx={{ display: { xs: "flex", md: "none" }, color: "#fff" }}
        >
          <MenuIcon />
        </IconButton>

        {/* Menu for small screens */}
        <Menu
          anchorEl={anchorEl}
          open={open}
          onClose={handleCloseMenu}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "right",
          }}
          transformOrigin={{
            vertical: "top",
            horizontal: "right",
          }}
          PaperProps={{
            sx: {
              backgroundColor: "#1f252f",
              color: "#fff",
              minWidth: 160,
            },
          }}
        >
          {/* Language buttons in menu (mobile/medium) */}
          <MenuItem onClick={toggleTheme} 
            sx={{
                color: theme.palette.text.primary,
            }}
          > 
            {mode === "dark" ? <LightModeIcon /> : <DarkModeIcon />}
          </MenuItem>
          <MenuItem onClick={() => { changeToGerman(); handleCloseMenu(); }}>
            {t("DE")}
          </MenuItem>
          <MenuItem onClick={() => { changeToEnglish(); handleCloseMenu(); }}>
            {t("EN")}
          </MenuItem>
          <MenuItem onClick={() => { changeToArabic(); handleCloseMenu(); }}>
            {t("AR")}
          </MenuItem>
          <Divider sx={{ my: 1, backgroundColor: "rgba(255,255,255,0.18)" }} />
          {navItems.map((item) => (
            <MenuItem key={item} onClick={handleCloseMenu}>
              {item}
            </MenuItem>
          ))}
        </Menu>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
