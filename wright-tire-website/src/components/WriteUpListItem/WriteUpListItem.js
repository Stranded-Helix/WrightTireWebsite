import React from 'react';
import './styles.css';

export function WriteUpListItem(props) {
    return (
        <button>
            <div className="write-up-list-info-box">
                <div>{props.name}</div>
                <div>{`${props.year} ${props.make} ${props.model}`}<div className={`car-color-icon ${props.color}`}></div></div>
            </div>

            <div className="test-waiter">{props.status}</div>
        </button>
    )
}