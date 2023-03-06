import Mock from 'mockjs';
import setupMock, {
  successResponseWrap,
  failResponseWrap,
} from '@/utils/setup-mock';

import { MockParams } from '@/types/mock';
import { isLogin } from '@/utils/auth';

setupMock({
  setup() {
    // 成本预测
    Mock.mock(new RegExp('/api/estimate'), (params: MockParams) => {
      if (isLogin()) {
        const { usernasme, password } = JSON.parse(params.body);
        return successResponseWrap({
          cost: 10000,
        });
      }
      return failResponseWrap(null, '未登录', 50008);
    });
  },
});
