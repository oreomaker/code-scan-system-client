import localeMessageBox from '@/components/message-box/locale/zh-CN';
import localeLogin from '@/views/login/locale/zh-CN';

import localeEstimate from '@/views/dashboard/estimate/locale/zh-CN';
import localeTrace from '@/views/dashboard/trace/locale/zh-CN';
import localeEstHistory from '@/views/dashboard/estHistory/locale/zh-CN';
import localeTraceHistory from '@/views/dashboard/traceHistory/locale/zh-CN';

import localeSettings from './zh-CN/settings';

export default {
  'menu.dashboard': '工作台',
  'menu.dashboard.workplace': '工作台',
  'menu.arcoWebsite': 'Arco Design',
  'menu.faq': '常见问题',
  'navbar.docs': '文档中心',
  'navbar.action.locale': '切换为中文',
  ...localeSettings,
  ...localeMessageBox,
  ...localeLogin,
  ...localeEstimate,
  ...localeTrace,
  ...localeEstHistory,
  ...localeTraceHistory,
};
