<template>
  <div class="container">
    <Breadcrumb :items="['menu.dashboard', 'menu.dashboard.estimate']" />
    <a-form
      ref="formRef"
      layout="vertical"
      :model="form"
      @submit="handleSubmit"
    >
      <a-space direction="vertical" :size="16">
        <a-card class="general-card">
          <template #title>
            {{ $t('dashboard.title.document') }}
          </template>
          <a-row :gutter="80">
            <a-col :span="8">
              <a-form-item
                :label="$t('dashboard.form.label.location')"
                field="location"
              >
                <a-select
                  v-model="form.location"
                  :placeholder="$t('groupForm.placeholder.video.mode')"
                >
                  <a-option value="Beijing">北京</a-option>
                  <a-option value="Shanghai">上海</a-option>
                  <a-option value="Shenzhen">深圳</a-option>
                </a-select>
              </a-form-item>
            </a-col>
            <a-col :span="8">
              <a-form-item
                :label="$t('groupForm.form.label.video.acquisition.resolution')"
                field="factor1"
              >
                <a-select
                  v-model="form.factor1"
                  :placeholder="$t('dashboard.form.label.factor1')"
                >
                  <a-option value="resolution1">分辨率1</a-option>
                  <a-option value="resolution2">分辨率2</a-option>
                  <a-option value="resolution3">分辨率3</a-option>
                </a-select>
              </a-form-item>
            </a-col>
            <a-col :span="8">
              <a-form-item
                :label="$t('dashboard.form.label.factor2')"
                field="factor2"
              >
                <a-input
                  v-model="form.factor2"
                  :placeholder="
                    $t('groupForm.placeholder.video.acquisition.frameRate')
                  "
                >
                  <template #append> ms </template>
                </a-input>
              </a-form-item>
            </a-col>
          </a-row>
        </a-card>
        <a-card class="general-card" :bordered="true" style="padding-top: 20px">
          <a-upload draggable :action="uploadUrl" />
        </a-card>
      </a-space>
      <!-- TODO: for debug -->
      {{ form }}
      {{ costEstimate }}
      <div class="actions">
        <a-space>
          <a-button>
            {{ $t('groupForm.reset') }}
          </a-button>
          <a-button type="primary" :loading="loading" html-type="submit">
            {{ $t('groupForm.submit') }}
          </a-button>
        </a-space>
      </div>
    </a-form>
  </div>
</template>

<script lang="ts" setup>
  import { ref } from 'vue';
  import useLoading from '@/hooks/loading';
  import { estimate, EstimateData } from '@/api/estimate';

  const { loading, setLoading } = useLoading();
  const uploadUrl = ref('/estimate/upload');
  const form = ref<EstimateData>({
    location: '',
    factor1: '',
    factor2: '',
  });
  const costEstimate = ref(0);
  const handleSubmit = async () => {
    setLoading(true);
    const res = await estimate(form.value);
    // eslint-disable-next-line no-console
    console.log(res);
    costEstimate.value = res?.data.cost;
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
    name: 'Estimate',
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
