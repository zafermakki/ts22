import { ThemeProvider, CssBaseline } from "@mui/material";
import Home from "./pages/Home";
import getTheme from "./theme/theme";

import "./i18n";

import { useTranslation } from "react-i18next";
import { useMemo, useEffect } from "react";

import createCache from "@emotion/cache";
import { CacheProvider } from "@emotion/react";

import rtlPlugin from "stylis-plugin-rtl";
import { prefixer } from "stylis";

function App() {
  const { i18n } = useTranslation();

  const isRTL = i18n.language === "ar";
  const direction = isRTL ? "rtl" : "ltr";

  // theme
  const theme = useMemo(() => getTheme(direction), [direction]);

  // cache RTL or LTR
  const cache = useMemo(
    () =>
      createCache({
        key: isRTL ? "muirtl" : "muiltr",
        stylisPlugins: isRTL ? [prefixer, rtlPlugin] : [prefixer],
      }),
    [isRTL]
  );

  // change HTML dir
  useEffect(() => {
    document.documentElement.dir = direction;
  }, [direction]);

  return (
    <CacheProvider value={cache}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Home />
      </ThemeProvider>
    </CacheProvider>
  );
}

export default App;