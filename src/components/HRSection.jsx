import React from 'react';
import HRRequestsTable from './HRRequestsTable';

const HRSection = () => {
    return (
        <section id="hr-section">
            <h1>HR Dashboard</h1>
            <fieldset>
                <legend>Leave Requests</legend>
                <div className="filter-options">
                    <div>
                        <label htmlFor="status-filter">Status:</label>
                        <select id="status-filter">
                            <option value="All">All</option>
                            <option value="Pending">Pending</option>
                            <option value="Approved">Approved</option>
                            <option value="Rejected">Rejected</option>
                        </select>
                    </div>
                    <div>
                        <label htmlFor="type-filter">Leave Type:</label>
                        <select id="type-filter">
                            <option value="All">All</option>
                            <option value="CL">Casual Leave</option>
                            <option value="EL">Earned Leave</option>
                            <option value="SL">Sick Leave</option>
                            <option value="ML">Maternity Leave</option>
                        </select>
                    </div>
                    <div>
                        <label htmlFor="search-input">Search:</label>
                        <input type="search" id="search-input" placeholder="ID or Name" />
                    </div>
                    <button type="button" id="clear-filters-btn">Clear Filters</button>
                </div>
                <HRRequestsTable />
            </fieldset>
        </section>
    );
};

export default HRSection;