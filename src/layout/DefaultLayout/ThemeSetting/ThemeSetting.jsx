import { useState } from 'react';

// mui
import {
    Box,
    Divider,
    Drawer,
    Fab,
    FormControl,
    FormControlLabel,
    IconButton,
    Paper,
    Radio,
    RadioGroup,
    Tooltip,
    Typography,
    Stack,
} from '@mui/material';
import { alpha, useTheme } from '@mui/material/styles';

// redux
import { useDispatch, useSelector } from 'react-redux';
import { chooseColorMode, toggleMode } from '~/redux/customizationSlice';

// icons
import { FiSettings } from 'react-icons/fi';
import { MdClose } from 'react-icons/md';

// data
import { themeColors } from '~/data/dummyData';

// components
import ThemeCard from './ThemeCard';

const ThemeSetting = () => {
    const currentMode = useSelector((state) => state.customization.currentMode);
    const [open, setOpen] = useState(false);
    const dispatch = useDispatch();
    const handleChange = (e) => {
        const changeMode = toggleMode(e.target.value);
        dispatch(changeMode);
    };
    console.log(open);

    const handleToggleDrawer = () => {
        setOpen((prev) => !prev);
    };
    const handleChooseColor = (color) => {
        const chooseColor = chooseColorMode(color);
        dispatch(chooseColor);
    };

    const theme = useTheme();
    return (
        <>
            <Tooltip title="Customization Theme" arrow>
                <Fab
                    onClick={handleToggleDrawer}
                    sx={{ position: 'fixed', top: '50%', right: '10px' }}
                    size="small"
                    color="primary"
                    aria-label="add"
                >
                    <FiSettings />
                </Fab>
            </Tooltip>
            <Drawer open={open} onClose={handleToggleDrawer} anchor="right">
                <Paper
                    sx={{
                        width: '100%',
                        backgroundImage:
                            theme.palette.mode === 'dark'
                                ? 'linear-gradient(rgba(255, 255, 255, 0.15), rgba(255, 255, 255, 0.15))'
                                : 'inherit',
                    }}
                >
                    <Stack width="100%" display="flex" justifyContent="space-between" alignItems="center">
                        <Typography sx={{ fontWeight: 600 }}>Theme setting</Typography>
                        <IconButton onClick={handleToggleDrawer}>
                            <MdClose />
                        </IconButton>
                    </Stack>
                    <Divider />
                    <Box sx={{ p: '24px' }}>
                        <ThemeCard title="Theme option">
                            <FormControl>
                                <RadioGroup
                                    row
                                    aria-labelledby="demo-row-radio-buttons-group-label"
                                    name="row-radio-buttons-group"
                                    value={currentMode}
                                    onChange={handleChange}
                                >
                                    <FormControlLabel value="light" control={<Radio />} label="Light" />
                                    <FormControlLabel value="dark" control={<Radio />} label="Dark" />
                                </RadioGroup>
                            </FormControl>
                        </ThemeCard>
                        <ThemeCard title="Theme color">
                            {themeColors.map((item, index) => (
                                <Fab
                                    color={item.color}
                                    size="small"
                                    onClick={() => handleChooseColor(item.color)}
                                    sx={{
                                        backgroundColor: item.color,
                                        marginRight: '8px',
                                        '&:hover': { backgroundColor: alpha(item.color, 0.7) },
                                    }}
                                ></Fab>
                            ))}
                        </ThemeCard>
                    </Box>
                </Paper>
            </Drawer>
        </>
    );
};

export default ThemeSetting;
