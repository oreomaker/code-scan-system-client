<template>
  <a-spin class="success-wrap" :loading="loading">
    <a-card class="general-card">
      <div class="wrapper">
        <a-table
          :loading="loading"
          :columns="columns"
          :data="data"
          style="margin-bottom: 20px"
          :pagination="false"
        >
          <template #docUrl="{ record }">
            <a-link @click="download(record.docUrl)">下载</a-link>
          </template>
          <template #dataFile="{ record }">
            <a-link @click="download(record.dataFile)">下载 </a-link>
          </template>
        </a-table>
      </div>
    </a-card>
    <a-space :size="16" style="margin-top: 40px">
      <a-button key="agian" type="primary" @click="oneMore">
        {{ $t('stepForm.button.again') }}
      </a-button>
    </a-space>
  </a-spin>
</template>

<script lang="ts" setup>
  import { ref, computed } from 'vue';
  import { useI18n } from 'vue-i18n';
  import { estimate } from '@/api/estimate';
  import useLoading from '@/hooks/loading';

  const emits = defineEmits(['changeStep']);
  const { loading, setLoading } = useLoading(true);
  const { t } = useI18n();
  const oneMore = () => {
    emits('changeStep', 1);
  };
  const data = ref([]);

  const fetchData = async () => {
    setLoading(true);
    const res = await estimate();
    data.value = res.data;
    setLoading(false);
  };

  fetchData();

  const download = (url: string) => {
    window.open(url, '_blank');
  };

  const columns = computed(() => {
    return [
      {
        title: t('estHistory.table.column.name'),
        dataIndex: 'name',
      },
      {
        title: t('estHistory.table.column.docUrl'),
        dataIndex: 'docUrl',
        slotName: 'docUrl',
      },
      {
        title: t('estHistory.table.column.dataFile'),
        dataIndex: 'dataFile',
        slotName: 'docUrl',
      },
      {
        title: t('estHistory.table.column.funcPoint'),
        dataIndex: 'funcPoint',
      },
      {
        title: t('estHistory.table.column.scale'),
        dataIndex: 'scale',
      },
      {
        title: t('estHistory.table.column.adjustedFoctor'),
        dataIndex: 'adjustedFactor',
      },
      {
        title: t('estHistory.table.column.workload'),
        dataIndex: 'workload',
      },
      {
        title: t('estHistory.table.column.city'),
        dataIndex: 'city',
      },
      {
        title: t('estHistory.table.column.cost'),
        dataIndex: 'cost',
      },
    ];
  });
</script>

<style scoped lang="less">
  .success-wrap {
    text-align: center;
  }

  :deep(.arco-result) {
    padding-top: 0;
  }
</style>
