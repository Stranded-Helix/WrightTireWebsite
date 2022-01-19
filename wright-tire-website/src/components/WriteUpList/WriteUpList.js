import React from 'react'
import './styles.css';
import { WriteUpListItem } from '../../components/WriteUpListItem/WriteUpListItem';

export function WriteUpList() {

    const activeTickets = [
        {
            id: "001",
            name: "April Fite",
            vehicle: "2010 Ford Focus",
            color: "blue",
            status: "waiting"
        },
        {
            id: "002",
            name: "Tim Miller",
            vehicle: "2015 Chevy Express 3500",
            color: "white",
            status: "ETA",
        },
        {
            id: "003",
            name: ""
        }
    ]

    const activeList = activeTickets.map(x => 
        <WriteUpListItem key={x.id} name={x.name} vehicle={x.vehicle} color={x.color} status={x.status}></WriteUpListItem>
    )

    console.log(activeList);
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
                {activeList}

            </ol>
        </div>
    )
}