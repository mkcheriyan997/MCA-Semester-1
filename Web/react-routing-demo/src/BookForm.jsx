import React, { useState, useEffect } from "react";

export default function BookForm({ onSubmit, initial = {}, submitLabel = "Add Book" }) {
  const [title, setTitle] = useState(initial.title || "");
  const [author, setAuthor] = useState(initial.author || "");
  const [isbn, setIsbn] = useState(initial.isbn || "");
  const [copies, setCopies] = useState(initial.copies || 1);

  useEffect(() => {
    setTitle(initial.title || "");
    setAuthor(initial.author || "");
    setIsbn(initial.isbn || "");
    setCopies(initial.copies || 1);
  }, [initial]);

  function handleSubmit(e) {
    e.preventDefault();
    if (!title.trim() || !author.trim()) return;
    onSubmit({ title: title.trim(), author: author.trim(), isbn: isbn.trim(), copies: Number(copies) });
    setTitle(""); setAuthor(""); setIsbn(""); setCopies(1);
  }

  return (
    <form className="form" onSubmit={handleSubmit}>
      <label>Title</label>
      <input value={title} onChange={e => setTitle(e.target.value)} placeholder="e.g. Clean Code" />

      <label>Author</label>
      <input value={author} onChange={e => setAuthor(e.target.value)} placeholder="e.g. Robert C. Martin" />

      <label>ISBN</label>
      <input value={isbn} onChange={e => setIsbn(e.target.value)} placeholder="optional" />

      <label>Copies</label>
      <input type="number" min="1" value={copies} onChange={e => setCopies(e.target.value)} />

      <div className="form-actions">
        <button className="btn-primary" type="submit">{submitLabel}</button>
      </div>
    </form>
  );
}
