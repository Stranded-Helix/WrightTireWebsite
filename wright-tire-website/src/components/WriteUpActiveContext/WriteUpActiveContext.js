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

    const updateActiveWriteUp = (input) => setActiveWriteUps(input);

    const changeActiveWriteUp = (input) => setActiveWriteUps(writeUpList[input-1]);

    const writeUpActiveContextFunctions = {
        updateActiveWriteUp: updateActiveWriteUp,
        changeActiveWriteUp: changeActiveWriteUp,

    }
          

    //const updateActiveWriteUp = (writeUp) => setActiveWriteUps(writeUp)

    return (
        <WriteUpActiveContext.Provider value={activeWriteUps}>
            <WriteUpActiveContextUpdater.Provider value={writeUpActiveContextFunctions}>
                {children}
            </WriteUpActiveContextUpdater.Provider>
        </WriteUpActiveContext.Provider>
    )
}