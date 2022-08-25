import React, { useState } from 'react';

// mui
import { List, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';

// data
import { accountItems } from '~/data/accountItem';

const ProfileAccount = () => {
    const [selected, setSelected] = useState(1);
    const handleSelected = (event, index) => {
        setSelected(index);
    };
    console.log(selected);
    return (
        <List sx={{ p: 0 }}>
            {accountItems.profileAccount.map((item, index) => (
                <ListItemButton
                    key={index}
                    selected={selected === item.id}
                    onClick={(event) => handleSelected(event, item.id)}
                >
                    <ListItemIcon>{item.icon}</ListItemIcon>
                    <ListItemText primary={item.title} />
                </ListItemButton>
            ))}
        </List>
    );
};

export default ProfileAccount;
