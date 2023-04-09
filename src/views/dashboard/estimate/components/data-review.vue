<template>
  <a-card class="general-card" style="width: 100%">
    <template #title>
      {{ $t('stepForm.title.documentMeta') }}
    </template>
    <a-form ref="formRef" layout="vertical" :model="metaData">
      <a-row :gutter="80">
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
      <a-row :gutter="80">
        <!-- 业务领域调整因子 -->
        <a-col :span="6">
          <a-form-item
            :label="$t('review.form.metadata.serviceFactor')"
            field="metaData.serviceFactor"
          >
            <a-input-number v-model="metaData.serviceFactor"> </a-input-number>
          </a-form-item>
        </a-col>
        <!-- 应用领域调整因子 -->
        <a-col :span="6">
          <a-form-item
            :label="$t('review.form.metadata.fieldFactor')"
            field="metaData.fieldFactor"
          >
            <a-input-number v-model="metaData.fieldFactor"> </a-input-number>
          </a-form-item>
        </a-col>
        <!-- 完整性级别调整因子 -->
        <a-col :span="6">
          <a-form-item
            :label="$t('review.form.metadata.integrityLevelFactor')"
            field="metaData.integrityLevelFactor"
          >
            <a-input-number v-model="metaData.integrityLevelFactor">
            </a-input-number>
          </a-form-item>
        </a-col>
        <!-- 质量要求调整因子 -->
        <a-col :span="6">
          <a-form-item
            :label="$t('review.form.metadata.qualityFactor')"
            field="metaData.qualityFactor"
          >
            <a-input-number v-model="metaData.qualityFactor"> </a-input-number>
          </a-form-item>
        </a-col>
      </a-row>
      <a-row :gutter="80">
        <!-- 软件调整因素 -->
        <a-col :span="6">
          <a-form-item
            :label="$t('review.form.metadata.ajustmentFactor')"
            field="metaData.ajustmentFactor"
          >
            <a-input-number v-model="ajustmentFactor" read-only>
            </a-input-number>
          </a-form-item>
        </a-col>
        <!-- 开发调整因素 -->
        <a-col :span="6">
          <a-form-item
            :label="$t('review.form.metadata.devFactor')"
            field="metaData.devFactor"
          >
            <a-input-number v-model="metaData.devFactor"> </a-input-number>
          </a-form-item>
        </a-col>
        <!-- 调整后工作量 -->
        <a-col :span="6">
          <a-form-item
            :label="$t('review.form.metadata.ajustedWorkload')"
            field="metaData.ajustedWorkload"
          >
            <a-input-number v-model="ajustedWorkload" read-only>
            </a-input-number>
          </a-form-item>
        </a-col>
        <!-- 开发团队所在地 -->
        <a-col :span="6">
          <a-form-item
            :label="$t('review.form.metadata.devCity')"
            field="metaData.devCity"
          >
            <a-input v-model="metaData.devCity"> </a-input>
          </a-form-item>
        </a-col>
        <!-- 开发阶段 -->
        <!-- <a-col :span="6">
          <a-form-item
            :label="$t('review.form.metadata.phase')"
            field="metaData.phase"
          >
            <a-select
              v-model="metaData.phase"
              :placeholder="$t('review.form.metadata.phase.placeholder')"
            >
              <a-option :value="1">早期</a-option>
              <a-option :value="2">中期</a-option>
              <a-option :value="3">后期</a-option>
              <a-option :value="4">交付后及运维</a-option>
            </a-select>
          </a-form-item>
        </a-col> -->
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
    y: 300,
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
      {
        title: t('review.docData.column.reuse'),
        dataIndex: 'reuse',
      },
      {
        title: t('review.docData.column.modify'),
        dataIndex: 'modify',
      },
    ];
  });
  const formRef = ref<FormInstance>();
  const metaData = ref<DocMetaData>({
    elfNum: 0,
    ilfNum: 0,
    serviceFactor: 1,
    fieldFactor: 1,
    integrityLevelFactor: 1,
    qualityFactor: 1,
    devFactor: 1,
    devCity: '北京',
    phase: 1,
    functionPoints: 0,
    adjustedScale: 0,
    ajustmentFactor: 1,
    ajustedWorkload: 0,
  } as DocMetaData);
  // 软件调整因素
  const ajustmentFactor = computed(() => {
    return parseFloat(
      (
        metaData.value.serviceFactor *
        metaData.value.fieldFactor *
        metaData.value.integrityLevelFactor *
        metaData.value.qualityFactor
      ).toFixed(2)
    );
  });
  // 调整后工作量
  const ajustedWorkload = computed(() => {
    return parseFloat(
      (
        (metaData.value.adjustedScale *
          7.01 *
          ajustmentFactor.value *
          metaData.value.devFactor) /
        8 /
        21.75
      ).toFixed(2)
    );
  });
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
