import React from 'react';
import EmployeeLeaveForm from './EmployeeLeaveForm';
import EmployeeRequestsTable from './EmployeeRequestsTable';

const EmployeeSection = () => {
    return (
        <section id="employee-section">
            <h1>Employee Leave Form</h1>
            <EmployeeLeaveForm />
            <div className="my-requests-container">
                <h2>My Leave Requests</h2>
                <EmployeeRequestsTable />
            </div>
        </section>
    );
};

export default EmployeeSection;