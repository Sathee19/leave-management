import React, { useState } from "react";

export default function LoginSection({ onLogin, showMessage }) {
  const [username, setUsername] = useState("");
  const [role, setRole] = useState("employee");

  const handleLogin = () => {
    if (!username) {
      showMessage("Please enter username");
      return;
    }
    onLogin({ username, role });
    showMessage(`Welcome ${username}`);
  };

  return (
    <div>
      <input
        placeholder="Enter username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <select value={role} onChange={(e) => setRole(e.target.value)}>
        <option value="employee">Employee</option>
        <option value="hr">HR</option>
      </select>
      <button onClick={handleLogin}>Login</button>
    </div>
  );
}