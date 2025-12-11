import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useLibrary } from "./context/LibraryContext";
import BookForm from "./BookForm";
import BookTable from "./BookTable";

export default function Books() {
  const navigate = useNavigate();
  const { books, addBook, updateBook, removeBook } = useLibrary();
  const [editing, setEditing] = useState(null);
  const [q, setQ] = useState("");

  const filtered = books.filter(b =>
    b.title.toLowerCase().includes(q.toLowerCase()) || (b.author || "").toLowerCase().includes(q.toLowerCase())
  );

  function handleSubmit(book) {
    if (editing) { updateBook(editing.id, book); setEditing(null); }
    else addBook(book);
  }

  return (
    <div className="card">
      <div className="card-head">
        <h2>Books</h2>
        <button className="btn-plain" onClick={() => navigate(-1)}>← Back</button>
      </div>

      <div className="card-grid">
        <div>
          <input className="search" value={q} onChange={e => setQ(e.target.value)} placeholder="Search..." />
          <BookTable data={filtered} onEdit={b => setEditing(b)} onDelete={removeBook} />
        </div>

        <div className="side">
          <h3>{editing ? "Edit Book" : "Add Book"}</h3>
          <BookForm initial={editing || {}} onSubmit={handleSubmit} submitLabel={editing ? "Save" : "Add Book"} />
          {editing && <button className="btn-plain mt" onClick={() => setEditing(null)}>Cancel</button>}
        </div>
      </div>
    </div>
  );
}