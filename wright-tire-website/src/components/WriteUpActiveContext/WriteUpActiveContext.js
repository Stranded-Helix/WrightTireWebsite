import React, { useContext, useState } from 'react';
import { useWriteUpListContext } from '../WriteUpListContext/WriteUpListContext';

const WriteUpActiveContext = React.createContext();
const WriteUpActiveContextUpdater = React.createContext();

export function useWriteUpActiveContext() {
    return useContext(WriteUpActiveContext);
}

export function useWriteUpActiveContextUpdater() {
    return useContext(WriteUpActiveContextUpdater);
}

export function WriteUpActiveProvider({children}) {

    const writeUpList = useWriteUpListContext();

    const [activeWriteUps, setActiveWriteUps] = useState(
        writeUpList[0]
    )

    //Might need to change to not return setActive...
    const changeActiveWriteUp = (number) => setActiveWriteUps(writeUpList[number]);

    const updateActiveWriteUp = (writeUp) => setActiveWriteUps(writeUp)

    return (
        <WriteUpActiveContext.Provider value={activeWriteUps}>
            <WriteUpActiveContextUpdater.Provider value={changeActiveWriteUp, updateActiveWriteUp}>
                {children}
            </WriteUpActiveContextUpdater.Provider>
        </WriteUpActiveContext.Provider>
    )
}