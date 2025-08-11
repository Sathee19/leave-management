import React from "react";

export default function AppContainer({ children }) {
  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h1>Employee Leave Management</h1>
      {children}
    </div>
  );
}