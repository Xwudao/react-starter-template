import { RouteConfig } from './types';

const rootRoutes: RouteConfig[] = [];

const modules = import.meta.globEager('./modules/*.ts');

const tmpRoutes: RouteConfig[] = [];
for (let module in modules) {
  const routes = modules[module].default;
  tmpRoutes.push(...routes);
}

//ordered routes
rootRoutes.push(
  ...tmpRoutes.sort((item1, item2) => {
    return (item2.order || 0) - (item1.order || 0);
  }),
);
console.log(`load all routes`, rootRoutes);

export default rootRoutes;
