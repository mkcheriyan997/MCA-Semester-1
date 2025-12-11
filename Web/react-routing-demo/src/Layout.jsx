import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";

export default function Layout() {
  return (
    <div className="app">
      <Sidebar />
      <div className="main">
        <header className="topbar">
          <div className="brand">Library Management</div>
          <div className="top-actions">
            <div className="search-box">
              <input placeholder="Search..." />
            </div>
            <div className="user">Admin</div>
          </div>
        </header>

        <main className="content">
          <Outlet />
        </main>

        <footer className="footer">© {new Date().getFullYear()} Library — Lab Project</footer>
      </div>
    </div>
  );
}