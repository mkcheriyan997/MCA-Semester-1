import React from "react";
import { Box, Paper, Button, Typography } from "@mui/material";

export default function SettingsPage(){
  function resetAll(){
    if(confirm("Reset app and clear all data?")) {
      localStorage.clear();
      window.location.reload();
    }
  }
  return (
    <Box>
      <Paper sx={{ p: 2 }}>
        <Typography variant="h6">Settings</Typography>
        <Typography variant="body2" sx={{ mt: 1 }}>Reset the app to default sample data:</Typography>
        <Button variant="contained" color="error" sx={{ mt: 1 }} onClick={resetAll}>Reset App (Clear All)</Button>
      </Paper>
    </Box>
  );
}