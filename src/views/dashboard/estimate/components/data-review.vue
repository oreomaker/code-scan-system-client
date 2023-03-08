<template>
  <a-table
    :loading="loading"
    :columns="columns"
    :data="tableData"
    style="width: 75%; margin-bottom: 20px"
    :scroll="scroll"
    :pagination="false"
  />
  <a-button type="text">下载数据</a-button>
  <a-upload
    style="width: 680px; margin-top: 20px; margin-bottom: 20px"
    draggable
    action="/review/upload"
  />
  <a-space>
    <a-button type="secondary" @click="goPrev">
      {{ $t('stepForm.button.prev') }}
    </a-button>
    <a-button type="primary" @click="onNextClick">
      {{ $t('stepForm.button.next') }}
    </a-button>
  </a-space>
</template>

<script lang="ts" setup>
  import { ref } from 'vue';
  import useLoading from '@/hooks/loading';
  import { getTableData } from '@/api/estimate';

  const emits = defineEmits(['changeStep']);
  const { loading, setLoading } = useLoading(true);

  const scroll = {
    x: '80%',
    y: 500,
  };

  const columns = ref([
    {
      title: 'Id',
      dataIndex: 'id',
    },
    {
      title: 'Name',
      dataIndex: 'name',
    },
    {
      title: 'Age',
      dataIndex: 'age',
    },
    {
      title: 'Address',
      dataIndex: 'address',
    },
  ]);
  const tableData = ref([]);

  const fetchData = async () => {
    setLoading(true);
    const { data } = await getTableData();
    tableData.value = data.data;
    setLoading(false);
  };

  fetchData();

  const onNextClick = async () => {
    emits('changeStep', 'submit', {});
  };
  const goPrev = () => {
    emits('changeStep', 'backward');
  };
</script>

<style scoped lang="less">
  .container {
    .keep-margin {
      margin-bottom: 20px;
    }
  }

  .wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 64px 0;
    background-color: var(--color-bg-2);
  }

  .steps {
    margin-bottom: 36px;
  }

  .form {
    width: 540px;
  }

  .form-content {
    padding: 8px 50px 0 30px;
  }
</style>
