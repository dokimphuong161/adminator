import { AiOutlineBarChart, AiOutlineDashboard, AiOutlineLineChart, AiOutlinePieChart } from 'react-icons/ai';
import { BsCreditCard2Front } from 'react-icons/bs';
import { CgCalendarDates } from 'react-icons/cg';
import { FiUsers } from 'react-icons/fi';
import { MdOutlineCardMembership, MdOutlineColorLens } from 'react-icons/md';
import { RiPagesLine } from 'react-icons/ri';
import { TbBrandProducthunt, TbChartDots3, TbLayoutKanban } from 'react-icons/tb';
import { TiChartAreaOutline } from 'react-icons/ti';

// Sidebar Items
export const sidebarItems = [
    {
        id: 'dashboard',
        title: 'Dashboard',
        type: 'item',
        to: '/dashboard',
        icon: <AiOutlineDashboard />,
        iconColor: '#64b5f6',
    },
    {
        id: 'pages',
        title: 'Pages',
        type: 'collapse',
        icon: <RiPagesLine />,
        iconColor: '#90a4ae',
        childrens: [
            {
                id: 'product',
                title: 'Products',
                type: 'item',
                to: '/pages/product',
                icon: <TbBrandProducthunt />,
                iconColor: '#d32f2f',
            },
            {
                id: 'customer',
                title: 'Customers',
                type: 'item',
                to: '/pages/customer',
                icon: <FiUsers />,
                iconColor: '#0277bd',
            },
            {
                id: 'emloyee',
                title: 'Employees',
                type: 'item',
                to: '/pages/employess',
                icon: <MdOutlineCardMembership />,
                iconColor: '#00c853',
            },
        ],
    },
    {
        id: 'chart',
        title: 'Charts',
        type: 'collapse',
        icon: <AiOutlineBarChart />,
        iconColor: '#ffab00',
        childrens: [
            {
                id: 'line',
                title: 'Line',
                type: 'item',
                to: '/charts/line',
                icon: <AiOutlineLineChart />,
                iconColor: '#673ab7',
            },
            {
                id: 'area',
                title: 'Area',
                type: 'item',
                to: '/charts/area',
                icon: <TiChartAreaOutline />,
                iconColor: '#f44336',
            },
            {
                id: 'bar',
                title: 'Bar',
                type: 'item',
                to: '/charts/bar',
                icon: <AiOutlineBarChart />,
                iconColor: '#2196f3',
            },
            {
                id: 'pie',
                title: 'Pie',
                type: 'item',
                to: '/charts/pie',
                icon: <AiOutlinePieChart />,
                iconColor: '#00e676',
            },
            {
                id: 'financial',
                title: 'Financial',
                type: 'item',
                to: '/charts/financial',
                icon: <TbChartDots3 />,
                iconColor: '#f50057',
            },
        ],
    },
    {
        id: 'calendar',
        title: 'Calendar',
        type: 'item',
        to: '/calendar',
        icon: <CgCalendarDates />,
        iconColor: '#00e676',
    },
    { id: 'kanban', title: 'Kanban', type: 'item', to: '/kanban', icon: <TbLayoutKanban />, iconColor: '#f44336' },
    { id: 'editor', title: 'Editor', type: 'item', to: '/editor', icon: <BsCreditCard2Front />, iconColor: '#6a1b9a' },
    {
        id: 'colorpicker',
        title: 'Color Picker',
        type: 'item',
        to: '/colorpicker',
        icon: <MdOutlineColorLens />,
        iconColor: '#ff4081',
    },
];
