import { createSlice } from '@reduxjs/toolkit';

const customization = createSlice({
    name: 'customization',
    initialState: {
        isOpenSidebar: true,
        isNavItem: ['dashboard'],
        currentMode: localStorage.getItem('themeMode') ?? 'light',
        currentColor: localStorage.getItem('themeColor') ?? '#1A97F5',
    },
    reducers: {
        // toggle sidebar
        openSidebar: (state, action) => {
            state.isOpenSidebar = action.payload;
        },

        // open menu item at id
        activeNavItem: (state, action) => {
            state.isNavItem = action.payload;
        },

        // set dark/light mode
        toggleMode: (state, action) => {
            state.currentMode = action.payload;
            localStorage.setItem('themeMode', action.payload);
        },

        // set color mode
        chooseColorMode: (state, action) => {
            state.currentColor = action.payload;
            localStorage.setItem('themeColor', action.payload);
        },
    },
});

const { reducer, actions } = customization;
export const { openSidebar, activeNavItem, toggleMode, chooseColorMode } = actions;
export default reducer;
