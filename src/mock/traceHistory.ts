import Mock from 'mockjs';
import setupMock, { successResponseWrap } from '@/utils/setup-mock';
import { TraceHistory } from '@/api/traceHistory';

setupMock({
  setup() {
    Mock.mock(new RegExp('/api/t-history'), () => {
      return successResponseWrap([
        {
          id: 0,
          name: 'test',
          projectUrl: 'https://www.example.com',
          version: '1.0.0',
          vulnerability: 'https://www.example.com',
          textSimilarity: 47,
          ctrlFlow: 63,
          depdGraph: 64,
          ast: 42,
          similarity: 68,
          cost: 500,
          adjustCost: 507,
        },
      ] as TraceHistory[]);
    });
  },
});
