<template>
  <a-upload style="width: 680px" draggable action="/estimate/upload" />
  <a-button style="margin-top: 40px" type="primary" @click="onNextClick">
    {{ $t('stepForm.button.next') }}
  </a-button>
</template>

<script lang="ts" setup>
  import { ref } from 'vue';
  import { FormInstance } from '@arco-design/web-vue/es/form';
  import { BaseInfoModel } from '@/api/form';

  const emits = defineEmits(['changeStep']);

  const onNextClick = async () => {
    // const res = await formRef.value?.validate();
    // if (!res) {
    //   emits('changeStep', 'forward', {});
    // }

    // TODO: upload file
    // eslint-disable-next-line no-console
    console.log('upload file, then go to next step');
    emits('changeStep', 'forward', {});
  };
</script>

<style scoped lang="less">
  .container {
    padding: 20px;

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
    width: 500px;
  }

  .form-content {
    padding: 8px 50px 0 30px;
  }
</style>
