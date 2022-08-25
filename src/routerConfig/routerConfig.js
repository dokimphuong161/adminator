// pages
import DefaultLayout from '~/layout/DefaultLayout';
import Customer from '~/pages/Customer';
import Home from '~/pages/Home';
import Product from '~/pages/Product';

const publicRoutes = [
    {
        path: '/',
        component: Home,
    },
    { path: '/dashboard', component: Home },
    {
        path: '/pages/product',
        component: Product,
    },
    {
        path: '/pages/customer',
        component: Customer,
    },
];

export { publicRoutes };
