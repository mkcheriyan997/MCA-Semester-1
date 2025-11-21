import React from "react";

export default function BookTable({ data = [], onEdit, onDelete }) {
  return (
    <div className="table-wrap">
      <table className="table">
        <thead>
          <tr>
            <th>Title</th>
            <th>Author</th>
            <th>ISBN</th>
            <th>Copies</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {data.length === 0 && <tr><td colSpan="5" className="muted">No books</td></tr>}
          {data.map(b => (
            <tr key={b.id}>
              <td>{b.title}</td>
              <td>{b.author}</td>
              <td>{b.isbn || "-"}</td>
              <td>{b.copies}</td>
              <td>
                <button className="btn-plain" onClick={() => onEdit(b)}>Edit</button>
                <button className="btn-danger" onClick={() => onDelete(b.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
