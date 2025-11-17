import React, { useState } from "react";

const App = () => {
  const [students, setStudents] = useState([
    { id: 1, name: "Anjali" },
    { id: 2, name: "Rahul" },
  ]);
  const [name, setName] = useState("");
  const [editId, setEditId] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name.trim() === "") return alert("Please enter a valid name");

    if (editId) {
      setStudents(
        students.map((s) => (s.id === editId ? { ...s, name } : s))
      );
      setEditId(null);
    } else {
      setStudents([...students, { id: students.length + 1, name: name.trim() }]);
    }
    setName("");
  };

  const handleEdit = (id) => {
    const student = students.find((s) => s.id === id);
    setName(student.name);
    setEditId(id);
  };

  const handleDelete = (id) => {
    setStudents(students.filter((s) => s.id !== id));
  };

  return (
    <div
      style={{
        height: "100vh",
        width: "100vw",
        margin: 0,
        padding: 0,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "linear-gradient(135deg, #eef2ff 0%, #f8fafc 100%)",
        fontFamily: "Segoe UI, sans-serif",
      }}
    >
      <div
        style={{
          backgroundColor: "#ffffff",
          borderRadius: "10px",
          boxShadow: "0 4px 15px rgba(0, 0, 0, 0.08)",
          width: "90%",
          maxWidth: "700px",
          padding: "40px",
        }}
      >
        <h2
          style={{
            color: "#1e293b",
            textAlign: "center",
            marginBottom: "25px",
            fontWeight: "600",
          }}
        >
          Student Management System
        </h2>

        <form
          onSubmit={handleSubmit}
          style={{
            display: "flex",
            gap: "10px",
            marginBottom: "25px",
          }}
        >
          <input
            type="text"
            placeholder="Enter student name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            style={{
              flex: 1,
              padding: "10px 14px",
              borderRadius: "6px",
              border: "1px solid #cbd5e1",
              fontSize: "15px",
              color: "#111827",
              backgroundColor: "#ffffff",
              outlineColor: "#2563eb",
              boxShadow: "inset 0 1px 2px rgba(0,0,0,0.05)",
            }}
          />
          <button
            type="submit"
            style={{
              backgroundColor: "#2563eb",
              color: "#ffffff",
              border: "none",
              borderRadius: "6px",
              padding: "10px 18px",
              fontWeight: "500",
              cursor: "pointer",
              transition: "background-color 0.2s",
            }}
          >
            {editId ? "Update" : "Add"}
          </button>
        </form>

        <table
          style={{
            width: "100%",
            borderCollapse: "collapse",
            border: "1px solid #e5e7eb",
          }}
        >
          <thead>
            <tr style={{ backgroundColor: "#f1f5f9" }}>
              <th
                style={{
                  padding: "10px",
                  textAlign: "left",
                  color: "#334155",
                  fontWeight: "600",
                  borderBottom: "1px solid #e5e7eb",
                }}
              >
                ID
              </th>
              <th
                style={{
                  padding: "10px",
                  textAlign: "left",
                  color: "#334155",
                  fontWeight: "600",
                  borderBottom: "1px solid #e5e7eb",
                }}
              >
                Name
              </th>
              <th
                style={{
                  padding: "10px",
                  textAlign: "center",
                  color: "#334155",
                  fontWeight: "600",
                  borderBottom: "1px solid #e5e7eb",
                }}
              >
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            {students.map((s, i) => (
              <tr
                key={s.id}
                style={{
                  backgroundColor: i % 2 === 0 ? "#ffffff" : "#f9fafb",
                }}
              >
                <td
                  style={{
                    padding: "10px",
                    borderBottom: "1px solid #e5e7eb",
                    color: "#111827",
                  }}
                >
                  {s.id}
                </td>
                <td
                  style={{
                    padding: "10px",
                    borderBottom: "1px solid #e5e7eb",
                    color: "#111827",
                  }}
                >
                  {s.name}
                </td>
                <td
                  style={{
                    padding: "10px",
                    borderBottom: "1px solid #e5e7eb",
                    textAlign: "center",
                  }}
                >
                  <button
                    onClick={() => handleEdit(s.id)}
                    style={{
                      backgroundColor: "#6b7280",
                      color: "#ffffff",
                      border: "none",
                      borderRadius: "4px",
                      padding: "5px 10px",
                      marginRight: "6px",
                      cursor: "pointer",
                    }}
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(s.id)}
                    style={{
                      backgroundColor: "#dc2626",
                      color: "#ffffff",
                      border: "none",
                      borderRadius: "4px",
                      padding: "5px 10px",
                      cursor: "pointer",
                    }}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <p
          style={{
            textAlign: "right",
            marginTop: "15px",
            fontWeight: "500",
            color: "#4b5563",
          }}
        >
          Total Students: {students.length}
        </p>
      </div>
    </div>
  );
};

export default App;
