import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { LibraryProvider } from "./context/LibraryContext";
import Layout from "./Layout";
import Dashboard from "./Dashboard";
import Books from "./Books";
import Members from "./Members";
import IssueReturn from "./IssueReturn";

export default function App() {
  return (
    <LibraryProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Dashboard />} />
            <Route path="books" element={<Books />} />
            <Route path="members" element={<Members />} />
            <Route path="issue-return" element={<IssueReturn />} />
          </Route>
        </Routes>
      </Router>
    </LibraryProvider>
  );
}
