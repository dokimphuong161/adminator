import { useRef, useState } from 'react';

// mui
import { AppBar, Avatar, Box, ClickAwayListener, Fade, Paper, Popper, Toolbar, useMediaQuery } from '@mui/material';
import { alpha, useTheme } from '@mui/material/styles';

// icons
import { BiDotsVerticalRounded } from 'react-icons/bi';

// components
import Profile from '../Profile';
import Search from '../Search';

const MobileSection = () => {
    const theme = useTheme();
    const matchSx = useMediaQuery(theme.breakpoints.down('md'));
    const anchorRef = useRef(null);
    const [open, setOpen] = useState(false);
    console.log(anchorRef.current);

    const handleTogglePopper = () => {
        setOpen((prev) => !prev);
    };

    const handleClose = (event) => {
        if (anchorRef.current && anchorRef.current.contains(event.target)) {
            return;
        }
        setOpen(false);
    };

    return (
        <Box>
            <Avatar
                variant="rounded"
                ref={anchorRef}
                onClick={handleTogglePopper}
                sx={{
                    color: theme.palette.primary.main,
                    backgroundColor: alpha(theme.palette.primary.main, 0.18),
                    marginLeft: '12px',
                }}
            >
                <BiDotsVerticalRounded />
            </Avatar>
            <Popper
                placement="bottom-end"
                open={open}
                transition
                sx={{ width: '100%' }}
                anchorEl={anchorRef.current}
                disablePortal
                popperOptions={{ modifiers: [{ name: 'offset', options: { offset: [!matchSx ? -5 : 0, 8] } }] }}
            >
                {({ TransitionProps }) => (
                    <Fade {...TransitionProps}>
                        <Paper
                            sx={{
                                boxShadow: theme.customShadowns.z1,
                                width: '100%',
                                minWidth: '290px',
                            }}
                        >
                            <ClickAwayListener onClickAway={handleClose}>
                                <AppBar color="inherit">
                                    <Toolbar sx={{ justifyContent: 'space-between' }}>
                                        <Search />
                                        <Profile />
                                    </Toolbar>
                                </AppBar>
                            </ClickAwayListener>
                        </Paper>
                    </Fade>
                )}
            </Popper>
        </Box>
    );
};

export default MobileSection;
