import MuiDrawer from '@mui/material/Drawer';
import { styled } from '@mui/material/styles';

const drawerWidth = 240;

const openedMixin = (theme) => ({
    width: drawerWidth,
    transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
    }),
    overflowX: 'hidden',
    '&::-webkit-scrollbar': { display: 'none' },
});
const closedMixin = (theme) => ({
    transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: `calc(${theme.spacing(7)} + 2px)`,
    '&::-webkit-scrollbar': { display: 'none' },
});

const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    ...theme.mixins.toolbar,
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(({ theme, isOpenSidebar }) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    [theme.breakpoints.down('sm')]: {
        display: 'none',
    },

    ...(isOpenSidebar && {
        ...openedMixin(theme),
        '& .MuiDrawer-paper': openedMixin(theme),
        [theme.breakpoints.down('sm')]: {
            display: 'block',
        },
    }),
    ...(!isOpenSidebar && {
        ...closedMixin(theme),
        '& .MuiDrawer-paper': closedMixin(theme),
    }),
}));

export { Drawer, DrawerHeader };
