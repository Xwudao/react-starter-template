import loadable from '@loadable/component';

import { RouteConfig } from '../types';

const routes: RouteConfig[] = [
  {
    path: '/admin',
    auth: 3,
    exact: true,
    backUrl: '/login',
    component: loadable(() => import('@/pages/Admin')),
  },
];
export default routes;
