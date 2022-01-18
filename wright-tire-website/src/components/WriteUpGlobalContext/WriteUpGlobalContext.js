import React, { useContext, useState } from 'react';

const WriteUpGlobalContext = React.createContext();
const WriteUpGlobalContextUpdater = React.createContext();

export function useWriteUpGlobalContext() {
    return useContext(WriteUpGlobalContext);
}

export function useWriteUpGlobalContextUpdater() {
    return useContext(WriteUpGlobalContextUpdater);
}

export function WriteUpGlobalProvider({children}) {


    return (
        <WriteUpGlobalContext.Provider value={WriteUpGlobalContext}>
            <WriteUpGlobalContextUpdater.Provider value=''>
                {children}
            </WriteUpGlobalContextUpdater.Provider>
        </WriteUpGlobalContext.Provider>
    )
}