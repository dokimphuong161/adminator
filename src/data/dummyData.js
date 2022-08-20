import { AiOutlineBarChart, AiOutlineLineChart, AiOutlinePieChart } from 'react-icons/ai';
import { BiHomeAlt } from 'react-icons/bi';
import { BsCreditCard2Front } from 'react-icons/bs';
import { CgCalendarDates } from 'react-icons/cg';
import { FiUsers } from 'react-icons/fi';
import { MdOutlineCardMembership, MdOutlineColorLens } from 'react-icons/md';
import { RiPagesLine } from 'react-icons/ri';
import { TbBrandProducthunt, TbChartDots3, TbLayoutKanban } from 'react-icons/tb';
import { TiChartAreaOutline } from 'react-icons/ti';

// Theme colors
export const themeColors = [
    {
        name: 'blue-theme',
        color: '#1A97F5',
    },
    {
        name: 'green-theme',
        color: '#0097a7',
    },
    {
        name: 'purple-theme',
        color: '#7352FF',
    },
    {
        name: 'red-theme',
        color: '#ff4081',
    },
    {
        name: 'indigo-theme',
        color: '#1E4DB7',
    },
    {
        color: '#ff5252',
        name: 'orange-theme',
    },
];

// Sidebar Items
export const sidebarItems = [
    { title: 'Dashboard', to: '/', icon: <BiHomeAlt />, iconColor: '#64b5f6' },
    {
        title: 'Pages',
        icon: <RiPagesLine />,
        iconColor: '#90a4ae',
        childrens: [
            { title: 'Products', to: '/product', icon: <TbBrandProducthunt />, iconColor: '#d32f2f' },
            { title: 'Customers', to: '/customer', icon: <FiUsers />, iconColor: '#0277bd' },
            { title: 'Employees', to: '/employee', icon: <MdOutlineCardMembership />, iconColor: '#ffab00' },
        ],
    },
    { title: 'Calendar', to: '/calendar', icon: <CgCalendarDates />, iconColor: '#00e676' },
    { title: 'Kanban', to: '/kanban', icon: <TbLayoutKanban />, iconColor: '#f44336' },
    { title: 'Editor', to: '/editor', icon: <BsCreditCard2Front />, iconColor: '#6a1b9a' },
    { title: 'Color Picker', to: '/colorpicker', icon: <MdOutlineColorLens />, iconColor: '#ff4081' },
    {
        title: 'Charts',
        icon: <AiOutlineBarChart />,
        iconColor: '#ffab00',
        childrens: [
            { title: 'Line', to: '/line', icon: <AiOutlineLineChart />, iconColor: '#673ab7' },
            { title: 'Area', to: '/area', icon: <TiChartAreaOutline />, iconColor: '#f44336' },
            { title: 'Bar', to: '/bar', icon: <AiOutlineBarChart />, iconColor: '#2196f3' },
            { title: 'Pie', to: '/pie', icon: <AiOutlinePieChart />, iconColor: '#00e676' },
            { title: 'Financial', to: '/financial', icon: <TbChartDots3 />, iconColor: '#f50057' },
        ],
    },
];
