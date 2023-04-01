<template>
  <div class="container">
    <Breadcrumb :items="['menu.dashboard', 'menu.dashboard.trace']" />
    <a-space direction="vertical" :size="16" fill>
      <a-card class="general-card" :bordered="false">
        <template #title> {{ $t('trace.upload.title') }} </template>
        {{ $t('trace.upload.detail') }}
        <div class="wrapper">
          <a-upload
            style="width: 680px; margin-top: 20px"
            draggable
            action="/trace/upload"
          />
        </div>
      </a-card>
      <CodeTraceResult />
    </a-space>
    <div class="actions">
      <a-space>
        <a-button>
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
  import CodeTraceResult from './components/code-trace-result.vue';

  const formRef = ref<FormInstance>();
  const { loading, setLoading } = useLoading();
  const onSubmitClick = async () => {
    const res = await formRef.value?.validate();
    if (!res) {
      setLoading(true);
    }
    setTimeout(() => {
      setLoading(false);
    }, 1000);
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
