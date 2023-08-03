import Mock from 'mockjs';
import setupMock, { successResponseWrap } from '@/utils/setup-mock';
import functionPoint from './functionPoint.json';

setupMock({
  setup() {
    // submit
    Mock.mock(new RegExp('/api/channel-form/submit'), () => {
      return successResponseWrap('ok');
    });
    // get table data
    Mock.mock(new RegExp('/api/table'), () => {
      return successResponseWrap(functionPoint.data);
    });
    // get doc meta
    Mock.mock(new RegExp('/api/docmeta'), () => {
      return successResponseWrap({
        elfNum: 2,
        ilfNum: 20,
        functionPoints: 730,
        adjustedScale: 1014.7,
        phase: 1,
        serviceFactor: 1.0,
        fieldFactor: 1.0,
        integrityLevelFactor: 1.0,
        qualityFactor: 1.0,
        devFactor: 1.0,
        devCity: '北京',
        ajustmentFactor: 1.0,
        ajustedWorkload: 40.88,
      });
    });
    // estimate
    Mock.mock(new RegExp('/api/estimate'), () => {
      return successResponseWrap([
        {
          id: 0,
          name: '现场演示功能点案例',
          docUrl: 'https://www.example.com',
          dataFile: 'https://www.example.com',
          funcPoint: 730,
          scale: 1014.7,
          adjustedFactor: 1.0,
          workload: 40.88,
          city: '北京',
          cost: 132.22,
        },
      ]);
    });
    // upload
    Mock.mock(new RegExp('/api/estimate/upload'), () => {
      return successResponseWrap('ok');
    });
  },
});
