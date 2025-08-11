import React, { useState } from "react";
import HRRequestsTable from "./HRRequestsTable";

export default function HRSection({ showMessage }) {
  const [requests, setRequests] = useState([
    { employee: "John", date: "2025-08-15", reason: "Vacation", status: "Pending" }
  ]);

  const updateStatus = (index, status) => {
    const newReqs = [...requests];
    newReqs[index].status = status;
    setRequests(newReqs);
    showMessage(`Request ${status}`);
  };

  return (
    <div>
      <h2>HR Dashboard</h2>
      <HRRequestsTable data={requests} onUpdate={updateStatus} />
    </div>
  );
}