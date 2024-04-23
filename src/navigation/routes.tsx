import React from 'react';
import type { RouteObject } from 'react-router-dom';
import { App } from '../App';
import { WorkDetail } from '../components/work-detail/work-detail';
import { ROUTES } from './constants';

const routes: RouteObject[] = [
  {
    path: ROUTES.ROOT,
    element: <App />,
    children: [
      {
        path: ROUTES.WORK_DETAIL.ROOT,
        element: <WorkDetail />,
        errorElement: <WorkDetail />,
        children: [
          {
            path: ROUTES.WORK_DETAIL?.HUMBER_CURRENT,
            element: <></>,
          },
        ],
      },
    ],
  },
];

export { routes };
