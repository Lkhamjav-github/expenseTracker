import React, { useState, createContext } from 'react'

export const AddContext = createContext('');
const AddProvider = ({ children }) => {
    const [add, setAdd] = useState('added');
    console.log("setContext", add)
    return (
        <AddContext.Provider value={{ add, setAdd }}>
            {children}
        </AddContext.Provider>
    );
};

export default AddProvider;