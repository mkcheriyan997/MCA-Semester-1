import Item from "./Item";

function ItemList() {
  const items = ["Laptop", "Mouse", "Keyboard", "Monitor", "Headphones"];
  return (
    <ul
      style={{
        listStyle: "none",
        padding: 0,
        margin: 0,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "12px",
      }}
    >
      {items.map((i, index) => (
        <Item key={index} name={i} />
      ))}
    </ul>
  );
}

export default ItemList;

