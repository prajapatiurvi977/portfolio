import React from 'react';
import type { RouteObject } from 'react-router-dom';
import { App } from '../App';
import { WorkDetail } from '../components/work-detail';
import { ROUTES } from './constants';

const routes: RouteObject[] = [
  {
    path: ROUTES.ROOT,
    element: <App />,
  },
  {
    path: ROUTES.WORK_DETAIL.ROOT,
    children: [
      {
        path: ':id',
        element: <WorkDetail />,
        errorElement: <WorkDetail />,
      },
    ],
  },
];

export { routes };
