import React, { Component } from "react";
import Counter from "./Counter";

class Cart extends Component {
  constructor() {
    super();
    this.state = { totalItems: 0, totalPrice: 0 };
  }

  handleItemChange = (change, price) => {
    this.setState({
      totalItems: this.state.totalItems + change,
      totalPrice: this.state.totalPrice + change * price,
    });
  };

  render() {
    const products = [
      { name: "Laptop", price: 75000 },
      { name: "Mouse", price: 1500 },
      { name: "Keyboard", price: 2500 },
      { name: "Monitor", price: 12000 },
      { name: "Headphones", price: 3500 },
    ];

    return (
      <div
        style={{
          fontFamily: "Poppins, sans-serif",
          height: "100vh",
          width: "100vw",
          margin: 0,
          padding: 0,
          backgroundColor: "#e6f0ff",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            backgroundColor: "white",
            borderRadius: "20px",
            boxShadow: "0 6px 20px rgba(0,0,0,0.15)",
            width: "95%",
            maxWidth: "600px",
            height: "90vh", 
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            padding: "25px 30px",
          }}
        >
          {/* Header */}
          <div style={{ textAlign: "center" }}>
            <h2 style={{ color: "#003366", marginBottom: "10px" }}>
              🛒 Shopping Cart
            </h2>
            <p style={{ color: "#555", fontSize: "16px" }}>
              Adjust quantities for each product below:
            </p>
          </div>

          {/* Product list */}
          <div
            style={{
              flexGrow: 1,
              overflowY: "auto",
              margin: "20px 0",
              paddingRight: "5px",
            }}
          >
            {products.map((item, index) => (
              <Counter
                key={index}
                name={item.name}
                price={item.price}
                onChange={this.handleItemChange}
              />
            ))}
          </div>

          {/* Bottom Summary */}
          <div
            style={{
              borderTop: "2px solid #ddd",
              paddingTop: "10px",
              textAlign: "center",
            }}
          >
            <h3 style={{ color: "#1d3557", fontSize: "18px", margin: "5px 0" }}>
              🧾 Total Items:{" "}
              <span style={{ color: "#0047AB" }}>{this.state.totalItems}</span>
            </h3>
            <h3 style={{ color: "#1d3557", fontSize: "18px", margin: "5px 0" }}>
              💰 Total Amount:{" "}
              <span style={{ color: "green" }}>₹{this.state.totalPrice}</span>
            </h3>
          </div>
        </div>
      </div>
    );
  }
}

export default Cart;

