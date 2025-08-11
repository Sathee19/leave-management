import React, { useState } from "react";

export default function EmployeeLeaveForm({ onSubmit }) {
  const [date, setDate] = useState("");
  const [reason, setReason] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!date || !reason) return;
    onSubmit({ date, reason, status: "Pending" });
    setDate("");
    setReason("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
      />
      <input
        placeholder="Reason"
        value={reason}
        onChange={(e) => setReason(e.target.value)}
      />
      <button type="submit">Submit</button>
    </form>
  );
}