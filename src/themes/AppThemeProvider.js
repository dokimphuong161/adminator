import { blue, pink, purple } from '@mui/material/colors';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import { useStateContext } from '~/contexts/ContextProvider';

const AppThemeProvider = (props) => {
    const { currentMode, curentColor } = useStateContext();
    const theme = createTheme({
        typography: {
            allVariants: {
                fontFamily: 'Raleway',
                textTransform: 'none',
                fontSize: 16,
                fontWeight: 400,
            },
        },
        palette: {
            mode: currentMode,
            primary: {
                main: curentColor,
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
                    variant: 'subtitle2',
                    textTransform: 'capitalize',
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
                variant: 'text',
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
