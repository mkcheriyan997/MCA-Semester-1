import React, { useState } from "react";
import { Box, Paper, TextField, Button, List, ListItem, IconButton, Checkbox, ListItemText } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import useLocalStorage from "../hooks/useLocalStorage";

export default function TasksPage() {
  const [tasks, setTasks] = useLocalStorage("tasks", []);
  const [text, setText] = useState("");

  function add() {
    if (!text.trim()) return;
    setTasks([...tasks, { id: Date.now(), text, done: false }]);
    setText("");
  }

  function remove(id) {
    setTasks(tasks.filter(t => t.id !== id));
  }

  function toggleDone(id) {
    setTasks(tasks.map(t => (t.id === id ? { ...t, done: !t.done } : t)));
  }

  function clearAll() {
    setTasks([]);
  }

  return (
    <Box>
      <Paper sx={{ p: 2, mb: 2 }}>
        <TextField fullWidth value={text} onChange={e => setText(e.target.value)} placeholder="New Task" />
        <Button variant="contained" sx={{ mt: 1 }} onClick={add}>Add Task</Button>
        <Button variant="outlined" sx={{ mt: 1, ml: 1 }} onClick={clearAll}>Clear All</Button>
      </Paper>

      <Paper sx={{ p: 2 }}>
        <List>
          {tasks.map(t => (
            <ListItem key={t.id} secondaryAction={
              <IconButton edge="end" onClick={() => remove(t.id)}>
                <DeleteIcon />
              </IconButton>
            }>
              <Checkbox checked={!!t.done} onChange={() => toggleDone(t.id)} />
              <ListItemText primary={t.text} sx={{ textDecoration: t.done ? "line-through" : "none" }} />
            </ListItem>
          ))}
          {!tasks.length && <Box sx={{ p: 2 }}>No tasks yet.</Box>}
        </List>
      </Paper>
    </Box>
  );
}