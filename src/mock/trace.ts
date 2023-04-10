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
  },
});
