import Mock from 'mockjs';
import setupMock, { successResponseWrap } from '@/utils/setup-mock';
import { TraceHistory } from '@/api/traceHistory';

setupMock({
  setup() {
    Mock.mock(new RegExp('/api/trace-history'), () => {
      return successResponseWrap([
        {
          id: 0,
          name: 'test',
          projectUrl: 'https://www.example.com',
          version: '1.0.0',
          vulnerability: 'https://www.example.com',
          textSimilarity: 10,
          ctrlFlow: 10,
          depdGraph: 10,
          ast: 10,
          similarity: 60,
          cost: 100,
          adjustCost: 120,
        },
      ] as TraceHistory[]);
    });
  },
});
