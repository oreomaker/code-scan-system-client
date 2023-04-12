<template>
  <a-card class="general-card" style="width: 100%">
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
      </a-row>
      <a-row :gutter="80">
        <!-- 项目成本 -->
        <a-col :span="12" :offset="6">
          <a-form-item
            :label="$t('review.form.metadata.money')"
            field="metaData.money"
          >
            <a-input-number v-model="money" read-only> </a-input-number>
          </a-form-item>
        </a-col>
      </a-row>
    </a-form>
  </a-card>
  <a-space :size="16" style="margin-top: 40px">
    <a-button key="agian" type="primary" @click="oneMore">
      {{ $t('stepForm.button.again') }}
    </a-button>
  </a-space>
</template>

<script lang="ts" setup>
  import { computed, ref } from 'vue';
  import { DocMetaData } from '@/api/estimate';

  const emits = defineEmits(['changeStep']);

  const oneMore = () => {
    emits('changeStep', 1);
  };

  const money = 507;

  const metaData = ref<DocMetaData>({
    elfNum: 19,
    ilfNum: 58,
    serviceFactor: 1.1,
    fieldFactor: 1.0,
    integrityLevelFactor: 1.1,
    qualityFactor: 1.0,
    devFactor: 1.0,
    devCity: '北京',
    functionPoints: 2315,
    adjustedScale: 3217.85,
    ajustmentFactor: 1.21,
    ajustedWorkload: 156.86,
    money: 507,
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
