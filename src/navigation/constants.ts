const expandRoutes = <T extends Record<string, any>>(routes: T, root = '') => {
  for (const [key, route] of Object.entries(routes)) {
    if (typeof route === 'string') {
      if (key === 'ROOT') continue;
      routes[key] = [routes.ROOT, route].join('/');
    } else {
      route.ROOT = [routes.ROOT, route.ROOT].join('/');
      expandRoutes(route);
    }
  }
  return routes;
};

const ROUTE_NAMES = {
  ROOT: '/',
  WORK_DETAIL: {
    ROOT: 'work-detail',
    TIM_HORTONS: 'tim-hortons',
    TORONTO_ZOO: 'toronto-zoo',
    HUMBER_CURRENT: 'humber-current',
    TIC_TAC_TOE: 'tic-tac-toe',
  },
};

const ROUTES = expandRoutes(ROUTE_NAMES);

export { ROUTES };
