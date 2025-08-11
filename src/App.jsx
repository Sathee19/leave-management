import React, { useState, useEffect } from 'react';
import AppContainer from './components/AppContainer';
import './styles/main.css';

const App = () => {
    const [loggedInUser, setLoggedInUser] = useState(null);

    useEffect(() => {
        const user = JSON.parse(localStorage.getItem("loggedInUser"));
        setLoggedInUser(user);
    }, []);

    const handleLogout = () => {
        localStorage.removeItem("loggedInUser");
        setLoggedInUser(null);
    };

    return (
        <div>
            <AppContainer loggedInUser={loggedInUser} onLogout={handleLogout} />
        </div>
    );
};

export default App;