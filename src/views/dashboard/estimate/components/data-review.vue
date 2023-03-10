<template>
  <a-card class="general-card">
    <template #title>
      {{ $t('stepForm.title.documentMeta') }}
    </template>
    <a-row :gutter="80">
      <a-col :span="8">
        <a-form-item
          :label="$t('groupForm.form.label.video.mode')"
          field="video.mode"
        >
          <a-select :placeholder="$t('groupForm.placeholder.video.mode')">
            <a-option value="custom">自定义</a-option>
            <a-option value="mode1">模式1</a-option>
            <a-option value="mode2">模式2</a-option>
          </a-select>
        </a-form-item>
      </a-col>
      <a-col :span="8">
        <a-form-item
          :label="$t('groupForm.form.label.video.acquisition.resolution')"
          field="video.acquisition.resolution"
        >
          <a-select
            :placeholder="
              $t('groupForm.placeholder.video.acquisition.resolution')
            "
          >
            <a-option value="resolution1">分辨率1</a-option>
            <a-option value="resolution2">分辨率2</a-option>
            <a-option value="resolution3">分辨率3</a-option>
          </a-select>
        </a-form-item>
      </a-col>
      <a-col :span="8">
        <a-form-item
          :label="$t('groupForm.form.label.video.acquisition.frameRate')"
          field="video.acquisition.frameRate"
        >
          <a-input
            :placeholder="
              $t('groupForm.placeholder.video.acquisition.frameRate')
            "
          >
            <template #append> fps </template>
          </a-input>
        </a-form-item>
      </a-col>
    </a-row>
    <a-row :gutter="80">
      <a-col :span="8">
        <a-form-item
          :label="$t('groupForm.form.label.video.encoding.resolution')"
          field="video.encoding.resolution"
        >
          <a-select
            :placeholder="$t('groupForm.placeholder.video.encoding.resolution')"
          >
            <a-option value="resolution1">分辨率1</a-option>
            <a-option value="resolution2">分辨率2</a-option>
            <a-option value="resolution3">分辨率3</a-option>
          </a-select>
        </a-form-item>
      </a-col>
      <a-col :span="8">
        <a-form-item
          :label="$t('groupForm.form.label.video.encoding.rate.min')"
          field="video.encoding.rate.min"
        >
          <a-input
            :placeholder="$t('groupForm.placeholder.video.encoding.rate.min')"
            add-after="bps"
          >
            <template #append> bps </template>
          </a-input>
        </a-form-item>
      </a-col>
      <a-col :span="8">
        <a-form-item
          :label="$t('groupForm.form.label.video.encoding.rate.max')"
          field="video.encoding.rate.max"
        >
          <a-input
            :placeholder="$t('groupForm.placeholder.video.encoding.rate.max')"
          >
            <template #append> bps </template>
          </a-input>
        </a-form-item>
      </a-col>
    </a-row>
    <a-row :gutter="80">
      <a-col :span="8">
        <a-form-item
          :label="$t('groupForm.form.label.video.encoding.rate.default')"
          field="video.encoding.rate.default"
        >
          <a-input
            :placeholder="
              $t('groupForm.placeholder.video.encoding.rate.default')
            "
          >
            <template #append> bps </template>
          </a-input>
        </a-form-item>
      </a-col>
      <a-col :span="8">
        <a-form-item
          :label="$t('groupForm.form.label.video.encoding.frameRate')"
          field="video.encoding.frameRate"
        >
          <a-input
            :placeholder="$t('groupForm.placeholder.video.encoding.frameRate')"
          >
            <template #append> fps </template>
          </a-input>
        </a-form-item>
      </a-col>
      <a-col :span="8">
        <a-form-item
          :label="$t('groupForm.form.label.video.encoding.profile')"
          field="video.encoding.profile"
        >
          <a-input
            :placeholder="$t('groupForm.placeholder.video.encoding.profile')"
          >
            <template #append> bps </template>
          </a-input>
        </a-form-item>
      </a-col>
    </a-row>
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
      <a-button type="text">下载数据</a-button>
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
  import { ref } from 'vue';
  import useLoading from '@/hooks/loading';
  import { getTableData } from '@/api/estimate';

  const emits = defineEmits(['changeStep']);
  const { loading, setLoading } = useLoading(true);

  const scroll = {
    x: '80%',
    y: 500,
  };

  const columns = ref([
    {
      title: 'Function',
      dataIndex: 'function',
    },
    {
      title: 'Catagory',
      dataIndex: 'catagory',
    },
    {
      title: 'Reuse',
      dataIndex: 'reuse',
    },
    {
      title: 'Modify',
      dataIndex: 'modify',
    },
  ]);
  const formData = ref({
    activityName: '',
    channelType: '',
    promotionTime: [],
    promoteLink: 'https://arco.design',
  });
  const metaData = ref([
    {
      label: 'ELF类型文件数量',
      value: 21,
    },
    {
      label: 'ILF类型文件数量',
      value: 60,
    },
    {
      label: '功能点计数',
      value: 2415,
    },
    {
      label: '项目阶段',
      value: '早期阶段',
    },
    {
      label: '项目规模',
      value: 2415,
    },
  ]);
  const tableData = ref([]);

  const fetchData = async () => {
    setLoading(true);
    const { data } = await getTableData();
    tableData.value = data.data;
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
  .container {
    .keep-margin {
      margin-bottom: 10px;
    }
  }

  .wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 10px 0;
    background-color: var(--color-bg-2);
  }

  .steps {
    margin-bottom: 36px;
  }

  .form {
    width: 540px;
  }

  .form-content {
    padding: 8px 50px 0 30px;
  }
</style>
