import { pink } from '@mui/material/colors';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import { useStateContext } from '~/contexts/ContextProvider';

const AppThemeProvider = (props) => {
    const { currentMode, currentColor } = useStateContext();
    console.log(currentMode);
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
            },
            secondary: {
                main: pink[400],
            },
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
