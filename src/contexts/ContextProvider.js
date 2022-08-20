import React, { createContext, useContext, useMemo, useState } from 'react';

const StateContext = createContext();

// const initialState = {};

export const ContextProvider = ({ children }) => {
    // States
    const [currentMode, setCurrentMode] = useState(localStorage.getItem('themeMode') ?? 'light');
    const [currentColor, setColor] = useState(localStorage.getItem('themeColor') ?? '#1A97F5');
    const [isOpenSidebar, setOpenSidebar] = useState(false);

    // Handles
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

    const handleToggleSidebar = () => {
        setOpenSidebar(!isOpenSidebar);
    };

    const value = { currentMode, currentColor, setMode, setColorMode, isOpenSidebar, handleToggleSidebar };

    return <StateContext.Provider value={value}>{children}</StateContext.Provider>;
};

export const useStateContext = () => useContext(StateContext);
