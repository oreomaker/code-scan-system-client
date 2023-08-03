import Mock from 'mockjs';
import setupMock, { successResponseWrap } from '@/utils/setup-mock';

setupMock({
  setup() {
    Mock.mock(new RegExp('/api/est-history'), () => {
      return successResponseWrap([
        {
          id: 0,
          name: '现场演示功能点案例',
          docUrl: 'https://www.example.com',
          dataFile: 'https://www.example.com',
          funcPoint: 730,
          scale: 1014.7,
          adjustedFactor: 1.0,
          workload: 40.88,
          city: '北京',
          cost: 132.22,
        },
      ]);
    });
  },
});
