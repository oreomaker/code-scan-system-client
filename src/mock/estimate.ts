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
      return successResponseWrap({
        data: [
          {
            id: 1,
            name: 'John Brown',
            age: 18,
            address: 'New York No. 1 Lake Park',
            tags: ['nice', 'developer'],
          },
          {
            id: 2,
            name: 'Jim Green',
            age: 24,
            address: 'London No. 1 Lake Park',
            tags: ['loser'],
          },
          {
            id: 3,
            name: 'Joe Black',
            age: 30,
            address: 'Sydney No. 1 Lake Park',
            tags: ['cool', 'teacher'],
          },
          {
            id: 4,
            name: 'Jim Red',
            age: 42,
            address: 'London No. 2 Lake Park',
            tags: ['loser'],
          },
          {
            id: 4,
            name: 'Jim Red',
            age: 42,
            address: 'London No. 2 Lake Park',
            tags: ['loser'],
          },
          {
            id: 4,
            name: 'Jim Red',
            age: 42,
            address: 'London No. 2 Lake Park',
            tags: ['loser'],
          },
          {
            id: 4,
            name: 'Jim Red',
            age: 42,
            address: 'London No. 2 Lake Park',
            tags: ['loser'],
          },
          {
            id: 4,
            name: 'Jim Red',
            age: 42,
            address: 'London No. 2 Lake Park',
            tags: ['loser'],
          },
          {
            id: 4,
            name: 'Jim Red',
            age: 42,
            address: 'London No. 2 Lake Park',
            tags: ['loser'],
          },
          {
            id: 4,
            name: 'Jim Red',
            age: 42,
            address: 'London No. 2 Lake Park',
            tags: ['loser'],
          },
          {
            id: 4,
            name: 'Jim Red',
            age: 42,
            address: 'London No. 2 Lake Park',
            tags: ['loser'],
          },
        ],
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
