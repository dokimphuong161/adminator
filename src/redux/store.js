// Create store
import { configureStore } from '@reduxjs/toolkit';
import customizationReducer from './customizationSlice';

const rootReducer = { customization: customizationReducer };

const store = configureStore({
    reducer: rootReducer,
});

export default store;
