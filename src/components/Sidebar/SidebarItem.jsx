import { useState } from 'react';

// mui
import { makeStyles } from '@mui/styles';
import { Collapse, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';

// react icons
import { MdOutlineKeyboardArrowDown, MdOutlineKeyboardArrowUp } from 'react-icons/md';

// components
import NavLink from '../NavLink';

// contexts
import { useStateContext } from '~/contexts/ContextProvider';

const SidebarItem = ({ items }) => {
    const { isOpenSidebar, currentColor } = useStateContext();
    const [open, setOpen] = useState(false);

    const handleClick = () => {
        setOpen(!open);
    };

    const useStyle = makeStyles({
        activeLink: {
            color: currentColor,
        },
    });

    const classes = useStyle();
    return (
        <>
            {items.childrens ? (
                <>
                    <ListItemButton onClick={handleClick} sx={{ borderRadius: '10px' }}>
                        <ListItemIcon sx={{ fontSize: '20px', color: items.iconColor }}>{items.icon}</ListItemIcon>
                        <ListItemText primary={items.title} />
                        {open ? <MdOutlineKeyboardArrowUp /> : <MdOutlineKeyboardArrowDown />}
                    </ListItemButton>
                    <Collapse in={open} timeout="auto" unmountOnExit>
                        <List component="div" sx={{ pl: 2 }}>
                            {items.childrens.map((item, index) => (
                                <SidebarItem items={item} key={index} />
                            ))}
                        </List>
                    </Collapse>
                </>
            ) : (
                <>
                    <ListItem
                        component={NavLink}
                        to={items.to}
                        activeClassName={({ isActive }) => (isActive ? classes.activeLink : undefined)}
                        disablePadding
                        sx={{ display: 'block' }}
                    >
                        <ListItemButton
                            sx={{
                                minHeight: 48,
                                justifyContent: isOpenSidebar ? 'initial' : 'center',
                                borderRadius: '10px',
                                my: '6px',
                            }}
                        >
                            <ListItemIcon
                                sx={{
                                    minWidth: 0,
                                    fontSize: '20px',
                                    mr: isOpenSidebar ? 4.2 : 0,
                                    justifyContent: 'center',
                                    color: items.iconColor,
                                }}
                            >
                                {items.icon}
                            </ListItemIcon>
                            <ListItemText primary={items.title} sx={{ opacity: isOpenSidebar ? 1 : 0 }} />
                        </ListItemButton>
                    </ListItem>
                </>
            )}
        </>
    );
};

SidebarItem.propTypes = {};

export default SidebarItem;
