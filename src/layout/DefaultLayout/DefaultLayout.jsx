import PropTypes from 'prop-types';

// redux
import { useSelector } from 'react-redux';

// mui
import { Box, CssBaseline } from '@mui/material';
import { styled, useTheme, alpha } from '@mui/material/styles';

// components
import Footer from '../../components/Footer';
import Header from './Header';
import Sidebar from './Sidebar';
import ThemeSetting from './ThemeSetting';

const drawerWidth = 260;

// styles
const Main = styled(Box, { shouldForwardProp: (prop) => prop !== 'open' })(({ theme, isOpenSidebar }) => ({
    ...(isOpenSidebar && {
        borderBottomLeftRadius: 0,
        borderBottomRightRadius: 0,
        backgroundColor: alpha(theme.palette.primary.main, 0.12),
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        [theme.breakpoints.up('md')]: {
            marginLeft: -(drawerWidth - 20),
            width: `calc(100% - ${drawerWidth}px)`,
        },
        [theme.breakpoints.down('md')]: {
            marginLeft: '20px',
            width: `calc(100% - ${drawerWidth}px)`,
            padding: '16px',
        },
        [theme.breakpoints.down('sm')]: {
            marginLeft: '10px',
            width: `calc(100% - ${drawerWidth}px)`,
            padding: '16px',
            marginRight: '10px',
        },
    }),
    ...(!isOpenSidebar && {
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
        marginLeft: 0,
        borderBottomLeftRadius: 0,
        borderBottomRightRadius: 0,
        width: `calc(100% - ${drawerWidth}px)`,
        [theme.breakpoints.down('md')]: {
            marginLeft: '20px',
        },
        [theme.breakpoints.down('sm')]: {
            marginLeft: '10px',
        },
    }),
}));

const DefaultLayout = (props) => {
    const theme = useTheme();
    const isOpenSidebar = useSelector((state) => state.customization.isOpenSidebar);

    return (
        <>
            <Box sx={{ display: 'flex' }}>
                <CssBaseline />
                <Header />
                <Sidebar />
                <Main sx={{ flex: 1 }} theme={theme} open={isOpenSidebar}>
                    {props.children}
                </Main>
                <ThemeSetting />
            </Box>
            <Footer />
        </>
    );
};

DefaultLayout.propTypes = {
    children: PropTypes.node,
};

export default DefaultLayout;
