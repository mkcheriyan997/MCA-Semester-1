import React, { useState } from "react";
import { NavLink } from "react-router-dom";

function Icon({ name }) {
  if (name === "dashboard") return (<svg width="18" height="18" viewBox="0 0 24 24"><path d="M3 13h8V3H3v10zM13 21h8V11h-8v10zM13 3v6h8V3h-8zM3 21h8v-8H3v8z" /></svg>);
  if (name === "books") return (<svg width="18" height="18"><path d="M3 4v16h15V4z" /></svg>);
  if (name === "members") return (<svg width="18" height="18"><circle cx="8" cy="8" r="4" /><circle cx="16" cy="8" r="3" /></svg>);
  if (name === "issue") return (<svg width="18" height="18"><rect x="2" y="4" width="18" height="14" /></svg>);
  return null;
}

export default function Sidebar() {
  const [collapsed, setCollapsed] = useState(false);

  const items = [
    { to: "/", label: "Dashboard", icon: "dashboard" },
    { to: "/books", label: "Books", icon: "books" },
    { to: "/members", label: "Members", icon: "members" },
    { to: "/issue-return", label: "Issue/Return", icon: "issue" },
  ];

  return (
    <aside className={`sidebar ${collapsed ? "collapsed" : ""}`}>
      <div className="sidebar-top">
        <div className="brand-wrap">
          <div className="logo">LIB</div>
          {!collapsed && <span className="brand-text">Library</span>}
        </div>

        <button className="collapse-btn" onClick={() => setCollapsed(s => !s)}>
          {collapsed ? "→" : "←"}
        </button>
      </div>

      <nav className="nav">
        {items.map(i => (
          <NavLink key={i.to} to={i.to} end className={({ isActive }) => "navlink" + (isActive ? " active" : "")}>
            <span className="ic"><Icon name={i.icon} /></span>
            {!collapsed && <span>{i.label}</span>}
          </NavLink>
        ))}
      </nav>

      <div className="sidebar-footer">Lab Demo</div>
    </aside>
  );
}