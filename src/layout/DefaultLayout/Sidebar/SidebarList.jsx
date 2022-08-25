// mui
import { List, Typography } from '@mui/material';

// dummyData
import { sidebarItems } from '~/data/sidebarItems';

// components
import NavCollapse from './NavCollapse';
import NavItem from './NavItem';

// components

const SidebarList = () => {
    const renderSidebarItem = sidebarItems.map((item) => {
        switch (item.type) {
            case 'collapse':
                return <NavCollapse key={item.id} item={item} level={1} />;
            case 'item':
                return <NavItem key={item.id} item={item} level={1} />;
            default:
                return <Typography>Menu not display</Typography>;
        }
    });

    return <List sx={{ px: '4px' }}>{renderSidebarItem}</List>;
};

export default SidebarList;
