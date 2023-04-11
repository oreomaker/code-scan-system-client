import Mock from 'mockjs';
import setupMock, { successResponseWrap } from '@/utils/setup-mock';

setupMock({
  setup() {
    Mock.mock(new RegExp('/api/est-history'), () => {
      return successResponseWrap([
        {
          id: 0,
          name: '"互联网+监管"系统数据中心建设',
          docUrl: 'https://www.example.com',
          dataFile: 'https://www.example.com',
          funcPoint: 2315,
          scale: 3217.85,
          adjustedFactor: 1.21,
          workload: 156.86,
          city: '北京',
          cost: 507,
        },
      ]);
    });
  },
});
