import { useEffect } from 'react';

// redux
import { useDispatch, useSelector } from 'react-redux';
import { openSidebar } from '~/redux/customizationSlice';

// mui
import { Box, CssBaseline, Divider, Drawer, Typography, useMediaQuery } from '@mui/material';
import { styled, useTheme } from '@mui/material/styles';

// images
import { images } from '~/contansts/images';

// thirty party

// components
import SidebarDesktop from './SidebarDesktop';
import SidebarList from './SidebarList';

// styles
const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    ...theme.mixins.toolbar,
}));

export default function Sidebar() {
    const theme = useTheme();
    const matchDownMd = useMediaQuery(theme.breakpoints.down('lg'));

    const isOpenSidebar = useSelector((state) => state.customization.isOpenSidebar);
    const currentMode = useSelector((state) => state.customization.currentMode);
    const dispatch = useDispatch();

    const handleCloseSidebar = () => {
        const drawerLeftSidebar = openSidebar(!isOpenSidebar);
        dispatch(drawerLeftSidebar);
    };

    // Turn off Sidebar open default on mobile view
    useEffect(() => {
        const defaultClose = openSidebar(!matchDownMd);
        dispatch(defaultClose);
    }, [matchDownMd]);

    const Logo = styled('img')({
        width: 30,
    });

    return (
        <>
            <CssBaseline />
            {!matchDownMd ? (
                <SidebarDesktop variant="permanent" isOpenSidebar={isOpenSidebar}>
                    <DrawerHeader>
                        <Box disablePadding sx={{ display: 'block' }}>
                            <Box
                                sx={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    pl: '14px',
                                    minHeight: '48px',
                                    justifyContent: isOpenSidebar ? 'initial' : 'center',
                                }}
                            >
                                <Logo src={images.LOGO_IMG} alt="Logo" />
                                <Typography
                                    sx={{
                                        opacity: isOpenSidebar ? 1 : 0,
                                        ml: isOpenSidebar ? 2 : 'auto',
                                        fontWeight: 700,
                                        fontSize: '20px',
                                    }}
                                >
                                    pShop
                                </Typography>
                            </Box>
                        </Box>
                    </DrawerHeader>
                    <SidebarList />
                </SidebarDesktop>
            ) : (
                <>
                    <Drawer
                        variant="temporary"
                        open={isOpenSidebar}
                        onClose={handleCloseSidebar}
                        ModalProps={{ keepMounted: true }}
                        sx={{
                            display: { xs: 'block', lg: 'none' },
                            '& .MuiDrawer-paper': {
                                boxSizing: 'border-box',
                                width: 240,
                                borderRight: `1px solid ${theme.palette.divider}`,
                                '&::-webkit-scrollbar': { display: 'none' },
                                backgroundImage:
                                    currentMode === 'dark'
                                        ? 'linear-gradient(rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0.05))'
                                        : 'inherit',
                            },
                        }}
                    >
                        <DrawerHeader>
                            <Box disablePadding sx={{ display: 'block' }}>
                                <Box
                                    sx={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        pl: '14px',
                                        minHeight: 48,
                                        justifyContent: isOpenSidebar ? 'initial' : 'center',
                                    }}
                                >
                                    <Logo src={images.LOGO_IMG} alt="Logo" />
                                    <Typography
                                        sx={{
                                            opacity: isOpenSidebar ? 1 : 0,
                                            ml: isOpenSidebar ? 2 : 'auto',
                                            fontWeight: 700,
                                            fontSize: '20px',
                                        }}
                                    >
                                        pShop
                                    </Typography>
                                </Box>
                            </Box>
                        </DrawerHeader>
                        <SidebarList />
                    </Drawer>
                </>
            )}
        </>
    );
}
