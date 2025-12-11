import React, { useState } from "react";
import { Box, Paper, TextField, Button, List, ListItem, IconButton } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import useLocalStorage from "../hooks/useLocalStorage";

export default function TimetablePage() {
  const [timetable, setTimetable] = useLocalStorage("timetable", []);
  const [day, setDay] = useState("");
  const [subject, setSubject] = useState("");
  const [time, setTime] = useState("");

  function add() {
    if (!day || !subject || !time) return;
    setTimetable([...timetable, { id: Date.now(), day, subject, time }]);
    setDay(""); setSubject(""); setTime("");
  }

  function remove(id) {
    setTimetable(timetable.filter(t => t.id !== id));
  }

  function clearAll() {
    setTimetable([]);
  }

  return (
    <Box>
      <Paper sx={{ p: 2, mb: 2 }}>
        <TextField placeholder="Day" value={day} onChange={e => setDay(e.target.value)} sx={{ mr: 1 }} />
        <TextField placeholder="Subject" value={subject} onChange={e => setSubject(e.target.value)} sx={{ mr: 1 }} />
        <TextField placeholder="Time" value={time} onChange={e => setTime(e.target.value)} sx={{ mr: 1 }} />
        <Button variant="contained" onClick={add}>Add</Button>
        <Button variant="outlined" sx={{ ml: 1 }} onClick={clearAll}>Clear All</Button>
      </Paper>

      <Paper sx={{ p: 2 }}>
        <List>
          {timetable.map(t => (
            <ListItem key={t.id} secondaryAction={
              <IconButton edge="end" onClick={() => remove(t.id)}>
                <DeleteIcon />
              </IconButton>
            }>
              {t.day} — {t.subject} at {t.time}
            </ListItem>
          ))}
          {!timetable.length && <Box sx={{ p: 2 }}>No timetable yet.</Box>}
        </List>
      </Paper>
    </Box>
  );
}