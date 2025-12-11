import React from "react";

export default function MemberTable({ data = [], onEdit, onDelete }) {
  return (
    <div className="table-wrap">
      <table className="table">
        <thead>
          <tr><th>Name</th><th>Email</th><th>Actions</th></tr>
        </thead>
        <tbody>
          {data.length === 0 && <tr><td colSpan="3" className="muted">No members</td></tr>}
          {data.map(m => (
            <tr key={m.id}>
              <td>{m.name}</td>
              <td>{m.email || "-"}</td>
              <td>
                <button className="btn-plain" onClick={() => onEdit(m)}>Edit</button>
                <button className="btn-danger" onClick={() => onDelete(m.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
