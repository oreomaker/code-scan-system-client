import debug from './env';

export default ({ mock, setup }: { mock?: boolean; setup: () => void }) => {
  // if (mock !== false && debug) setup();
  if (mock !== false) setup(); // 无论是否是生产环境都开启mock
};

export const successResponseWrap = (data: unknown) => {
  return {
    data,
    status: 'ok',
    msg: '请求成功',
    code: 20000,
  };
};

export const failResponseWrap = (data: unknown, msg: string, code = 50000) => {
  return {
    data,
    status: 'fail',
    msg,
    code,
  };
};
