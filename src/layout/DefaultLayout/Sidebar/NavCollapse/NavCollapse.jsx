import { useEffect, useState } from 'react';

// redux
import { useDispatch, useSelector } from 'react-redux';
import { activeNavItem } from '~/redux/customizationSlice';

// mui
import { useTheme } from '@mui/material/styles';
import { Collapse, List, ListItemButton, ListItemIcon, ListItemText, Typography } from '@mui/material';

// react icons
import { MdOutlineKeyboardArrowDown, MdOutlineKeyboardArrowUp } from 'react-icons/md';

// components
import NavItem from '../NavItem';

const NavCollapse = ({ item, level }) => {
    const theme = useTheme();

    const isOpenSidebar = useSelector((state) => state.customization.isOpenSidebar);

    const [open, setOpen] = useState(false);
    const [selected, setSelected] = useState(null);
    const dispatch = useDispatch();

    const handleClick = () => {
        setOpen(!open);
        setSelected(!selected ? item.id : null);
    };

    console.log(item.childrens);

    // Active menu right when page load
    useEffect(() => {
        item.childrens.map((menu) => {
            const currentIndex = document.location.pathname
                .toString()
                .split('/')
                .findIndex((id) => id === menu.id);
            if (currentIndex > -1) {
                dispatch(activeNavItem([menu.id]));
            }
        });
    }, []);

    // Render NavCollapse or NavItem if item has childrens
    const renderMenus = item.childrens?.map((menu) => {
        switch (menu.type) {
            case 'collapse':
                return <NavCollapse key={menu.id} item={menu} level={level + 1} />;
            case 'item':
                return <NavItem key={menu.id} item={menu} level={level + 1} />;
            default:
                return <Typography>Menu Items Error</Typography>;
        }
    });

    return (
        <>
            <ListItemButton
                sx={{
                    borderRadius: '10px',
                    mb: 0.5,
                    backgroundColor: level > 1 ? 'transparent !important' : 'inherit',
                    [theme.breakpoints.down('lg')]: {},
                }}
                selected={selected === item.id}
                onClick={handleClick}
            >
                <ListItemIcon sx={{ fontSize: '20px', color: item.iconColor }}>{item.icon}</ListItemIcon>
                <ListItemText sx={{ color: selected === item.id ? theme.palette.primary.main : 'inherit' }}>
                    <Typography>{item.title}</Typography>
                </ListItemText>
                {open ? (
                    <MdOutlineKeyboardArrowUp
                        sx={{ color: selected === item.id ? theme.palette.primary.main : 'inherit' }}
                    />
                ) : (
                    <MdOutlineKeyboardArrowDown />
                )}
            </ListItemButton>
            <Collapse in={open} timeout="auto" unmountOnExit>
                <List
                    component="div"
                    sx={{
                        pl: !isOpenSidebar ? 0 : 3,
                        transition: 'padding 100ms ease-in',
                        borderRadius: '10px',
                        py: 0,
                    }}
                >
                    {renderMenus}
                </List>
            </Collapse>
        </>
    );
};

NavCollapse.propTypes = {};

export default NavCollapse;
