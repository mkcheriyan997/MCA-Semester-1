import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import { useColorMode } from "../theme";

export default function Topbar() {
  const { toggleColorMode, darkMode } = useColorMode();
  return (
    <AppBar position="sticky" color="inherit" sx={{ bgcolor: "background.paper" }}>
      <Toolbar sx={{ display: "flex" }}>
        <Typography variant="h6" sx={{ flex: 1 }}>
          Student Utility Dashboard
        </Typography>
        <IconButton onClick={toggleColorMode} size="large" edge="end" color="inherit">
          {darkMode ? <Brightness7Icon /> : <Brightness4Icon />}
        </IconButton>
      </Toolbar>
    </AppBar>
  );
}