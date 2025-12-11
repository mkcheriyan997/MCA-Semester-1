import React from "react";
import { Line } from "react-chartjs-2";
import "chart.js/auto";

export default function MiniStatsChart({ items = [] }) {
  const data = {
    labels: items.map((_, i) => i + 1),
    datasets: [
      {
        data: items.map((_, i) => Math.round(Math.max(0, Math.sin(i + 1) * 50 + 50))),
        tension: 0.4,
        borderWidth: 2,
        fill: false
      }
    ]
  };
  const opts = { plugins: { legend: { display: false } }, scales: { x: { display: false }, y: { display: false } } };
  return <div style={{ height: 60 }}><Line data={data} options={opts} /></div>;
}