import React from 'react';
import type { RouteObject } from 'react-router-dom';
import { App } from '../App';
import { WorkDetail } from '../components/work-detail';
import { ROUTES } from './constants';

const routes: RouteObject[] = [
  {
    path: ROUTES.ROOT,
    element: <App />,
    errorElement: <App />,
  },
  {
    path: ROUTES.WORK_DETAIL.ROOT + '/:id',
    errorElement: <WorkDetail />,
    element: <WorkDetail />,
  },
];

export { routes };
