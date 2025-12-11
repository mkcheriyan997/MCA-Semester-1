import React, { createContext, useContext, useState } from "react";

const LibraryContext = createContext();
export function useLibrary() { return useContext(LibraryContext); }

export function LibraryProvider({ children }) {
  const [books, setBooks] = useState([
    { id: 1, title: "Clean Code", author: "Robert C. Martin", isbn: "9780132350884", copies: 3 },
    { id: 2, title: "You Don't Know JS", author: "Kyle Simpson", isbn: "9781491904244", copies: 2 },
  ]);

  const [members, setMembers] = useState([
    { id: 1, name: "Aparna", email: "aparna @example.com" },
    { id: 2, name: "Ravi", email: "ravi @example.com" },
  ]);

  const [issues, setIssues] = useState([]); // {id, bookId, memberId, issuedOn, returnedOn}

  // Books CRUD
  function addBook(book) { setBooks(prev => [...prev, { ...book, id: Date.now() }]); }
  function updateBook(id, updates) { setBooks(prev => prev.map(b => (b.id === id ? { ...b, ...updates } : b))); }
  function removeBook(id) { setBooks(prev => prev.filter(b => b.id !== id)); }

  // Members CRUD
  function addMember(member) { setMembers(prev => [...prev, { ...member, id: Date.now() }]); }
  function updateMember(id, updates) { setMembers(prev => prev.map(m => (m.id === id ? { ...m, ...updates } : m))); }
  function removeMember(id) { setMembers(prev => prev.filter(m => m.id !== id)); }

  // Issue / Return
  function issueBook(bookId, memberId) {
    const book = books.find(b => b.id === bookId);
    if (!book || book.copies < 1) return false;
    const id = Date.now();
    setIssues(prev => [...prev, { id, bookId, memberId, issuedOn: new Date().toISOString(), returnedOn: null }]);
    updateBook(bookId, { copies: book.copies - 1 });
    return true;
  }

  function returnBook(issueId) {
    const issue = issues.find(i => i.id === issueId);
    if (!issue || issue.returnedOn) return false;
    setIssues(prev => prev.map(i => (i.id === issueId ? { ...i, returnedOn: new Date().toISOString() } : i)));
    const book = books.find(b => b.id === issue.bookId);
    if (book) updateBook(book.id, { copies: book.copies + 1 });
    return true;
  }

  return (
    <LibraryContext.Provider value={{ books, members, issues, addBook, updateBook, removeBook, addMember, updateMember, removeMember, issueBook, returnBook }}>
      {children}
    </LibraryContext.Provider>
  );
}
