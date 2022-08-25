// mui
import { Avatar, Box, IconButton, Paper, Toolbar, useMediaQuery } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { AppBar } from '@mui/material';
import { alpha, styled, useTheme } from '@mui/material/styles';

// icons
import { RiMenu5Fill } from 'react-icons/ri';

// redux
import { openSidebar } from '~/redux/customizationSlice';

// components
import Search from './Search';
import MobileSection from './MobileSection';
import Notification from './Notification';
import Profile from './Profile';

const drawerWidth = 240;
const MyAppBar = styled(AppBar, {
    shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, isOpenSidebar }) => ({
    borderBottom: theme.palette.mode === 'dark' ? '1px solid #263238' : '1px solid #e0e0e0',
    width: `calc(100% - 58px)`,
    [theme.breakpoints.down('sm')]: {
        width: '100%',
    },
    transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    ...(isOpenSidebar && {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    }),
}));
const Header = () => {
    const theme = useTheme();
    const matchDownMd = useMediaQuery(theme.breakpoints.down('lg'));
    // Get state on redux store and dispatch
    const isOpenSidebar = useSelector((state) => state.customization.isOpenSidebar);

    const dispatch = useDispatch();

    const handleSidebar = () => {
        const action = openSidebar(!isOpenSidebar);
        dispatch(action);
    };

    return (
        <MyAppBar sx={{ bgcolor: '#fff' }} elevation={0} position="fixed" isOpenSidebar={isOpenSidebar}>
            <Paper sx={{ borderRadius: 0 }}>
                <Toolbar>
                    <Avatar
                        onClick={handleSidebar}
                        sx={{
                            color: theme.palette.primary.main,
                            backgroundColor: alpha(theme.palette.primary.main, 0.18),
                        }}
                    >
                        <RiMenu5Fill />
                    </Avatar>
                    <IconButton onClick={handleSidebar} color="primary"></IconButton>
                    {!matchDownMd && <Search />}
                    <Box sx={{ flexGrow: 1 }} />
                    <Notification />
                    {!matchDownMd && <Profile />}
                    {matchDownMd && <MobileSection />}
                </Toolbar>
            </Paper>
        </MyAppBar>
    );
};

export default Header;
