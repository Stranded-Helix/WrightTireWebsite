import React from 'react';
import './styles.css';
import { useWriteUpActiveContextUpdater } from '../WriteUpActiveContext/WriteUpActiveContext';

export function WriteUpListItem(props) {

    const updateActiveContext = useWriteUpActiveContextUpdater()

    console.log(updateActiveContext);

    const changeWriteUp = (e) => {
        console.log("changeWriteUpEvent");
        console.log(e);
        console.log("parsedInt");
        console.log(parseInt(e.target.id));
        updateActiveContext.changeActiveWriteUp(parseInt(e.target.id));
    }
    return (
        <button id={props.id} onClick={'button', changeWriteUp}>
            <div className="write-up-list-info-box">
                <div>{props.name}</div>
                <div>{`${props.year} ${props.make} ${props.model}`}<div className={`car-color-icon ${props.color}`}></div></div>
            </div>

            <div className="test-waiter">{props.status}</div>
        </button>
    )
}