import React from "react";

export default function HRRequestsTable({ data, onUpdate }) {
  return (
    <table border="1" cellPadding="5">
      <thead>
        <tr>
          <th>Employee</th>
          <th>Date</th>
          <th>Reason</th>
          <th>Status</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {data.length === 0 ? (
          <tr>
            <td colSpan="5">No requests</td>
          </tr>
        ) : (
          data.map((req, i) => (
            <tr key={i}>
              <td>{req.employee}</td>
              <td>{req.date}</td>
              <td>{req.reason}</td>
              <td>{req.status}</td>
              <td>
                <button onClick={() => onUpdate(i, "Approved")}>Approve</button>
                <button onClick={() => onUpdate(i, "Rejected")}>Reject</button>
              </td>
            </tr>
          ))
        )}
      </tbody>
    </table>
  );
}