<template>
  <div class="container">
    <Breadcrumb :items="['menu.dashboard', 'menu.dashboard.estHistory']" />
    <a-card class="general-card" style="width: 100%">
      <template #title>
        {{ $t('traceHistory.table.title') }}
      </template>
      <a-table
        :loading="loading"
        :columns="columns"
        :data="tableData"
        style="margin-bottom: 20px"
        :scroll="scroll"
        :pagination="false"
      >
        <template #projectUrl="{ record }">
          <a-link @click="download(record.projectUrl)"
            >{{ record.projectUrl }}
          </a-link>
        </template>
      </a-table>
    </a-card>
  </div>
</template>

<script lang="ts" setup>
  import { ref, computed } from 'vue';
  import { useI18n } from 'vue-i18n';
  import { getTraceHistory } from '@/api/traceHistory';
  import useLoading from '@/hooks/loading';

  const { loading, setLoading } = useLoading(true);
  const { t } = useI18n();

  const scroll = {
    x: '80%',
    y: 450,
  };

  const columns = computed(() => {
    return [
      {
        title: t('traceHistory.table.column.projectUrl'),
        dataIndex: 'projectUrl',
        slotName: 'projectUrl',
      },
      {
        title: t('traceHistory.table.column.version'),
        dataIndex: 'version',
      },
      {
        title: t('traceHistory.table.column.vulnerability'),
        dataIndex: 'vulnerability',
      },
      {
        title: t('traceHistory.table.column.textSimilarity'),
        dataIndex: 'textSimilarity',
      },
      {
        title: t('traceHistory.table.column.ctrlFlow'),
        dataIndex: 'ctrlFlow',
      },
      {
        title: t('traceHistory.table.column.depdGraph'),
        dataIndex: 'depdGraph',
      },
      {
        title: t('traceHistory.table.column.ast'),
        dataIndex: 'ast',
      },
      {
        title: t('traceHistory.table.column.similarity'),
        dataIndex: 'similarity',
      },
    ];
  });

  const tableData = ref([]);

  const fetchData = async () => {
    setLoading(true);
    const data = await getTraceHistory();
    tableData.value = data.data;
    setLoading(false);
  };

  fetchData();

  const download = (url: string) => {
    window.open(url, '_blank');
  };
</script>

<script lang="ts">
  export default {
    name: 'Trace',
  };
</script>

<style scoped lang="less">
  .container {
    padding: 0 20px 40px;
    overflow: hidden;
  }

  .general-card {
    display: flex;
    flex-direction: column;
    padding-top: 20px;
    background-color: var(--color-bg-2);

    :deep(.arco-form) {
      .arco-form-item {
        &:last-child {
          margin-top: 20px;
        }
      }
    }
  }

  .wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 10px 0;
    background-color: var(--color-bg-2);
  }
</style>
