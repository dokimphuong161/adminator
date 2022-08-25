// redux
import { useSelector } from 'react-redux';
import { alpha } from '@mui/material/styles';

// mui
import { pink } from '@mui/material/colors';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const AppThemeProvider = (props) => {
    const currentMode = useSelector((state) => state.customization.currentMode);
    const currentColor = useSelector((state) => state.customization.currentColor);
    const theme = createTheme({
        typography: {
            allVariants: {
                fontFamily: 'Raleway',
                textTransform: 'none',
                fontWeight: 400,
            },
        },
        palette: {
            mode: currentMode,
            primary: {
                main: currentColor,
                light: '#ffebee',
            },
            secondary: {
                main: pink[400],
            },
        },
        customShadowns: {
            button: `0 2px #0000000b`,
            text: `0 -1px 0 rgb(0 0 0 / 12%)`,
            z1: `0px 2px 8px ${alpha('#212121', 0.15)}`,
        },
        components: {
            MuiTypography: {
                defaultProps: {
                    sx: {
                        px: 1,
                    },
                },
            },
            MuiStack: {
                defaultProps: {
                    sx: {
                        px: 2,
                        py: 1,
                    },
                    spacing: 2,
                    direction: 'row',
                },
            },
            MuiPaper: {
                defaultProps: {
                    elevation: 0,
                },
            },
            MuiLink: {
                defaultProps: {
                    sx: (theme) => theme.palette.primary.main,
                    underline: 'none',
                },
            },
            MuiButton: {
                defaultProps: {
                    size: 'small',
                    p: 0,
                    disableRipple: true,
                },
                variant: 'contained',
            },
            MuiTab: {
                defaultProps: {
                    disableRipple: true,
                },
            },
        },
    });

    return <ThemeProvider theme={theme}>{props.children}</ThemeProvider>;
};

export default AppThemeProvider;
