<template>
  <div class="container">
    <Breadcrumb :items="['menu.dashboard', 'menu.dashboard.trace']" />
    <a-space direction="vertical" :size="16" fill>
      <a-card class="general-card" style="width: 100%">
        <template #title>
          {{ $t('trace.info.title') }}
        </template>
        <a-form ref="formRef" layout="vertical" :model="metaData">
          <a-row :gutter="80">
            <a-col :span="6">
              <a-form-item
                :label="$t('trace.metadata.applicationField')"
                field="metaData.applicationField"
              >
                <a-select
                  v-model="metaData.applicationField"
                  :placeholder="$t('trace.metadata.applicationField')"
                >
                  <a-option :value="1">政府</a-option>
                  <a-option :value="2">教育</a-option>
                  <a-option :value="3">互联网</a-option>
                  <a-option :value="4">能源</a-option>
                  <a-option :value="5">交通</a-option>
                  <a-option :value="6">制造</a-option>
                </a-select>
              </a-form-item>
            </a-col>
            <!-- 文本相似度权重 -->
            <a-col :span="6">
              <a-form-item
                :label="$t('trace.metadata.similarityWeight')"
                field="metaData.similarityWeight"
              >
                <a-input-number v-model="metaData.similarityWeight">
                </a-input-number>
              </a-form-item>
            </a-col>
            <!-- 控制流分析相似度权重 -->
            <a-col :span="6">
              <a-form-item
                :label="$t('trace.metadata.controlFlowWeight')"
                field="metaData.controlFlowWeight"
              >
                <a-input-number v-model="metaData.controlFlowWeight">
                </a-input-number>
              </a-form-item>
            </a-col>
            <!-- 依赖图分析权重 -->
            <a-col :span="6">
              <a-form-item
                :label="$t('trace.metadata.depdGraphWeight')"
                field="metaData.depdGraphWeight"
              >
                <a-input-number v-model="metaData.depdGraphWeight">
                </a-input-number>
              </a-form-item>
            </a-col>
          </a-row>
          <a-row :gutter="80">
            <!-- 抽象语法树分析相似度权重 -->
            <a-col :span="6">
              <a-form-item
                :label="$t('trace.metadata.astWeight')"
                field="metaData.astWeight"
              >
                <a-input-number v-model="metaData.astWeight"> </a-input-number>
              </a-form-item>
            </a-col>
            <!-- 可接受相似度阈值 -->
            <a-col :span="6">
              <a-form-item
                :label="$t('trace.metadata.similarityThreshold')"
                field="metaData.similarityThreshold"
              >
                <a-input-number v-model="metaData.similarityThreshold">
                </a-input-number>
              </a-form-item>
            </a-col>
            <!-- 项目成本 -->
            <a-col :span="6">
              <a-form-item
                :label="$t('trace.metadata.projectCost')"
                field="metaData.projectCost"
              >
                <a-input-number v-model="metaData.projectCost">
                </a-input-number>
              </a-form-item>
            </a-col>
          </a-row>
        </a-form>
      </a-card>
      <a-card class="general-card" :bordered="false">
        <template #title> {{ $t('trace.upload.title') }} </template>
        {{ $t('trace.upload.detail') }}
        <div class="wrapper">
          <a-upload
            style="width: 680px; margin-top: 20px"
            draggable
            action="/api/trace/upload"
          />
        </div>
      </a-card>
      <a-card
        v-if="isSubmit"
        class="general-card"
        :header-style="{ paddingBottom: 0 }"
      >
        <template #title>
          {{ $t('trace.result.title') }}
        </template>
        <CodeTraceResult :table-data="tableData" />
      </a-card>
    </a-space>
    <div class="actions">
      <a-space>
        <a-button @click="onResetClick">
          {{ $t('trace.upload.reset') }}
        </a-button>
        <a-button type="primary" :loading="loading" @click="onSubmitClick">
          {{ $t('trace.upload.button') }}
        </a-button>
      </a-space>
    </div>
  </div>
</template>

<script lang="ts" setup>
  import { ref } from 'vue';
  import { FormInstance } from '@arco-design/web-vue/es/form';
  import useLoading from '@/hooks/loading';
  import { CodeMetaData, getTraceResult } from '@/api/trace';
  import CodeTraceResult from './components/code-trace-result.vue';

  const formRef = ref<FormInstance>();
  const { loading, setLoading } = useLoading();
  const isSubmit = ref(false);
  const metaData = ref<CodeMetaData>({
    applicationField: 1,
    similarityThreshold: 0.5,
    similarityWeight: 0.25,
    controlFlowWeight: 0.25,
    depdGraphWeight: 0.25,
    astWeight: 0.25,
    projectCost: 507,
  } as CodeMetaData);

  const tableData = ref([]);
  const fetchData = async () => {
    setLoading(true);
    const res = await getTraceResult();
    tableData.value = res.data;
    setLoading(false);
  };

  const onSubmitClick = async () => {
    const res = await formRef.value?.validate();
    if (!res) {
      setLoading(true);
    }
    isSubmit.value = true;
    await fetchData();
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  };
  const onResetClick = () => {
    isSubmit.value = false;
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

  .actions {
    position: fixed;
    right: 0;
    bottom: 0;
    left: 0;
    height: 60px;
    padding: 14px 20px 14px 0;
    text-align: right;
    background: var(--color-bg-2);
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
