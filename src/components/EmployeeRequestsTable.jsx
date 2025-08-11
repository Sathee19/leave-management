import React from 'react';

const EmployeeRequestsTable = ({ requests }) => {
    return (
        <div className="my-requests-container">
            <h2>My Leave Requests</h2>
            <table>
                <thead>
                    <tr>
                        <th>From</th>
                        <th>To</th>
                        <th>Purpose</th>
                        <th>Type</th>
                        <th>Days (Working)</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    {requests.length === 0 ? (
                        <tr>
                            <td colSpan="6">No leave requests submitted yet.</td>
                        </tr>
                    ) : (
                        requests.map((request, index) => (
                            <tr key={index}>
                                <td>{request.from}</td>
                                <td>{request.to}</td>
                                <td>{request.purpose}</td>
                                <td>{request.type}</td>
                                <td>{request.days}</td>
                                <td><span className={`status-badge ${request.status}`}>{request.status}</span></td>
                            </tr>
                        ))
                    )}
                </tbody>
            </table>
        </div>
    );
};

export default EmployeeRequestsTable;