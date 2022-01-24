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
    const changeActiveWriteUp = (selector, input) => {

        console.log("changeActiveWriteUp");
        console.log(input);
        console.log(writeUpList[input]);
        // setActiveWriteUps(writeUpList[id]);

        switch (selector) {
            case 'change' :
                //input should be id of write up
                setActiveWriteUps(writeUpList[input-1]);
                break;
            case 'update' :
                //input should be spread operator update of write up
                setActiveWriteUps(input);
                break;
            default: 
            console.error('Selector not chosen, no changes made');
        }

    }
       

    //const updateActiveWriteUp = (writeUp) => setActiveWriteUps(writeUp)

    return (
        <WriteUpActiveContext.Provider value={activeWriteUps}>
            <WriteUpActiveContextUpdater.Provider value={changeActiveWriteUp}>
                {children}
            </WriteUpActiveContextUpdater.Provider>
        </WriteUpActiveContext.Provider>
    )
}