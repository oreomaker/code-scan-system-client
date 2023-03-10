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
        elfNum: 21,
        ilfNum: 60,
        functionPoints: 2415,
        phase: 1,
      });
    });
    // estimate
    Mock.mock(new RegExp('/api/estimate'), () => {
      return successResponseWrap([
        {
          label: 'Name',
          value: 'Socrates',
        },
        {
          label: 'Mobile',
          value: '123-1234-1234',
        },
        {
          label: 'Residence',
          value: 'Beijing',
        },
        {
          label: 'Hometown',
          value: 'Beijing',
        },
        {
          label: 'Address',
          value: 'Yingdu Building, Zhichun Road, Beijing',
        },
      ]);
    });
  },
});
