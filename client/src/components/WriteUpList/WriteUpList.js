import React from 'react'
import './styles.css';
import { WriteUpListItem } from '../WriteUpListItem/WriteUpListItem';
import { useWriteUpListContext } from '../WriteUpListContext/WriteUpListContext';
import { WriteUpAddItem } from '../WriteUpAddItem/WriteUpAddItem';

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
                <WriteUpAddItem></WriteUpAddItem>
                {activeList}

            </ol>
        </div>
    )
}