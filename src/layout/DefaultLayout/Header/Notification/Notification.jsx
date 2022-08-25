import { useRef, useState } from 'react';

// mui
import {
    Badge,
    Box,
    Card,
    CardHeader,
    ClickAwayListener,
    Divider,
    Fade,
    IconButton,
    List,
    Paper,
    Popper,
    Typography,
    ListItemText,
    ListItemButton,
    useMediaQuery,
    Tooltip,
} from '@mui/material';
import { useTheme } from '@mui/material/styles';

// icons
import { AiOutlineBell } from 'react-icons/ai';
import { MdClose } from 'react-icons/md';

// data
import { notifications } from '~/data/dummyData';

// components
import NotificationItem from './NotificationItem';

const Notification = () => {
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
            <Tooltip title="Notification" arrow>
                <IconButton ref={anchorRef} onClick={handleTogglePopper}>
                    <Badge badgeContent={4} color="primary">
                        <AiOutlineBell color="action" />
                    </Badge>
                </IconButton>
            </Tooltip>
            <Popper
                placement="bottom-end"
                open={open}
                transition
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
                                maxWidth: matchSx ? '290px' : '400px',
                            }}
                        >
                            <ClickAwayListener onClickAway={handleClose}>
                                <Card
                                    sx={{
                                        backgroundImage:
                                            theme.palette.mode === 'dark'
                                                ? 'linear-gradient(rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.1))'
                                                : 'inherit',
                                    }}
                                >
                                    <CardHeader
                                        titleTypographyProps={{ variant: 'subtitle2' }}
                                        title={
                                            <Typography variant="subtitle2" sx={{ fontSize: '14px', fontWeight: 600 }}>
                                                Notification
                                            </Typography>
                                        }
                                        action={
                                            <IconButton sx={{ fontSize: '16px' }} onClick={handleClose}>
                                                <MdClose />
                                            </IconButton>
                                        }
                                    />
                                    <Divider />
                                    <List
                                        sx={{
                                            p: 0,
                                            '& .MuiListItemButton-root': {
                                                '& .MuiListItemSecondaryAction-root': {
                                                    mt: '6px',
                                                    ml: 1,
                                                    top: 'auto',
                                                    right: 'auto',
                                                    alignSelf: 'flex-start',
                                                    transform: 'none',
                                                    position: 'relative',
                                                },
                                            },
                                        }}
                                    >
                                        {notifications.map((item, index) => (
                                            <NotificationItem key={index} item={item} />
                                        ))}
                                    </List>
                                    <ListItemButton>
                                        <ListItemText
                                            primary={
                                                <Typography
                                                    sx={{
                                                        color: theme.palette.primary.main,
                                                        fontWeight: 600,
                                                        fontSize: '14px',
                                                    }}
                                                    align="center"
                                                >
                                                    View more
                                                </Typography>
                                            }
                                        />
                                    </ListItemButton>
                                </Card>
                            </ClickAwayListener>
                        </Paper>
                    </Fade>
                )}
            </Popper>
        </Box>
    );
};

export default Notification;
