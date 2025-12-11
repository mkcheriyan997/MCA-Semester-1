import React, { useState, useEffect } from "react";
import { Box, Paper, TextField, Button, List, ListItem, Typography, IconButton } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import useLocalStorage from "../hooks/useLocalStorage";

export default function ExamsPage() {
  const [exams, setExams] = useLocalStorage("exams", []);
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");

  useEffect(() => {}, [exams]);

  function add() {
    if (!title || !date) return;
    setExams([...exams, { id: Date.now(), title, date }]);
    setTitle(""); setDate("");
  }

  function remove(id) {
    setExams(exams.filter(e => e.id !== id));
  }

  function clearAll() {
    setExams([]);
  }

  return (
    <Box>
      <Paper sx={{ p: 2, mb: 2 }}>
        <TextField placeholder="Exam name" value={title} onChange={e => setTitle(e.target.value)} sx={{ mr: 1 }} />
        <TextField type="date" value={date} onChange={e => setDate(e.target.value)} sx={{ mr: 1 }} />
        <Button variant="contained" onClick={add}>Add Exam</Button>
        <Button variant="outlined" sx={{ ml: 1 }} onClick={clearAll}>Clear All</Button>
      </Paper>

      <Paper sx={{ p: 2 }}>
        <Typography variant="h6">Exams</Typography>
        <List>
          {exams.map(x => (
            <ListItem key={x.id} secondaryAction={
              <IconButton edge="end" onClick={() => remove(x.id)}><DeleteIcon/></IconButton>
            }>
              {x.title} — {x.date}
            </ListItem>
          ))}
          {!exams.length && <Box sx={{ p: 2 }}>No exams yet.</Box>}
        </List>
      </Paper>
    </Box>
  );
}