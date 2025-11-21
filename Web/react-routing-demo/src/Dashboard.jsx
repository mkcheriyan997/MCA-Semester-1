import React from "react";
import { useNavigate } from "react-router-dom";
import { useLibrary } from "./context/LibraryContext";

export default function Dashboard() {
  const navigate = useNavigate();
  const { books, members, issues } = useLibrary();

  return (
    <div className="card">
      <div className="card-head">
        <h2>Dashboard</h2>
        <button className="btn-plain" onClick={() => navigate(-1)}>← Back</button>
      </div>

      <div className="grid-3">
        <div className="stat"><div className="stat-label">Books</div><div className="stat-value">{books.length}</div></div>
        <div className="stat"><div className="stat-label">Members</div><div className="stat-value">{members.length}</div></div>
        <div className="stat"><div className="stat-label">Active Issues</div><div className="stat-value">{issues.filter(i => !i.returnedOn).length}</div></div>
      </div>
    </div>
  );
}