import { Box, Paper, Typography } from '@mui/material';
import DataTable from './DataTable/DataTable';
import { useTheme, alpha } from '@mui/material/styles';
import { useEffect, useState } from 'react';
import customerApi from '~/api/customerApi';
import { Padding } from '@mui/icons-material';

const Customer = () => {
    const theme = useTheme();

    return (
        <Box component="main" sx={{ flexGrow: 1, marginTop: '56px' }}>
            <Paper sx={{ backgroundColor: alpha(theme.palette.primary.main, 0.02), padding: 3 }}>
                <Typography sx={{ fontSize: '25px', fontWeight: 700, marginBottom: '12px' }}>Customer Page</Typography>
                <DataTable />
            </Paper>
        </Box>
    );
};

export default Customer;
