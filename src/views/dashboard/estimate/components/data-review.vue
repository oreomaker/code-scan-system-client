<template>
  <a-card class="general-card" style="width: 100%">
    <template #title>
      {{ $t('stepForm.title.documentMeta') }}
    </template>
    <a-form ref="formRef" layout="vertical" :model="metaData">
      <a-row :gutter="90">
        <!-- elf文件数 -->
        <a-col :span="6">
          <a-form-item
            :label="$t('review.form.metadata.elf')"
            field="metaData.elfNum"
          >
            <a-input-number v-model="metaData.elfNum"> </a-input-number>
          </a-form-item>
        </a-col>
        <!-- ilf文件数 -->
        <a-col :span="6">
          <a-form-item
            :label="$t('review.form.metadata.ilf')"
            field="metaData.ilfNum"
          >
            <a-input-number v-model="metaData.ilfNum"> </a-input-number>
          </a-form-item>
        </a-col>
        <!-- 功能点 -->
        <a-col :span="6">
          <a-form-item
            :label="$t('review.form.metadata.funcPoint')"
            field="metaData.functionPoints"
          >
            <a-input-number v-model="metaData.functionPoints" read-only>
            </a-input-number>
          </a-form-item>
        </a-col>
        <!-- 调整后规模 -->
        <a-col :span="6">
          <a-form-item
            :label="$t('review.form.metadata.adjustedScale')"
            field="metaData.phase"
          >
            <a-input-number v-model="metaData.adjustedScale" read-only>
            </a-input-number>
          </a-form-item>
        </a-col>
      </a-row>
    </a-form>
  </a-card>
  <a-card class="general-card">
    <template #title>
      {{ $t('stepForm.title.documentData') }}
    </template>
    <div class="wrapper">
      <a-table
        :loading="loading"
        :columns="columns"
        :data="tableData"
        style="margin-bottom: 20px"
        :scroll="scroll"
        :pagination="false"
      />
      <a-link href="download">下载数据</a-link>
    </div>
  </a-card>
  <a-card class="general-card" style="width: 100%">
    <template #title>
      {{ $t('stepForm.title.documentUpdate') }}
    </template>
    <div class="wrapper">
      <a-upload style="width: 80%" draggable action="/review/upload" />
    </div>
  </a-card>
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
  import { computed, ref } from 'vue';
  import { useI18n } from 'vue-i18n';
  import useLoading from '@/hooks/loading';
  import { getDocumentMeta, getTableData, DocMetaData } from '@/api/estimate';
  import { FormInstance } from '@arco-design/web-vue/es/form';

  const emits = defineEmits(['changeStep']);
  const { loading, setLoading } = useLoading(true);
  const { t } = useI18n();

  const scroll = {
    x: '80%',
    y: 500,
  };

  const columns = computed(() => {
    return [
      {
        title: t('review.docData.column.funcPoints'),
        dataIndex: 'function',
      },
      {
        title: t('review.docData.column.catagory'),
        dataIndex: 'catagory',
      },
    ];
  });
  const formRef = ref<FormInstance>();
  const metaData = ref<DocMetaData>({
    elfNum: 0,
    ilfNum: 0,
    serviceFactor: 1,
    fieldFactor: 1,
  } as DocMetaData);

  const tableData = ref([]);

  const fetchData = async () => {
    setLoading(true);
    const data = await getTableData();
    const meta = await getDocumentMeta();
    tableData.value = data.data;
    metaData.value = meta.data;
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
  .wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 25px 0;
    background-color: var(--color-bg-2);
  }
</style>
