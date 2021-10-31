import loadable from '@loadable/component';

import Front from '../../pages/Front';
import { RouteConfig } from '../types';

const routes: RouteConfig[] = [
  {
    path: '/',
    component: Front,
    order: 10,
    exact: true,
  },
  {
    path: '/login',
    order: 0,
    component: loadable(() => import('@/pages/Login')),
  },
];
export default routes;
