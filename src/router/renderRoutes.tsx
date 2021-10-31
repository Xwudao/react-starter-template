import React from 'react';
import { Redirect, Route, Switch } from 'react-router';

import { RouteConfig } from './types';

function renderRoutes(
  routes: RouteConfig[],
  authed: number | string | (string | number)[],
  multipleRoutes?: RouteConfig[],
  extraProps = {},
  switchProps = {},
) {
  let list = [];
  const mapFunc = (R: RouteConfig[]) =>
    R.map((route, i) => (
      <Route
        key={route.key || i}
        path={route.path}
        exact={route.exact}
        strict={route.strict}
        render={(props) => {
          // renderRoutes里写了用户权限，自动往子路由下传，方便获取当前登录权限

          if (Object.prototype.toString.call(route.authed) === '[object Array]') {
            return route.authed.map((item: number | string) => String(item));
          } else {
            route.authed = String(authed);
          }

          // auth是字符串则添加数组包裹,是数组则遍历字符串化，方便下面的判断
          if (typeof route.auth === 'string' || typeof route.auth === 'number') {
            route.auth = [route.auth.toString()];
          } else if (Object.prototype.toString.call(route.auth) === '[object Array]') {
            route.auth.forEach(
              (val: string | number, idx: number) => (route.auth[idx] = String(val)),
            );
          }

          /**
           * 判断渲染Route
           * 1、如果路由列表没写auth则默认是可访问的
           * 2、如果renderRoute方法没传authed(当前用户权限)，也是可以访问的(前提是符合1条件)
           * 3、如果即在路由列表写了权限，又添加用户权限，则判断用户权限是否存在路由权限中
           */
          if (
            !route.auth ||
            authed === undefined ||
            route.authed.includes(...route.auth)
          ) {
            console.log('authed.......');
            return route.render
              ? route.render({ ...props, ...extraProps, route: route })
              : route.component && (
                  <route.component {...props} {...extraProps} route={route} />
                );
          } else {
            return <Redirect to={route.backUrl || '/'} />;
          }
        }}
      />
    ));

  if (routes) {
    list.push(
      <Switch {...switchProps} key="SwitchRoutes">
        {mapFunc(routes)}
      </Switch>,
    );
    multipleRoutes && list.unshift(...mapFunc(multipleRoutes));
    return list;
  }
}

export default renderRoutes;
