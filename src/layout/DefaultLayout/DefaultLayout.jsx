import React from 'react';
import PropTypes from 'prop-types';
import Header from '~/components/Header';
import Sidebar from '~/components/Sidebar';
import { Box } from '@mui/material';
import Footer from '~/components/Footer';

const DefaultLayout = (props) => {
    return (
        <Box>
            <Header />
            <Box sx={{ display: 'flex' }}>
                <Sidebar />
                {props.children}
            </Box>
            <Footer />
        </Box>
    );
};

DefaultLayout.propTypes = {};

export default DefaultLayout;
