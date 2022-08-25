import { useState } from 'react';

// mui
import { Avatar, ButtonBase, InputAdornment, OutlinedInput } from '@mui/material';
import { alpha, styled, useTheme } from '@mui/material/styles';
import { shouldForwardProp } from '@mui/system';

// icons
import { BiFilterAlt, BiSearchAlt } from 'react-icons/bi';

// styles
const MyOutlineInput = styled(OutlinedInput, { shouldForwardProp })(({ theme }) => ({
    width: 320,
    '& .MuiOutlinedInput-root': {
        paddingRight: '4px',
    },
}));

const Search = (props) => {
    const theme = useTheme();
    const [value, setValue] = useState('');
    console.log(value);
    return (
        <MyOutlineInput
            placeholder="Search..."
            size="small"
            sx={{ paddingRight: '6px' }}
            startAdornment={
                <InputAdornment position="start">
                    <BiSearchAlt />
                </InputAdornment>
            }
            endAdornment={
                <InputAdornment position="end">
                    <ButtonBase size="small">
                        <Avatar
                            variant="rounded"
                            sizes="small"
                            sx={{
                                width: 28,
                                height: 28,
                                backgroundColor: alpha(theme.palette.primary.main, 0.18),
                                color: theme.palette.primary.main,
                            }}
                        >
                            {' '}
                            <BiFilterAlt />
                        </Avatar>
                    </ButtonBase>
                </InputAdornment>
            }
        ></MyOutlineInput>
    );
};

Search.propTypes = {};

export default Search;
