import Mock from 'mockjs';
import setupMock, { successResponseWrap } from '@/utils/setup-mock';

setupMock({
  setup() {
    Mock.mock(new RegExp('/api/trace-history'), () => {
      return successResponseWrap([
        {
          id: 0,
          projectUrl: 'https://www.example.com',
          version: '1.0.0',
          vulnerability: 'https://www.example.com',
          textSimilarity: 'https://www.example.com',
          ctrlFlow: 'https://www.example.com',
          depdGraph: 'https://www.example.com',
          ast: 'https://www.example.com',
          similarity: 60,
          cost: 100,
          adjustCost: 120,
        },
      ]);
    });
  },
});
