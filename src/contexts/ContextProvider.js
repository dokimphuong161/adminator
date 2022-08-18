import React, { createContext, useContext, useMemo, useState } from 'react';

const StateContext = createContext();

// const initialState = {};

export const ContextProvider = ({ children }) => {
    // Dark/Light mode state
    const [currentMode, setCurrentMode] = useState(localStorage.getItem('themeMode'));

    // Color mode state
    const [curentColor, setColor] = useState(localStorage.getItem('themeColor'));

    const setMode = useMemo(
        () => ({
            toggleSetMode: () => {
                const newCurrentMode = currentMode === 'dark' ? 'light' : 'dark';
                setCurrentMode(newCurrentMode);
                localStorage.setItem('themeMode', newCurrentMode);
            },
        }),
        [currentMode],
    );

    const setColorMode = (color) => {
        const newCurrentColor = color;
        setColor(newCurrentColor);
        localStorage.setItem('themeColor', newCurrentColor);
    };
    // const setColorMode = useMemo(
    //     () => ({
    //         toggleColorMode: (color) => {

    //         },
    //     }),
    //     [curentColor],
    // );

    // Value of StateContext.Provider
    const value = { currentMode, curentColor, setMode, setColorMode };

    return <StateContext.Provider value={value}>{children}</StateContext.Provider>;
};

export const useStateContext = () => useContext(StateContext);
