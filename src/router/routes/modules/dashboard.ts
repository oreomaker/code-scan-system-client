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
      path: 'estimate-history',
      name: 'Estimate History',
      component: () => import('@/views/dashboard/estHistory/index.vue'),
      meta: {
        locale: 'menu.dashboard.estHistory',
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
    {
      path: 'trace-history',
      name: 'Trace History',
      component: () => import('@/views/dashboard/traceHistory/index.vue'),
      meta: {
        locale: 'menu.dashboard.traceHistory',
        requiresAuth: true,
        roles: ['*'],
      },
    },
  ],
};

export default DASHBOARD;
