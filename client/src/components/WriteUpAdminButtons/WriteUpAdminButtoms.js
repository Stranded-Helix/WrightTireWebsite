import React from 'react';
import './styles.css';

export function WriteUpAdminButtons() {
    return (
        <div className="admin-button-container">
            <div className="communications-buttons">
                <button>Waiting on Call</button>
                <button>To be Called</button>
                <button>Called</button>
            </div>
            <div className="day-buttons">
                <button>Mon</button>
                <button>Tues</button>
                <button>Wed</button>
                <button>Thur</button>
                <button>Fri</button>
            </div>
        </div>

    )
}