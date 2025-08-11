import React from 'react';

const MessageModal = ({ message, type, onClose }) => {
    return (
        <div className={`message-modal show ${type}`} style={{ display: message ? 'block' : 'none' }}>
            <div className="modal-content">
                <span className="close-button" onClick={onClose}>&times;</span>
                <p>{message}</p>
            </div>
        </div>
    );
};

export default MessageModal;