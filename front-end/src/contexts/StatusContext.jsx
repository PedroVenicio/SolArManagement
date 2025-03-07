import React, { useState, createContext } from 'react'

export const StatusContext = createContext();

export const StatusProvider = ({ children }) => {
    
    const [status, setStatus] = useState('cliente')

    return (
        <StatusContext.Provider value={{status, setStatus}}>
            {children}
        </StatusContext.Provider>
    )
}