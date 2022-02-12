import React from 'react';
import './styles.css';
import { WriteUpMainAdmin } from '../WriteUpMainAdmin/WriteUpMainAdmin';
import { WriteUpMainWorkItem } from '../WriteUpMainWorkItem/WriteUpMainWorkItem';
import { useWriteUpActiveContext, useWriteUpActiveContextUpdater } from '../WriteUpActiveContext/WriteUpActiveContext';

export function WriteUpMain () {
    //TODO: rework to hold a single writeup object
    const activeWriteUp = useWriteUpActiveContext();
    console.log('writeUpMain');
    console.log(activeWriteUp);

    const activeWorkItems = activeWriteUp.jobs.map((x, index) => 
        <WriteUpMainWorkItem key={index} title={x.title} entries={x.entries}></WriteUpMainWorkItem>);

    return (
        <div className='write-up-main-container'>
            <WriteUpMainAdmin></WriteUpMainAdmin>
            {activeWorkItems}
        </div>
    )
}