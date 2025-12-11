import React from "react";
import { Box, Paper, Button, Typography } from "@mui/material";
import useLocalStorage from "../hooks/useLocalStorage";
import { format } from "date-fns";

export default function AttendancePage() {
  const [attendance, setAttendance] = useLocalStorage("attendance", {});
  const today = format(new Date(), "yyyy-MM-dd");

  function mark(present) {
    setAttendance({ ...attendance, [today]: present });
  }

  const days = Object.keys(attendance);
  const present = days.filter(d => attendance[d]).length;
  const pct = days.length ? Math.round((present / days.length) * 100) : 0;

  function clearAll() {
    setAttendance({});
  }

  return (
    <Box>
      <Paper sx={{ p: 2, mb: 2 }}>
        <Typography variant="h6">Today: {today}</Typography>
        <Button variant="contained" onClick={() => mark(true)} sx={{ mr: 1 }}>Present</Button>
        <Button variant="outlined" onClick={() => mark(false)}>Absent</Button>
        <Button variant="text" color="error" onClick={clearAll} sx={{ ml: 2 }}>Clear All</Button>
        <Typography sx={{ mt: 2 }}>Overall attendance: {pct}% ({present}/{days.length})</Typography>
      </Paper>
    </Box>
  );
}