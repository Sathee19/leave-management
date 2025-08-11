import React from "react";

export default function EmployeeRequestsTable({ data }) {
  return (
    <table border="1" cellPadding="5">
      <thead>
        <tr>
          <th>Date</th>
          <th>Reason</th>
          <th>Status</th>
        </tr>
      </thead>
      <tbody>
        {data.length === 0 ? (
          <tr>
            <td colSpan="3">No leave requests yet</td>
          </tr>
        ) : (
          data.map((req, i) => (
            <tr key={i}>
              <td>{req.date}</td>
              <td>{req.reason}</td>
              <td>{req.status}</td>
            </tr>
          ))
        )}
      </tbody>
    </table>
  );
}