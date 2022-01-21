import React, { useContext, useState } from 'react';

const WriteUpGlobalContext = React.createContext();
const WriteUpGlobalContextUpdater = React.createContext();

const testActiveWriteUps = [
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

export function useWriteUpGlobalContext() {
    return useContext(WriteUpGlobalContext);
}

export function useWriteUpGlobalContextUpdater() {
    return useContext(WriteUpGlobalContextUpdater);
}

export function WriteUpGlobalProvider({children}) {

    const [activeWriteUps, setActiveWriteUps] = useState(
        testActiveWriteUps
    )

    return (
        <WriteUpGlobalContext.Provider value={activeWriteUps}>
            <WriteUpGlobalContextUpdater.Provider value=''>
                {children}
            </WriteUpGlobalContextUpdater.Provider>
        </WriteUpGlobalContext.Provider>
    )
}