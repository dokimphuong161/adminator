// mui
import { Box, CssBaseline, ListItem, ListItemIcon, Typography, Divider } from '@mui/material';

// images
import { images } from '~/contansts/images';

// styles
import { Drawer, DrawerHeader } from './sidebarStyle';

// contexts
import { useStateContext } from '~/contexts/ContextProvider';

// components
import SidebarList from './SidebarList';

export default function Sidebar() {
    const { isOpenSidebar } = useStateContext();

    return (
        <>
            <CssBaseline />
            <Drawer variant="permanent" isOpenSidebar={isOpenSidebar}>
                <DrawerHeader>
                    <Box disablePadding sx={{ display: 'block' }}>
                        <ListItem
                            sx={{
                                display: 'flex',
                                alignItems: 'center',
                                pl: '14px',
                                minHeight: 48,
                                justifyContent: isOpenSidebar ? 'initial' : 'center',
                            }}
                        >
                            <ListItemIcon
                                sx={{
                                    minWidth: 0,
                                    mr: isOpenSidebar ? 2 : 'auto',
                                    justifyContent: 'center',
                                }}
                            >
                                <Box component="img" width={30} src={images.LOGO_IMG} />
                            </ListItemIcon>
                            <Box sx={{ opacity: isOpenSidebar ? 1 : 0 }}>
                                <Typography sx={{ fontWeight: 700, fontSize: '20px' }}>pShop</Typography>
                            </Box>
                        </ListItem>
                    </Box>
                </DrawerHeader>
                <Divider />
                <SidebarList />
            </Drawer>
        </>
    );
}
