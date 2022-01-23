import React from 'react';
import './styles.css';
import { WriteUpMainAdmin } from '../../components/WriteUpMainAdmin/WriteUpMainAdmin';
import { WriteUpMainWorkItem } from '../../components/WriteUpMainWorkItem/WriteUpMainWorkItem';
import { useWriteUpListContext, useWriteUpListContextUpdater } from '../WriteUpListContext/WriteUpListContext';

export function WriteUpMain () {
    //TODO: rework to hold a single writeup object
    const activeWriteUp = useWriteUpListContext();
    console.log('writeUpMain');
    console.log(activeWriteUp);

    return (
        <div className='write-up-main-container'>
            <WriteUpMainAdmin props={activeWriteUp[0]}></WriteUpMainAdmin>
            <WriteUpMainWorkItem props={activeWriteUp[0]}></WriteUpMainWorkItem>
        </div>
    )
}