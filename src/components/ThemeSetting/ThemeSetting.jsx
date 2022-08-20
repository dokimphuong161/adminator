import React from 'react';
import { useStateContext } from '~/contexts/ContextProvider';
import { themeColors } from '~/data/dummyData';
import { Button } from '@mui/material';

const ThemeSetting = () => {
    const { setColorMode } = useStateContext();
    return (
        <div>
            {themeColors.map((item, index) => (
                <Button
                    variant="contained"
                    onClick={() => setColorMode(item.color)}
                    key={index}
                    sx={{ backgroundColor: item.color, width: 30, height: 30, marginTop: 4 }}
                ></Button>
            ))}{' '}
            */
        </div>
    );
};

export default ThemeSetting;
