function Item({ name }) {
  return (
    <li
      style={{
        backgroundColor: "#0047AB",
        color: "white",
        padding: "14px 30px",
        width: "100%",
        maxWidth: "260px",
        borderRadius: "10px",
        fontSize: "18px",
        fontWeight: "bold",
        cursor: "pointer",
        transition: "all 0.3s ease",
        boxShadow: "0 4px 8px rgba(0,0,0,0.2)",
        textAlign: "center",
      }}
      onMouseOver={(e) => {
        e.currentTarget.style.backgroundColor = "#0066CC";
        e.currentTarget.style.transform = "scale(1.03)";
      }}
      onMouseOut={(e) => {
        e.currentTarget.style.backgroundColor = "#0047AB";
        e.currentTarget.style.transform = "scale(1)";
      }}
    >
      {name}
    </li>
  );
}

export default Item;

