import React, { useState } from 'react';

const EmployeeLeaveForm = () => {
    const [name, setName] = useState('');
    const [employeeId, setEmployeeId] = useState('');
    const [leaveFrom, setLeaveFrom] = useState('');
    const [leaveTo, setLeaveTo] = useState('');
    const [purpose, setPurpose] = useState('');
    const [leaveType, setLeaveType] = useState('CL');
    const [totalLeaves] = useState(14);
    const [leaveTaken] = useState(0);
    const [remainingLeaves, setRemainingLeaves] = useState(totalLeaves - leaveTaken);
    const [currentRequestDays, setCurrentRequestDays] = useState('');

    const calculateWorkingDays = (startDate, endDate) => {
        let count = 0;
        const currentDate = new Date(startDate);
        while (currentDate <= endDate) {
            const dayOfWeek = currentDate.getDay();
            if (dayOfWeek !== 0) {
                count++;
            }
            currentDate.setDate(currentDate.getDate() + 1);
        }
        return count;
    };

    const handleLeaveFromChange = (e) => {
        const startDate = new Date(e.target.value);
        const endDate = new Date(leaveTo);
        if (endDate && startDate > endDate) {
            setCurrentRequestDays("End date cannot be before start date.");
        } else {
            const workingDays = calculateWorkingDays(startDate, endDate);
            setCurrentRequestDays(`Days for this request (excluding Sundays): ${workingDays}`);
        }
        setLeaveFrom(e.target.value);
    };

    const handleLeaveToChange = (e) => {
        const endDate = new Date(e.target.value);
        const startDate = new Date(leaveFrom);
        if (startDate && endDate < startDate) {
            setCurrentRequestDays("End date cannot be before start date.");
        } else {
            const workingDays = calculateWorkingDays(startDate, endDate);
            setCurrentRequestDays(`Days for this request (excluding Sundays): ${workingDays}`);
        }
        setLeaveTo(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Logic to handle form submission and leave request storage
    };

    return (
        <form id="employee-leave-form" onSubmit={handleSubmit}>
            <div className="employeedetails">
                <table className="emptable">
                    <tbody>
                        <tr>
                            <td><label htmlFor="name">Employee Name:</label></td>
                            <td><input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} required /></td>
                        </tr>
                        <tr>
                            <td><label htmlFor="eidd">Employee ID:</label></td>
                            <td><input type="number" id="eidd" value={employeeId} onChange={(e) => setEmployeeId(e.target.value)} required /></td>
                        </tr>
                        <tr>
                            <td><label htmlFor="lfd">Leave From:</label></td>
                            <td><input type="date" id="lfd" value={leaveFrom} onChange={handleLeaveFromChange} required /></td>
                        </tr>
                        <tr>
                            <td><label htmlFor="ltd">Leave To:</label></td>
                            <td><input type="date" id="ltd" value={leaveTo} onChange={handleLeaveToChange} required /></td>
                        </tr>
                        <tr>
                            <td colSpan="2">
                                <div id="current-request-days" className="leave-days-info">{currentRequestDays}</div>
                            </td>
                        </tr>
                        <tr>
                            <td><label htmlFor="lpd">Purpose:</label></td>
                            <td><textarea id="lpd" value={purpose} onChange={(e) => setPurpose(e.target.value)} cols="60" rows="2" placeholder="for example;- medical checkup..." required></textarea></td>
                        </tr>
                        <tr>
                            <td><label htmlFor="leavetype">Leave Type:</label></td>
                            <td>
                                <select id="leavetype" value={leaveType} onChange={(e) => setLeaveType(e.target.value)}>
                                    <option value="CL">Casual Leave</option>
                                    <option value="EL">Earned Leave</option>
                                    <option value="SL">Sick Leave</option>
                                    <option value="ML">Maternity Leave</option>
                                </select>
                            </td>
                        </tr>
                    </tbody>
                </table>
                <table className="leavetable">
                    <tbody>
                        <tr>
                            <td><label htmlFor="tl">Total Leaves</label></td>
                            <td><input type="text" id="tl" value={totalLeaves} readOnly /></td>
                        </tr>
                        <tr>
                            <td><label htmlFor="let">Leave Taken</label></td>
                            <td><input type="text" id="let" value={leaveTaken} readOnly /></td>
                        </tr>
                        <tr>
                            <td><label htmlFor="rl">Remaining Leaves</label></td>
                            <td><input type="text" id="rl" value={remainingLeaves} readOnly /></td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div className="form-button-container">
                <button type="submit">Add Request</button>
            </div>
        </form>
    );
};

export default EmployeeLeaveForm;