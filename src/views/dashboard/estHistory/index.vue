<template>
  <div class="container">
    <Breadcrumb :items="['menu.dashboard', 'menu.dashboard.estHistory']" />
    <a-card class="general-card" style="width: 100%">
      <template #title>
        {{ $t('estHistory.table.title') }}
      </template>
      <a-table
        :loading="loading"
        :columns="columns"
        :data="tableData"
        style="margin-bottom: 20px"
        :scroll="scroll"
        :pagination="false"
      >
        <template #docUrl="{ record }">
          <a-link @click="download(record.docUrl)">{{
            t('menu.dashboard.download')
          }}</a-link>
        </template>
        <template #dataFile="{ record }">
          <a-link @click="download(record.dataFile)"
            >{{ t('menu.dashboard.download') }}
          </a-link>
        </template>
      </a-table>
    </a-card>
  </div>
</template>

<script lang="ts" setup>
  import { ref, computed } from 'vue';
  import { useI18n } from 'vue-i18n';
  import { getEstHistory } from '@/api/estHistory';
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

  const tableData = ref([]);

  const fetchData = async () => {
    setLoading(true);
    const data = await getEstHistory();
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
