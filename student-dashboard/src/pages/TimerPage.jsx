import React, { useState, useRef } from "react";
import { Box, Paper, Button, TextField, Typography, List, ListItem } from "@mui/material";
import useLocalStorage from "../hooks/useLocalStorage";

export default function TimerPage() {
  const [mins, setMins] = useState(25);
  const [display, setDisplay] = useState("00:00");
  const [history, setHistory] = useLocalStorage("timerHistory", []);
  const ref = useRef(null);
  const remaining = useRef(0);

  function start() {
    remaining.current = Math.max(1, Number(mins)) * 60;
    clearInterval(ref.current);
    ref.current = setInterval(() => {
      if (remaining.current <= 0) {
        clearInterval(ref.current);
        setDisplay("00:00");
        // save to history
        const item = { id: Date.now(), minutes: Number(mins), date: new Date().toISOString().slice(0,10), type: "pomodoro" };
        setHistory([item, ...history].slice(0, 50));
        return;
      }
      remaining.current -= 1;
      const m = Math.floor(remaining.current / 60), s = remaining.current % 60;
      setDisplay(`${String(m).padStart(2,"0")}:${String(s).padStart(2,"0")}`);
    }, 1000);
  }
  function stop(){ clearInterval(ref.current); }
  function reset(){ stop(); setDisplay("00:00"); remaining.current = 0; }

  function clearHistory(){ setHistory([]); }

  return (
    <Box>
      <Paper sx={{ p: 2, mb: 2 }}>
        <Typography variant="h6">Timer</Typography>
        <TextField value={mins} onChange={e=>setMins(e.target.value)} type="number" sx={{ width: 120 }} />
        <Button onClick={start} sx={{ ml: 1 }}>Start</Button>
        <Button onClick={stop} sx={{ ml: 1 }}>Stop</Button>
        <Button onClick={reset} sx={{ ml: 1 }}>Reset</Button>
        <Typography sx={{ mt: 2, fontSize: 22 }}>Time: {display}</Typography>
      </Paper>

      <Paper sx={{ p: 2 }}>
        <Typography variant="h6">Timer History</Typography>
        <Button variant="text" color="error" onClick={clearHistory}>Clear History</Button>
        <List>
          {history.map(h => <ListItem key={h.id}>{h.date} — {h.minutes} min</ListItem>)}
          {!history.length && <Box sx={{ p: 2 }}>No history yet.</Box>}
        </List>
      </Paper>
    </Box>
  );
}
