import Mock from 'mockjs';
import setupMock, { successResponseWrap } from '@/utils/setup-mock';
import { TraceResult } from '@/api/trace';

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
          id: 1,
          projectUrl: 'https://github.com/goldlone/bigdata_platform.git',
          version: '4ae2644580b3ae2b258da321316f0c857a64b722',
          vulnerability:
            'https://www.murphysec.com/accept?code=76201dd878ec2764f5da771799a54509&type=1&from=2',
          textSimilarity: 47.81,
          ctrlFlow: 64.71,
          depdGraph: 67.42,
          ast: 43.21,
          similarity: 73.62,
        },
        {
          id: 2,
          projectUrl: 'https://github.com/lishuai2016/spark-project.git',
          version: 'aa40535a2a3cdc68d6bcc578bcb7fd2ee1a9b406',
          vulnerability:
            'https://www.murphysec.com/accept?code=e15e85a7e21dcc4b3657222438b6da9a&type=1&from=2',
          textSimilarity: 43.52,
          ctrlFlow: 60.67,
          depdGraph: 64.93,
          ast: 42.17,
          similarity: 68.91,
        },
        {
          id: 3,
          projectUrl: 'https://github.com/tensor-core/ice-gate.git',
          version: '1efb4c54e34db95fd51c63649ecb760c4cf64257',
          vulnerability:
            'https://www.murphysec.com/accept?code=e15e85a7e21dcc4b3657222438b6da9a&type=1&from=2',
          textSimilarity: 47.93,
          ctrlFlow: 61.72,
          depdGraph: 60.94,
          ast: 42.93,
          similarity: 67.33,
        },
      ] as TraceResult[]);
    });
  },
});
