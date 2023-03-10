<template>
  <div class="container">
    <Breadcrumb :items="['menu.dashboard', 'menu.dashboard.estimate']" />
    <a-spin :loading="loading" style="width: 100%">
      <a-card class="general-card">
        <div class="wrapper">
          <a-steps
            v-model:current="step"
            label-placement="vertical"
            style="width: 580px"
            class="steps"
          >
            <a-step :description="$t('stepForm.step.document.info')">
              {{ $t('stepForm.step.document') }}
            </a-step>
            <a-step :description="$t('stepForm.step.review.info')">
              {{ $t('stepForm.step.review') }}
            </a-step>
            <a-step :description="$t('stepForm.step.estimate.info')">
              {{ $t('stepForm.step.estimate') }}
            </a-step>
          </a-steps>
          <keep-alive>
            <DocUpload v-if="step === 1" @change-step="changeStep" />
            <DataReview v-else-if="step === 2" @change-step="changeStep" />
            <EstResult v-else-if="step === 3" @change-step="changeStep" />
          </keep-alive>
        </div>
      </a-card>
    </a-spin>
  </div>
</template>

<script lang="ts" setup>
  import { ref } from 'vue';
  import useLoading from '@/hooks/loading';
  import {
    submitChannelForm,
    BaseInfoModel,
    ChannelInfoModel,
    UnitChannelModel,
  } from '@/api/form';
  import DocUpload from './components/doc-upload.vue';
  import DataReview from './components/data-review.vue';
  import EstResult from './components/est-result.vue';

  const { loading, setLoading } = useLoading(false);
  const step = ref(1);
  const submitModel = ref<UnitChannelModel>({} as UnitChannelModel);
  const submitForm = async () => {
    setLoading(true);
    try {
      await submitChannelForm(submitModel.value); // The mock api default success
      step.value = 3;
      submitModel.value = {} as UnitChannelModel; // init
    } catch (err) {
      // you can report use errorHandler or other
    } finally {
      setLoading(false);
    }
  };
  const changeStep = (
    direction: string | number,
    model: BaseInfoModel | ChannelInfoModel
  ) => {
    if (typeof direction === 'number') {
      step.value = direction;
      return;
    }

    if (direction === 'forward' || direction === 'submit') {
      submitModel.value = {
        ...submitModel.value,
        ...model,
      };
      if (direction === 'submit') {
        submitForm();
        return;
      }
      step.value += 1;
    } else if (direction === 'backward') {
      step.value -= 1;
    }
  };
</script>

<script lang="ts">
  export default {
    name: 'Step',
  };
</script>

<style scoped lang="less">
  .container {
    padding: 0 20px;
  }

  .wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 64px 0;
    background-color: var(--color-bg-2);

    :deep(.arco-form) {
      .arco-form-item {
        &:last-child {
          margin-top: 20px;
        }
      }
    }
  }

  .steps {
    margin-bottom: 40px;
  }
</style>
