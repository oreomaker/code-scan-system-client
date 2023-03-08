<template>
  <a-spin class="success-wrap" :loading="loading">
    <a-space direction="vertical" size="large" fill>
      <a-descriptions :data="data" title="估计结果" :column="3">
        <a-descriptions-item
          v-for="item of data"
          :key="item.label"
          :label="item.label"
        >
          <a-tag>{{ item.value }}</a-tag>
        </a-descriptions-item>
      </a-descriptions>
    </a-space>
    <a-space :size="16" style="margin-top: 40px">
      <a-button key="agian" type="primary" @click="oneMore">
        {{ $t('stepForm.button.again') }}
      </a-button>
    </a-space>
  </a-spin>
</template>

<script lang="ts" setup>
  import { ref } from 'vue';
  import { estimate } from '@/api/estimate';
  import useLoading from '@/hooks/loading';

  const emits = defineEmits(['changeStep']);
  const { loading, setLoading } = useLoading(true);
  const oneMore = () => {
    emits('changeStep', 1);
  };
  const data = ref([
    {
      label: 'Name',
      value: '',
    },
    {
      label: 'Mobile',
      value: '',
    },
    {
      label: 'Residence',
      value: '',
    },
    {
      label: 'Hometown',
      value: '',
    },
    {
      label: 'Address',
      value: '',
    },
  ]);

  const fetchData = async () => {
    setLoading(true);
    const res = await estimate();
    data.value = res.data;
    setLoading(false);
  };

  fetchData();
</script>

<style scoped lang="less">
  .success-wrap {
    text-align: center;
  }

  :deep(.arco-result) {
    padding-top: 0;
  }
</style>
