import { AppBar } from '@mui/material';
import { styled } from '@mui/system';

const drawerWidth = 240;
export const MyAppBar = styled(AppBar, {
    shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, isOpenSidebar }) => ({
    borderBottom: '1px',
    borderBottomColor: '#e0e0e0',
    borderBottomStyle: 'solid',
    width: `calc(100% - 58px)`,
    [theme.breakpoints.down('sm')]: {
        width: '100%',
    },
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    ...(isOpenSidebar && {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        [theme.breakpoints.down('sm')]: {
            width: `calc(100% - ${drawerWidth}px)`,
        },
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    }),
}));
