import React from 'react'
import './styles.css';
import { WriteUpListItem } from '../../components/WriteUpListItem/WriteUpListItem';
import { useWriteUpListContext } from '../WriteUpListContext/WriteUpListContext';

export function WriteUpList() {
    
    const activeWorkOrders = useWriteUpListContext();
    console.log('WriteUpListLOG:')
    console.log(activeWorkOrders);

    const testLog = (e) => {
        console.log(e);
    }

    const activeList = activeWorkOrders.map(x => 
        <WriteUpListItem key={x.id} id={x.id} name={x.admin.name} year={x.admin.year} make={x.admin.make}
        model={x.admin.model} color={x.admin.color} status={x.admin.status}></WriteUpListItem>
    )

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