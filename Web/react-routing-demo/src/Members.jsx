import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useLibrary } from "./context/LibraryContext";
import MemberForm from "./MemberForm";
import MemberTable from "./MemberTable";

export default function Members() {
  const navigate = useNavigate();
  const { members, addMember, updateMember, removeMember } = useLibrary();
  const [editing, setEditing] = useState(null);
  const [q, setQ] = useState("");

  const filtered = members.filter(m =>
    m.name.toLowerCase().includes(q.toLowerCase()) || (m.email || "").toLowerCase().includes(q.toLowerCase())
  );

  function handleSubmit(member) {
    if (editing) { updateMember(editing.id, member); setEditing(null); }
    else addMember(member);
  }

  return (
    <div className="card">
      <div className="card-head">
        <h2>Members</h2>
        <button className="btn-plain" onClick={() => navigate(-1)}>← Back</button>
      </div>

      <div className="card-grid">
        <div>
          <input className="search" placeholder="Search members" value={q} onChange={e => setQ(e.target.value)} />
          <MemberTable data={filtered} onEdit={m => setEditing(m)} onDelete={removeMember} />
        </div>

        <div className="side">
          <h3>{editing ? "Edit Member" : "Add Member"}</h3>
          <MemberForm initial={editing || {}} onSubmit={handleSubmit} submitLabel={editing ? "Save" : "Add Member"} />
          {editing && <button className="btn-plain mt" onClick={() => setEditing(null)}>Cancel</button>}
        </div>
      </div>
    </div>
  );
}