import React from 'react';
import './styles.css';
import { useWriteUpListContextUpdater } from '../WriteUpListContext/WriteUpListContext';

export function WriteUpAddItem () {

    const contextFunctions = useWriteUpListContextUpdater();
    console.log("Write UP Add");
    console.log(contextFunctions);

    return (
        <button onClick={contextFunctions.addJob}>
            <div className="write-up-list-info-box">
                Add Item
            </div>
        </button>
    )
}