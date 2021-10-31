import { RouteConfig } from '../types';
import Admin from '../../pages/Admin';

const routes: RouteConfig[] = [
  {
    path: '/',
    exact: true,
    auth: 1,
    backUrl: '/login',
    component: Admin,
  },
];
export default routes;
