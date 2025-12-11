import React from "react";
import { Grid, Paper, Typography, Box } from "@mui/material";
import useLocalStorage from "../hooks/useLocalStorage";
import MiniStatsChart from "../shared/MiniStatsChart";

export default function Dashboard() {
  const [tasks] = useLocalStorage("tasks", []);
  const [notes] = useLocalStorage("notes", []);
  const [exams] = useLocalStorage("exams", []);
  const [attendance] = useLocalStorage("attendance", {});
  const [timetable] = useLocalStorage("timetable", []);

  const totalTasks = tasks.length;
  const notesCount = notes.length;
  const upcomingExam = exams.length ? exams.slice().sort((a,b)=>new Date(a.date)-new Date(b.date))[0] : null;

  const days = Object.keys(attendance);
  const present = days.filter(d => attendance[d]).length;
  const attPct = days.length ? Math.round((present / days.length) * 100) : 0;

  return (
    <Box>
      <Typography variant="h4" gutterBottom>Overview</Typography>
      <Grid container spacing={2}>
        <Grid item xs={12} md={4}>
          <Paper sx={{ p: 2 }}>
            <Typography variant="subtitle2">Tasks</Typography>
            <Typography variant="h5">{totalTasks}</Typography>
            <MiniStatsChart items={tasks} />
          </Paper>
        </Grid>
        <Grid item xs={12} md={4}>
          <Paper sx={{ p: 2 }}>
            <Typography variant="subtitle2">Notes</Typography>
            <Typography variant="h5">{notesCount}</Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} md={4}>
          <Paper sx={{ p: 2 }}>
            <Typography variant="subtitle2">Attendance</Typography>
            <Typography variant="h5">{attPct}%</Typography>
          </Paper>
        </Grid>

        <Grid item xs={12}>
          <Paper sx={{ p: 2 }}>
            <Typography variant="subtitle2">Upcoming Exam</Typography>
            {upcomingExam ? (
              <>
                <Typography variant="h6">{upcomingExam.title} — {new Date(upcomingExam.date).toLocaleDateString()}</Typography>
              </>
            ) : <Typography>No exams added</Typography>}
          </Paper>
        </Grid>

        <Grid item xs={12}>
          <Paper sx={{ p: 2 }}>
            <Typography variant="subtitle2">Timetable Sample</Typography>
            <Typography>{timetable.slice(0,3).map(x=>`${x.day}: ${x.subject} (${x.time})`).join(" • ") || "No timetable set"}</Typography>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
}