import Mock from 'mockjs';
import setupMock, { successResponseWrap } from '@/utils/setup-mock';

setupMock({
  setup() {
    Mock.mock(new RegExp('/api/est-history'), () => {
      return successResponseWrap([
        {
          id: 0,
          name: 'www.example.com',
          docUrl: 'https://www.example.com',
          dataFile: 'https://www.example.com',
          funcPoint: 100,
          scale: 100,
          adjustedFactor: 1.21,
          workload: 200,
          city: '北京',
          cost: 503,
        },
      ]);
    });
  },
});
