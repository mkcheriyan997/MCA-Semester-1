import React, { createContext, useMemo, useState, useContext, useEffect } from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const defaultMode = () => {
  try {
    return localStorage.getItem("sud_darkmode") === "true";
  } catch {
    return false;
  }
};

const ColorModeContext = createContext({ toggleColorMode: () => {} });

export function useColorMode() {
  return useContext(ColorModeContext);
}

export function CustomThemeProvider({ children }) {
  const [darkMode, setDarkMode] = useState(defaultMode);

  useEffect(() => {
    try {
      localStorage.setItem("sud_darkmode", darkMode ? "true" : "false");
    } catch {}
  }, [darkMode]);

  const colorMode = useMemo(
    () => ({
      toggleColorMode: () => setDarkMode((prev) => !prev),
      darkMode,
    }),
    [darkMode]
  );

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode: darkMode ? "dark" : "light",
          primary: { main: "#1976d2" },
          secondary: { main: "#ef6c00" },
        },
        components: {
          MuiAppBar: { defaultProps: { elevation: 1 } },
        },
      }),
    [darkMode]
  );

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default CustomThemeProvider;