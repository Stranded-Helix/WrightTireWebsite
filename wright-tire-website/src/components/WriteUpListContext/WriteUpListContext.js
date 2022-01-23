import React, { useContext, useState } from 'react';

const WriteUpListContext = React.createContext();
const WriteUpListContextUpdater = React.createContext();

const writeUpLists = [
    {
        id: '001',
        admin: {
            name: 'April Fite',
            color: 'brown',
            status: 'waiting',
            invoice: '',
            key: '',
            year: 2015,
            make: 'Ford',
            model: 'F-250',
            mileage: 0,
            license: '',
            status: 'waiting',
        },
        jobs: [
            {
            line: 1,
            title: '',
            entries: [
                {
                    question: '',
                    response: '',
                }
            ]
        }
        ]

    },
    {
        id: '002',
        admin: {
            name: 'Garrett Fite',
            color: 'blue',
            status: 'waiting',
            invoice: '',
            key: '',
            year: 2010,
            make: 'Ford',
            model: 'Focus',
            mileage: 0,
            license: '',
            status: 'waiting',
        },
        jobs: [
            {
            line: 1,
            title: '',
            entries: [
                {
                    question: '',
                    response: '',
                }
            ]
        }
        ]

    },
    {
        id: '003',
        admin: {
            name: 'April Fite',
            color: 'blue',
            status: 'waiting',
            invoice: '',
            key: '',
            year: 2010,
            make: 'Ford',
            model: 'Focus',
            mileage: 0,
            license: '',
            status: 'waiting',
        },
        jobs: [
            {
            line: 1,
            title: '',
            entries: [
                {
                    question: '',
                    response: '',
                }
            ]
        }
        ]

    },
]

export function useWriteUpListContext() {
    return useContext(WriteUpListContext);
}

export function useWriteUpListContextUpdater() {
    return useContext(WriteUpListContextUpdater);
}

export function WriteUpListProvider({children}) {

    const [writeUpList, setWriteUpList] = useState(
        writeUpLists
    )

    return (
        <WriteUpListContext.Provider value={writeUpList}>
            <WriteUpListContextUpdater.Provider value=''>
                {children}
            </WriteUpListContextUpdater.Provider>
        </WriteUpListContext.Provider>
    )
}