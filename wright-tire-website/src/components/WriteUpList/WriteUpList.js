import React from 'react'
import './styles.css';
import { WriteUpListItem } from '../../components/WriteUpListItem/WriteUpListItem';

export function WriteUpList() {

    const activeTickets = [
        {
            name: "Garrett Fite",
            vehicle: "2018 Ford Focus",
            color: "blue",
            status: "waiting"
        },
        {
            name: "NTTH",
            vehicle: "2015 Chevy Express 3500",
            color: "white",
            status: "ETA",
        },
        {
            name: ""
        }
    ]

    const activeList = activeTickets.forEach(x => {
        <WriteUpListItem name={x.name} vehicle={x.vehicle} color={x.color} status={x.status}></WriteUpListItem>
        console.log(x);
    })

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
                {/* <WriteUpListItem name = 'Garrett Fite' vehicle= '2018 Ford Focus' color='blue' status='waiting'></WriteUpListItem> */}
                {activeList}

            </ol>
        </div>
    )
}