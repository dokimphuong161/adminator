import React from 'react';
import ReactDOM from 'react-dom/client';
import App from '~/App';
import AppThemeProvider from './themes/AppThemeProvider';
import './index.css';
import { ContextProvider } from './contexts/ContextProvider';
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <ContextProvider>
        <AppThemeProvider>
            <BrowserRouter>
                <App />
            </BrowserRouter>
        </AppThemeProvider>
    </ContextProvider>,
);
