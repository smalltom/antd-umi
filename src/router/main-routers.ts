import ProductList from '../components/ProductList';

type IRoute = {
    path: string,
    exact?: boolean,
    name: string,
    icon?: string,
    comp?: any,
    subRoutes?: Array<IRoute>
}
const routes: Array<IRoute> = [
    {
        path: '/',
        exact: true,
        name: '主页',
        icon: 'home'
    },
    {
        path: '/products',
        name: '产品',
        icon: 'exception'
    }
];

export default routes;