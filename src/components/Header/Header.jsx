// material ui
import { IconButton, Paper, Toolbar, Button } from '@mui/material';

// icons
import { RiMenu5Fill } from 'react-icons/ri';

// contexts
import { useStateContext } from '~/contexts/ContextProvider';
import ThemeSetting from '../ThemeSetting/ThemeSetting';

// styles
import { MyAppBar } from './headerStyles';

const Header = () => {
    const { setMode, isOpenSidebar, handleToggleSidebar } = useStateContext();
    return (
        <MyAppBar sx={{ bgcolor: '#fff' }} elevation={0} position="fixed" isOpenSidebar={isOpenSidebar}>
            <Paper sx={{ borderRadius: 0 }}>
                <Toolbar sx={{ minHeight: '56px' }}>
                    <IconButton onClick={handleToggleSidebar} color="primary">
                        <RiMenu5Fill />
                    </IconButton>
                </Toolbar>
            </Paper>
            <Button onClick={setMode.toggleSetMode}>Dark mode</Button>
            <ThemeSetting />
        </MyAppBar>
    );
};

export default Header;
