import React from 'react'
import './styles.css';
import { WriteUpListItem } from '../../components/WriteUpListItem/WriteUpListItem';

export function WriteUpList() {
    return (
        <div className="write-up-search-bar">
            Search ________________
            <ol>
                <li className="test-old">
                    <div className="write-up-list-info-box">
                    <div>Test</div>
                    <div>Test Vehicle</div>
                    </div>
                    
                    <div className="">Not Confirmed</div>
                </li>
                <WriteUpListItem name = 'Garrett Fite' vehicle= '2018 Ford Focus' color='blue' status='waiting'></WriteUpListItem>
            </ol>
        </div>
    )
}