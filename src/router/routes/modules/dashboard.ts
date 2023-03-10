import { DEFAULT_LAYOUT } from '../base';
import { AppRouteRecordRaw } from '../types';

const DASHBOARD: AppRouteRecordRaw = {
  path: '/dashboard',
  name: 'dashboard',
  component: DEFAULT_LAYOUT,
  meta: {
    locale: 'menu.dashboard',
    requiresAuth: true,
    icon: 'icon-computer',
    order: 0,
  },
  children: [
    {
      path: 'estimate',
      name: 'Estimate',
      component: () => import('@/views/dashboard/estimate/index.vue'),
      meta: {
        locale: 'menu.dashboard.estimate',
        requiresAuth: true,
        roles: ['*'],
      },
    },
    {
      path: 'trace',
      name: 'Trace',
      component: () => import('@/views/dashboard/trace/index.vue'),
      meta: {
        locale: 'menu.dashboard.trace',
        requiresAuth: true,
        roles: ['*'],
      },
    },
  ],
};

export default DASHBOARD;
