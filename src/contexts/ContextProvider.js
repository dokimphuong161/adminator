import React, { createContext, useContext, useMemo, useState } from 'react';

const StateContext = createContext();

export const ContextProvider = ({ children }) => {
    // States
    const [currentColor, setColor] = useState(localStorage.getItem('themeColor') ?? '#1A97F5');
    const [openMenu, setOpenMenu] = useState('');
    const [anchorEl, setAnchorEl] = useState(null);

    const setColorMode = (color) => {
        const newCurrentColor = color;
        setColor(newCurrentColor);
        localStorage.setItem('themeColor', newCurrentColor);
    };

    const handleSetAnchorEl = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    const handleOpenMenu = (id) => {
        setOpenMenu(id);
    };

    const value = {
        currentColor,
        setColorMode,
        anchorEl,
        handleSetAnchorEl,
        handleClose,
        openMenu,
        handleOpenMenu,
    };

    return <StateContext.Provider value={value}>{children}</StateContext.Provider>;
};

export const useStateContext = () => useContext(StateContext);
