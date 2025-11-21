import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useLibrary } from "./context/LibraryContext";

export default function IssueReturn() {
  const navigate = useNavigate();
  const { books, members, issues, issueBook, returnBook } = useLibrary();
  const [bookId, setBookId] = useState(books[0]?.id || "");
  const [memberId, setMemberId] = useState(members[0]?.id || "");

  function handleIssue(e) {
    e.preventDefault();
    issueBook(Number(bookId), Number(memberId));
  }

  return (
    <div className="card">
      <div className="card-head">
        <h2>Issue / Return</h2>
        <button className="btn-plain" onClick={() => navigate(-1)}>← Back</button>
      </div>

      <div className="issue-grid">
        <form className="form" onSubmit={handleIssue}>
          <label>Book</label>
          <select value={bookId} onChange={e => setBookId(e.target.value)}>
            {books.map(b => <option key={b.id} value={b.id}>{b.title} ({b.copies} left)</option>)}
          </select>

          <label>Member</label>
          <select value={memberId} onChange={e => setMemberId(e.target.value)}>
            {members.map(m => <option key={m.id} value={m.id}>{m.name}</option>)}
          </select>

          <div className="form-actions">
            <button className="btn-primary" type="submit">Issue Book</button>
          </div>
        </form>

        <div>
          <h3>Active Issues</h3>
          <div className="table-wrap">
            <table className="table">
              <thead><tr><th>Book</th><th>Member</th><th>Issued On</th><th>Action</th></tr></thead>
              <tbody>
                {issues.filter(i => !i.returnedOn).length === 0 && (
                  <tr><td colSpan="4" className="muted">No active issues</td></tr>
                )}

                {issues.filter(i => !i.returnedOn).map(i => (
                  <tr key={i.id}>
                    <td>{books.find(b => b.id === i.bookId)?.title}</td>
                    <td>{members.find(m => m.id === i.memberId)?.name}</td>
                    <td>{new Date(i.issuedOn).toLocaleDateString()}</td>
                    <td><button className="btn-plain" onClick={() => returnBook(i.id)}>Return</button></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}