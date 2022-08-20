// mui
import { List } from '@mui/material';

// dummyData
import { sidebarItems } from '~/data/dummyData';

// components
import SidebarItem from './SidebarItem';

const SidebarList = () => {
    return (
        <List sx={{ px: '4px' }}>
            {sidebarItems.map((menu, index) => (
                <SidebarItem key={index} items={menu} />
            ))}
        </List>
    );
};

export default SidebarList;
