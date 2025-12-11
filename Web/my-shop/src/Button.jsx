// Reusable Button Component (Professional UI)
function Button({ label, onClick, type = "primary" }) {
  const styles = {
    base: {
      padding: "10px 22px",
      borderRadius: "12px",
      border: "none",
      fontSize: "16px",
      fontWeight: "600",
      cursor: "pointer",
      transition: "all 0.25s ease",
      color: "white",
    },

    primary: {
      backgroundColor: "#1d4ed8",
    },

    danger: {
      backgroundColor: "#dc2626",
    },

    success: {
      backgroundColor: "#059669",
    },
  };

  const buttonStyle = { ...styles.base, ...styles[type] };

  return (
    <button
      style={buttonStyle}
      onClick={onClick}
      onMouseEnter={(e) => (e.target.style.opacity = "0.85")}
      onMouseLeave={(e) => (e.target.style.opacity = "1")}
    >
      {label}
    </button>
  );
}

export default Button;

