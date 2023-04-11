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
          id: 0,
          name: '"互联网+监管"系统数据中心建设',
          docUrl: 'https://www.example.com',
          dataFile: 'https://www.example.com',
          funcPoint: 2315,
          scale: 3217.85,
          adjustedFactor: 1.21,
          workload: 156.86,
          city: '北京',
          cost: 507,
        },
      ]);
    });
    // upload
    Mock.mock(new RegExp('/api/estimate/upload'), () => {
      return successResponseWrap('ok');
    });
  },
});
