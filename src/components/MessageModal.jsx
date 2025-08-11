import React from "react";

export default function MessageModal({ message }) {
  return (
    <div style={{ background: "#000", color: "#fff", padding: "10px" }}>
      {message}
    </div>
  );
}