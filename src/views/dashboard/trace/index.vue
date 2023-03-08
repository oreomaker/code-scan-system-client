<template>
  <div class="container">
    <Breadcrumb :items="['menu.dashboard', 'menu.dashboard.trace']" />
    <a-card class="general-card" :bordered="false">
      <template #title>
        {{ $t('groupForm.title.description') }}
      </template>
      <a-form-item
        :label="$t('groupForm.form.label.parameterDescription')"
        field="audio.approvers"
      >
        <a-textarea :placeholder="$t('groupForm.placeholder.description')" />
      </a-form-item>
    </a-card>
    <div class="actions">
      <a-space>
        <a-button>
          {{ $t('groupForm.reset') }}
        </a-button>
        <a-button type="primary" :loading="loading" @click="onSubmitClick">
          {{ $t('groupForm.submit') }}
        </a-button>
      </a-space>
    </div>
  </div>
</template>

<script lang="ts" setup>
  import { ref } from 'vue';
  import { FormInstance } from '@arco-design/web-vue/es/form';
  import useLoading from '@/hooks/loading';

  const formData = ref({});
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
</style>
