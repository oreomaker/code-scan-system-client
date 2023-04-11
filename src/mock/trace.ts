import Mock from 'mockjs';
import setupMock, { successResponseWrap } from '@/utils/setup-mock';

setupMock({
  setup() {
    // upload code package
    Mock.mock(new RegExp('/api/trace/upload'), () => {
      return successResponseWrap('ok');
    });
    // post code data
    Mock.mock(new RegExp('/api/trace/post'), () => {
      return successResponseWrap('ok');
    });
    Mock.mock(new RegExp('/api/trace'), () => {
      return successResponseWrap([
        {
          id: 0,
          projectUrl: 'https://www.example.com',
          version: '1.0.0',
          vulnerability: 'none',
          textSimilarity: 54,
          ctrlFlow: 14,
          depdGraph: 12,
          ast: 20,
          similarity: 60,
          cost: 100,
          adjustCost: 120,
        },
      ]);
    });
  },
});
