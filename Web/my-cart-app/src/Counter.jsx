import React, { Component } from "react";

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
  }

  increment = () => {
    const newCount = this.state.count + 1;
    this.setState({ count: newCount });
    this.props.onChange(1, this.props.price);
  };

  decrement = () => {
    if (this.state.count > 0) {
      const newCount = this.state.count - 1;
      this.setState({ count: newCount });
      this.props.onChange(-1, this.props.price);
    }
  };

  render() {
    return (
      <div
        style={{
          backgroundColor: "#f8fbff",
          borderRadius: "15px",
          padding: "20px 25px",
          boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
          width: "100%",
          maxWidth: "420px",
          margin: "15px auto",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <p
          style={{
            fontSize: "20px",
            fontWeight: "600",
            marginBottom: "6px",
            color: "#002c5f",
          }}
        >
          {this.props.name}
        </p>

        <p
          style={{
            color: "#555",
            fontWeight: "500",
            marginBottom: "15px",
            fontSize: "16px",
          }}
        >
          Price: <span style={{ color: "#0047AB" }}>₹{this.props.price}</span>
        </p>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "20px",
          }}
        >
          <button
            onClick={this.decrement}
            style={{
              backgroundColor: "#e63946",
              color: "white",
              border: "none",
              padding: "8px 18px",
              borderRadius: "10px",
              fontSize: "18px",
              cursor: "pointer",
            }}
          >
            -
          </button>

          <span
            style={{
              fontSize: "22px",
              fontWeight: "bold",
              color: "#1d3557",
              minWidth: "25px",
              textAlign: "center",
            }}
          >
            {this.state.count}
          </span>

          <button
            onClick={this.increment}
            style={{
              backgroundColor: "#457b9d",
              color: "white",
              border: "none",
              padding: "8px 18px",
              borderRadius: "10px",
              fontSize: "18px",
              cursor: "pointer",
            }}
          >
            +
          </button>
        </div>
      </div>
    );
  }
}

export default Counter;
