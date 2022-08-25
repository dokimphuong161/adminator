// redux
import { useDispatch, useSelector } from 'react-redux';
import { activeNavItem, openSidebar } from '~/redux/customizationSlice';

// mui
import { ListItem, ListItemButton, ListItemIcon, ListItemText, Typography, useMediaQuery } from '@mui/material';
import { styled, useTheme } from '@mui/material/styles';

// components
import NavLink from '~/components/NavLink';

const NavItem = ({ item, level }) => {
    const theme = useTheme();
    const matchesSM = useMediaQuery(theme.breakpoints.down('lg'));

    const isOpenSidebar = useSelector((state) => state.customization.isOpenSidebar);
    const isActiveNavItem = useSelector((state) => state.customization.isNavItem);
    const dispatch = useDispatch();

    // Handler when click item
    const itemHandler = (id) => {
        dispatch(activeNavItem([id]));
        if (matchesSM) {
            const closeSidebar = openSidebar(!isOpenSidebar);
            dispatch(closeSidebar);
        }
    };

    // When item have external link
    let itemTarget = '_self';
    if (item.target) {
        itemTarget = '_blank';
    }

    let listItemProps = { component: NavLink };
    if (item?.target) {
        listItemProps = { component: 'a', href: item.to, target: itemTarget };
    }
    const selectedItem = isActiveNavItem.findIndex((id) => id === item.id);

    // styles
    const classes = { activeLink: 'activeLink' };
    const StyleActiveLink = styled('div')({
        [`& .${classes.activeLink}`]: {
            color: theme.palette.primary.main,
        },
    });

    return (
        <StyleActiveLink>
            <ListItem
                {...listItemProps}
                onClick={() => itemHandler(item.id)}
                to={item.to}
                target={itemTarget}
                activeClassName={({ isActive }) => (isActive ? classes.activeLink : undefined)}
                disablePadding
                sx={{ display: 'block', my: 1, borderRadius: '10px' }}
            >
                <ListItemButton
                    sx={{
                        minHeight: 48,
                        justifyContent: isOpenSidebar ? 'initial' : 'center',
                        borderRadius: '10px',
                        '&.Mui-selected': {
                            backgroundColor: level > 1 ? 'transparent ! important' : 'primary',
                            color: theme.palette.primary.main,
                        },
                        my: '10px',
                    }}
                    selected={selectedItem > -1}
                >
                    <ListItemIcon
                        sx={{
                            minWidth: 0,
                            fontSize: '20px',
                            mr: isOpenSidebar ? 4.2 : 0,
                            justifyContent: 'center',
                            color: item.iconColor,
                        }}
                    >
                        {item.icon}
                    </ListItemIcon>
                    <ListItemText sx={{ opacity: isOpenSidebar ? 1 : 0, fontWeight: 600 }}>
                        <Typography>{item.title}</Typography>
                    </ListItemText>
                </ListItemButton>
            </ListItem>
        </StyleActiveLink>
    );
};

export default NavItem;
