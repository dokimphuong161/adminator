// pages
import Customer from '~/pages/Customer';
import Home from '~/pages/Home';
import Product from '~/pages/Product';

const publicRoutes = [
    {
        path: '/',
        component: Home,
    },
    {
        path: '/product',
        component: Product,
    },
    {
        path: '/customer',
        component: Customer,
    },
];

export { publicRoutes };
