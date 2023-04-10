import Mock from 'mockjs';
import setupMock, { successResponseWrap } from '@/utils/setup-mock';

setupMock({
  setup() {
    // submit
    Mock.mock(new RegExp('/api/channel-form/submit'), () => {
      return successResponseWrap('ok');
    });
    // get table data
    Mock.mock(new RegExp('/api/table'), () => {
      return successResponseWrap([
        {
          function: '5.1 建设规模',
          catagory: 'ILF',
          reuse: '低',
          modify: '新增',
        },
        {
          function: '5.1 建设规模',
          catagory: 'ILF',
          reuse: '低',
          modify: '新增',
        },
        {
          function: '5.1 建设规模',
          catagory: 'ILF',
          reuse: '低',
          modify: '新增',
        },
        {
          function: '5.1 建设规模',
          catagory: 'ILF',
          reuse: '低',
          modify: '新增',
        },
        {
          function: '5.1 建设规模',
          catagory: 'ILF',
          reuse: '低',
          modify: '新增',
        },
        {
          function: '5.1 建设规模',
          catagory: 'ILF',
          reuse: '低',
          modify: '新增',
        },
        {
          function: '5.1 建设规模',
          catagory: 'ILF',
          reuse: '低',
          modify: '新增',
        },
        {
          function: '5.1 建设规模',
          catagory: 'ILF',
          reuse: '低',
          modify: '新增',
        },
        {
          function: '5.1 建设规模',
          catagory: 'ILF',
          reuse: '低',
          modify: '新增',
        },
        {
          function: '5.1 建设规模',
          catagory: 'ILF',
          reuse: '低',
          modify: '新增',
        },
        {
          function: '5.1 建设规模',
          catagory: 'ILF',
          reuse: '低',
          modify: '新增',
        },
        {
          function: '5.1 建设规模',
          catagory: 'ILF',
          reuse: '低',
          modify: '新增',
        },
        {
          function: '5.1 建设规模',
          catagory: 'ILF',
          reuse: '低',
          modify: '新增',
        },
        {
          function: '5.1 建设规模',
          catagory: 'ILF',
          reuse: '低',
          modify: '新增',
        },
      ]);
    });
    // get doc meta
    Mock.mock(new RegExp('/api/docmeta'), () => {
      return successResponseWrap({
        elfNum: 19,
        ilfNum: 58,
        functionPoints: 2315,
        adjustedScale: 3217.85,
        phase: 1,
        serviceFactor: 1,
        fieldFactor: 1,
        integrityLevelFactor: 1,
        qualityFactor: 1,
        devFactor: 1,
        devCity: '北京',
        ajustmentFactor: 1,
        ajustedWorkload: 0,
      });
    });
    // estimate
    Mock.mock(new RegExp('/api/estimate'), () => {
      return successResponseWrap([
        {
          label: '预估成本',
          value: '5,070,000.00',
        },
      ]);
    });
    // upload
    Mock.mock(new RegExp('/api/estimate/upload'), () => {
      return successResponseWrap('ok');
    });
  },
});
