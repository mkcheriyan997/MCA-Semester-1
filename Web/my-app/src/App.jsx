import ItemList from "./ItemList";

function App() {
  return (
    <div
      style={{
        fontFamily: "Arial, sans-serif",
        backgroundColor: "#e6f0ff",
        height: "100vh",
        width: "100vw",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          backgroundColor: "white",
          borderRadius: "20px",
          padding: "50px 60px",
          boxShadow: "0 8px 24px rgba(0,0,0,0.2)",
          textAlign: "center",
          minWidth: "320px",
          width: "90%",
          maxWidth: "400px",
        }}
      >
        <h2
          style={{
            color: "#003366",
            marginBottom: "25px",
            letterSpacing: "1px",
          }}
        >
          🛍️ Item List
        </h2>
        <ItemList />
      </div>
    </div>
  );
}

export default App;

