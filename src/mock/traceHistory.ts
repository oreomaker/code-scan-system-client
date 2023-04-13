import Mock from 'mockjs';
import setupMock, { successResponseWrap } from '@/utils/setup-mock';
import { TraceHistory } from '@/api/traceHistory';
import TraceHistoryData from './traceHistoryData.json';

setupMock({
  setup() {
    Mock.mock(new RegExp('/api/t-history'), () => {
      return successResponseWrap(TraceHistoryData.data as TraceHistory[]);
    });
  },
});
