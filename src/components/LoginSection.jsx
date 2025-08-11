import React, { useState } from 'react';

const LoginSection = ({ onLogin, errorMessage }) => {
    const [userId, setUserId] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        onLogin(userId, password);
    };

    return (
        <section id="login-section">
            <div id="login-form-container">
                <h1>Login</h1>
                <form id="loginform" onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="ei">User ID:</label>
                        <input
                            type="text"
                            id="ei"
                            value={userId}
                            onChange={(e) => setUserId(e.target.value)}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password:</label>
                        <input
                            type="password"
                            id="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>
                    <button type="submit">Login</button>
                    {errorMessage && <div id="error" className="error-message">{errorMessage}</div>}
                </form>
            </div>
        </section>
    );
};

export default LoginSection;