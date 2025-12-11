import React, { useState } from "react";
import { Box, Paper, TextField, Button, List, ListItem, IconButton, Typography } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import useLocalStorage from "../hooks/useLocalStorage";

export default function NotesPage() {
  const [notes, setNotes] = useLocalStorage("notes", []);
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  function add() {
    if (!title.trim() && !body.trim()) return;
    setNotes([...notes, { id: Date.now(), title, body }]);
    setTitle(""); setBody("");
  }

  function remove(id) {
    setNotes(notes.filter(n => n.id !== id));
  }

  function clearAll() {
    setNotes([]);
  }

  return (
    <Box>
      <Paper sx={{ p: 2, mb: 2 }}>
        <TextField fullWidth placeholder="Title" value={title} onChange={e => setTitle(e.target.value)} sx={{ mb: 1 }} />
        <TextField fullWidth multiline rows={4} placeholder="Content" value={body} onChange={e => setBody(e.target.value)} />
        <Button variant="contained" sx={{ mt: 1 }} onClick={add}>Save Note</Button>
        <Button variant="outlined" sx={{ mt: 1, ml: 1 }} onClick={clearAll}>Clear All</Button>
      </Paper>

      <Paper sx={{ p: 2 }}>
        <Typography variant="h6">Saved Notes</Typography>
        <List>
          {notes.map(n => (
            <ListItem key={n.id} secondaryAction={
              <IconButton edge="end" onClick={() => remove(n.id)}>
                <DeleteIcon />
              </IconButton>
            }>
              <Box>
                <Typography sx={{ fontWeight: 600 }}>{n.title}</Typography>
                <Typography variant="body2">{n.body}</Typography>
              </Box>
            </ListItem>
          ))}
          {!notes.length && <Box sx={{ p: 2 }}>No notes yet.</Box>}
        </List>
      </Paper>
    </Box>
  );
}