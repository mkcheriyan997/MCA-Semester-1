import React from "react";
import { Drawer, List, ListItemButton, ListItemIcon, ListItemText, Toolbar } from "@mui/material";
import DashboardIcon from "@mui/icons-material/Dashboard";
import TaskIcon from "@mui/icons-material/Checklist";
import NoteIcon from "@mui/icons-material/Note";
import TimerIcon from "@mui/icons-material/Timer";
import EventAvailableIcon from "@mui/icons-material/EventAvailable";
import EventIcon from "@mui/icons-material/Event";
import ScheduleIcon from "@mui/icons-material/Schedule";
import SettingsIcon from "@mui/icons-material/Settings";
import { Link, useLocation } from "react-router-dom";

const drawerWidth = 220;

const items = [
  { text: "Dashboard", icon: <DashboardIcon />, to: "/" },
  { text: "Tasks", icon: <TaskIcon />, to: "/tasks" },
  { text: "Notes", icon: <NoteIcon />, to: "/notes" },
  { text: "Timetable", icon: <ScheduleIcon />, to: "/timetable" },
  { text: "Timer", icon: <TimerIcon />, to: "/timer" },
  { text: "Attendance", icon: <EventAvailableIcon />, to: "/attendance" },
  { text: "Exams", icon: <EventIcon />, to: "/exams" },
  { text: "Settings", icon: <SettingsIcon />, to: "/settings" }
];

export default function Sidebar() {
  const loc = useLocation();
  return (
    <Drawer
      variant="permanent"
      sx={{
        width: drawerWidth,
        [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: "border-box" }
      }}
    >
      <Toolbar />
      <List>
        {items.map((it) => (
          <ListItemButton
            key={it.text}
            component={Link}
            to={it.to}
            selected={loc.pathname === it.to}
          >
            <ListItemIcon>{it.icon}</ListItemIcon>
            <ListItemText primary={it.text} />
          </ListItemButton>
        ))}
      </List>
    </Drawer>
  );
}