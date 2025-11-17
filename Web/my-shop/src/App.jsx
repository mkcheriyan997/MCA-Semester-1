import Counter from "./Counter";

function App() {
  const items = ["Laptop", "Mouse", "Keyboard", "Monitor", "Headphones"];

  return (
    <div
      style={{
        minHeight: "100vh",
        width: "100vw",
        background: "linear-gradient(to bottom right, #e0f0ff, #f8fbff)",
        padding: "40px 0",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <h1
        style={{
          textAlign: "center",
          color: "#1e3a8a",
          marginBottom: "20px",
          fontSize: "36px",
          fontWeight: "800",
        }}
      >
        Reusable Button Demo
      </h1>

      <div style={{ width: "100%", maxWidth: "500px" }}>
        {items.map((item, i) => (
          <Counter key={i} name={item} />
        ))}
      </div>
    </div>
  );
}

export default App;

