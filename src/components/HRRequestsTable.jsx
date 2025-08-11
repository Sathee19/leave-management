import React from 'react';
import { useState, useEffect } from 'react';

const HRRequestsTable = ({ requests, onUpdateStatus }) => {
    const [filteredRequests, setFilteredRequests] = useState(requests);
    const [searchTerm, setSearchTerm] = useState('');
    const [statusFilter, setStatusFilter] = useState('All');
    const [typeFilter, setTypeFilter] = useState('All');

    useEffect(() => {
        filterRequests();
    }, [requests, searchTerm, statusFilter, typeFilter]);

    const filterRequests = () => {
        let filtered = requests;

        if (searchTerm) {
            filtered = filtered.filter(request =>
                request.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                request.id.includes(searchTerm)
            );
        }

        if (statusFilter !== 'All') {
            filtered = filtered.filter(request => request.status === statusFilter);
        }

        if (typeFilter !== 'All') {
            filtered = filtered.filter(request => request.type === typeFilter);
        }

        setFilteredRequests(filtered);
    };

    return (
        <div>
            <div className="filter-options">
                <input
                    type="search"
                    placeholder="Search by ID or Name"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
                <select value={statusFilter} onChange={(e) => setStatusFilter(e.target.value)}>
                    <option value="All">All</option>
                    <option value="Pending">Pending</option>
                    <option value="Approved">Approved</option>
                    <option value="Rejected">Rejected</option>
                </select>
                <select value={typeFilter} onChange={(e) => setTypeFilter(e.target.value)}>
                    <option value="All">All</option>
                    <option value="CL">Casual Leave</option>
                    <option value="EL">Earned Leave</option>
                    <option value="SL">Sick Leave</option>
                    <option value="ML">Maternity Leave</option>
                </select>
            </div>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Id</th>
                        <th>From</th>
                        <th>To</th>
                        <th>Purpose</th>
                        <th>Type</th>
                        <th>Days (Working)</th>
                        <th>Status</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {filteredRequests.length === 0 ? (
                        <tr>
                            <td colSpan="9">No leave requests found matching your criteria.</td>
                        </tr>
                    ) : (
                        filteredRequests.map((request, index) => (
                            <tr key={index}>
                                <td>{request.name}</td>
                                <td>{request.id}</td>
                                <td>{request.from}</td>
                                <td>{request.to}</td>
                                <td>{request.purpose}</td>
                                <td>{request.type}</td>
                                <td>{request.days}</td>
                                <td><span className={`status-badge ${request.status}`}>{request.status}</span></td>
                                <td>
                                    <button onClick={() => onUpdateStatus(index, 'Approved')}>Approve</button>
                                    <button onClick={() => onUpdateStatus(index, 'Rejected')}>Reject</button>
                                </td>
                            </tr>
                        ))
                    )}
                </tbody>
            </table>
        </div>
    );
};

export default HRRequestsTable;