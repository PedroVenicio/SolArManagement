import React, { useState, createContext } from 'react'

export const ModalContext = createContext()

export const ModalProvider = ({ children }) => {

    const [modals, setModals] = useState(0)

    return (
        <ModalContext.Provider value={{modals, setModals}}>
            {children}
        </ModalContext.Provider>
    )
}
