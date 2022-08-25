import { useRef, useState } from 'react';

// mui
import {
    Avatar,
    Box,
    ButtonBase,
    Card,
    CardHeader,
    ClickAwayListener,
    Fade,
    IconButton,
    Paper,
    Popper,
    Stack,
    Tab,
    Tabs,
    Typography,
    useMediaQuery,
} from '@mui/material';
import { useTheme } from '@mui/material/styles';

// icons
import { AiOutlineSetting } from 'react-icons/ai';
import { BiUser } from 'react-icons/bi';
import { MdClose } from 'react-icons/md';

// components
import { images } from '~/contansts/images';
import ProfileAccount from './ProfileAccount';
import ProfileSetting from './ProfileSetting';

// tab panel wrapper
const TabPanel = ({ children, value, index, ...other }) => {
    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`profile-tabpanel-${index}`}
            aria-labelledby={`profile-tab-${index}`}
            {...other}
        >
            {value === index && children}
        </div>
    );
};
const a11yProps = (index) => {
    return {
        id: `profile-tab-${index}`,
        'aria-controls': `profile-tabpanel-${index}`,
    };
};
const Profile = () => {
    const theme = useTheme();
    const matchSx = useMediaQuery(theme.breakpoints.down('md'));
    const anchorRef = useRef(null);
    const [open, setOpen] = useState(false);
    const [value, setValue] = useState(0);
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
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <Box>
            <ButtonBase ref={anchorRef} onClick={handleTogglePopper}>
                <Stack alignItems="center">
                    <Avatar sx={{ width: '30px', height: '30px' }} src={images.AVT_IMG} alt="Do Kim Phuong" />
                    <Typography variant="subtitle2" sx={{ px: 0, fontWeight: 600 }}>
                        Phuong
                    </Typography>
                </Stack>
            </ButtonBase>
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
                                width: matchSx ? '290px' : '300px',
                            }}
                        >
                            <ClickAwayListener onClickAway={handleClose}>
                                <Box>
                                    <Card
                                        sx={{
                                            backgroundImage:
                                                theme.palette.mode === 'dark'
                                                    ? 'linear-gradient(rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.1))'
                                                    : 'inherit',
                                        }}
                                    >
                                        <CardHeader
                                            avatar={
                                                <Avatar
                                                    sx={{ width: '30px', height: '30px' }}
                                                    alt="User img"
                                                    src={images.AVT_IMG}
                                                ></Avatar>
                                            }
                                            titleTypographyProps={{ variant: 'subtitle2' }}
                                            title={
                                                <Typography
                                                    variant="subtitle2"
                                                    sx={{ fontSize: '14px', fontWeight: 600 }}
                                                >
                                                    Phuong Do
                                                </Typography>
                                            }
                                            subheader={
                                                <Typography sx={{ fontSize: '14px', px: 0 }}>
                                                    Frontend Developer
                                                </Typography>
                                            }
                                            action={
                                                <IconButton sx={{ fontSize: '16px' }} onClick={handleClose}>
                                                    <MdClose />
                                                </IconButton>
                                            }
                                        />
                                        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                                            <Tabs
                                                variant="fullWidth"
                                                value={value}
                                                onChange={handleChange}
                                                aria-label="basic tabs example"
                                            >
                                                <Tab
                                                    sx={{
                                                        display: 'flex',
                                                        flexDirection: 'row',
                                                        wordSpacing: '2px',
                                                        padding: 0,
                                                        minHeight: 0,
                                                    }}
                                                    icon={<BiUser style={{ marginRight: '8px' }} />}
                                                    label="Account"
                                                    {...a11yProps(0)}
                                                />
                                                <Tab
                                                    sx={{
                                                        display: 'flex',
                                                        flexDirection: 'row',
                                                        wordSpacing: '2px',
                                                        minHeight: 0,
                                                    }}
                                                    icon={<AiOutlineSetting style={{ marginRight: '8px' }} />}
                                                    label="Setting"
                                                    {...a11yProps(1)}
                                                />
                                            </Tabs>
                                        </Box>
                                        <TabPanel value={value} index={0}>
                                            <ProfileAccount />
                                        </TabPanel>
                                        <TabPanel value={value} index={1}>
                                            <ProfileSetting />
                                        </TabPanel>
                                    </Card>
                                </Box>
                            </ClickAwayListener>
                        </Paper>
                    </Fade>
                )}
            </Popper>
        </Box>
    );
};

export default Profile;
