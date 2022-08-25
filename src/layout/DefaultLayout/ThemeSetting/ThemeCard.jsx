// mui
import { Card, CardContent, CardHeader, Divider } from '@mui/material';
import { useTheme } from '@mui/material/styles';

const ThemeCard = ({ title, children }) => {
    const theme = useTheme();
    return (
        <Card
            sx={{
                mt: '20px',
                border: `1px solid ${theme.palette.mode === 'dark' ? '#ffffff1f' : theme.palette.primary.light}`,
                borderRadius: '5px',
                backgroundImage:
                    theme.palette.mode === 'dark'
                        ? 'linear-gradient(rgba(255, 255, 255, 0.12), rgba(255, 255, 255, 0.12))'
                        : 'inherit',
            }}
        >
            <CardHeader
                sx={{ fontSize: '14px', px: '4px', fontWeight: 600 }}
                titleTypographyProps={{ variant: 'subtitle' }}
                title={title}
            />
            <Divider
                sx={{
                    borderColor: theme.palette.mode === 'dark' ? '#ffffff1f' : theme.palette.primary.light,
                }}
            />
            <CardContent>{children}</CardContent>
        </Card>
    );
};

ThemeCard.propTypes = {};

export default ThemeCard;
