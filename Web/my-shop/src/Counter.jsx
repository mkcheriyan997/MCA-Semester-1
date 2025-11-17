import React, { Component } from "react";
import Button from "./Button";

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
  }

  increment = () => {
    this.setState({ count: this.state.count + 1 });
  };

  decrement = () => {
    if (this.state.count > 0) {
      this.setState({ count: this.state.count - 1 });
    }
  };

  reset = () => {
    this.setState({ count: 0 });
  };

  render() {
    return (
      <div
        style={{
          background: "white",
          padding: "25px 30px",
          borderRadius: "18px",
          width: "100%",
          maxWidth: "420px",
          margin: "20px auto",
          textAlign: "center",
          boxShadow: "0 8px 24px rgba(0,0,0,0.12)",
        }}
      >
        <h2 style={{ color: "#1e3a8a", fontWeight: "700" }}>
          {this.props.name}
        </h2>

        <p style={{ margin: "12px 0 25px", fontSize: "18px", color: "#475569" }}>
          Count:{" "}
          <span style={{ color: "#1d4ed8", fontWeight: "700" }}>
            {this.state.count}
          </span>
        </p>

        <div style={{ display: "flex", justifyContent: "center", gap: "14px" }}>
          <Button label="−" type="danger" onClick={this.decrement} />
          <Button label="+" type="primary" onClick={this.increment} />
          <Button label="Reset" type="success" onClick={this.reset} />
        </div>
      </div>
    );
  }
}

export default Counter;

