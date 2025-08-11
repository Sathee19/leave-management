import React, { useState } from "react";
import EmployeeLeaveForm from "./EmployeeLeaveForm";
import EmployeeRequestsTable from "./EmployeeRequestsTable";

export default function EmployeeSection({ user, showMessage }) {
  const [requests, setRequests] = useState([]);

  const addRequest = (request) => {
    setRequests([...requests, request]);
    showMessage("Leave request submitted");
  };

  return (
    <div>
      <h2>Welcome {user.username}</h2>
      <EmployeeLeaveForm onSubmit={addRequest} />
      <EmployeeRequestsTable data={requests} />
    </div>
  );
}