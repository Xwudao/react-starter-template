import loadable from '@loadable/component';

import { RouteConfig } from '../types';

const routes: RouteConfig[] = [
  {
    path: '/admin',
    auth: 3,
    backUrl: '/login',
    component: loadable(() => import('@/pages/Admin')),

    routes: [
      {
        path: '/admin/sub_page',
        component: loadable(() => import('@/pages/admin/SubPage')),
      },
    ],
  },
];
export default routes;
