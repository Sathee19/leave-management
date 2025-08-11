import React, { useState, useEffect } from 'react';
import LoginSection from './LoginSection';
import EmployeeSection from './EmployeeSection';
import HRSection from './HRSection';
import MessageModal from './MessageModal';
import LogoutButton from './LogoutButton';

const AppContainer = () => {
    const [currentSection, setCurrentSection] = useState('login');
    const [message, setMessage] = useState({ text: '', type: '' });

    useEffect(() => {
        const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));
        if (loggedInUser) {
            setCurrentSection(loggedInUser.role === 'hr' ? 'hr' : 'employee');
        }
    }, []);

    const handleLogout = () => {
        localStorage.removeItem("loggedInUser");
        setCurrentSection('login');
        setMessage({ text: '', type: '' });
    };

    const showMessage = (text, type) => {
        setMessage({ text, type });
        setTimeout(() => setMessage({ text: '', type: '' }), 3000);
    };

    return (
        <div id="app-container">
            <LogoutButton onLogout={handleLogout} />
            <MessageModal message={message.text} type={message.type} />
            {currentSection === 'login' && <LoginSection onLogin={showMessage} />}
            {currentSection === 'employee' && <EmployeeSection />}
            {currentSection === 'hr' && <HRSection />}
        </div>
    );
};

export default AppContainer;