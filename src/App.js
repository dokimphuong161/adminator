import { Button, Paper, Typography } from '@mui/material';

import { useStateContext } from './contexts/ContextProvider';
import { themeColors } from './data/dummyData';

function App() {
    const { setMode, setColorMode } = useStateContext();

    return (
        <div className="App">
            <Paper>
                <Button onClick={setMode.toggleSetMode} variant="contained" color="primary">
                    Alo Alo
                </Button>

                <Typography variant="h1">Alo bạn ơi</Typography>
            </Paper>

            {themeColors.map((item, index) => (
                <Button
                    onClick={() => setColorMode(item.color)}
                    key={index}
                    sx={{ backgroundColor: item.color, width: 30, height: 30, marginTop: 4 }}
                ></Button>
            ))}
        </div>
    );
}

export default App;
