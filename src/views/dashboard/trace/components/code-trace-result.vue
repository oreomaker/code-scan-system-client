<template>
  <div class="wrapper">
    <Chart style="width: 500px; height: 222px" :option="chartOption" />
  </div>
  <a-descriptions :data="data" :column="{ xs: 1, md: 3, lg: 4 }">
    <a-descriptions-item
      v-for="item of data"
      :key="item.label"
      :label="item.label"
    >
      <a-tag>{{ item.value }}</a-tag>
    </a-descriptions-item>
  </a-descriptions>
</template>

<script lang="ts" setup>
  import { ref } from 'vue';
  import useChartOption from '@/hooks/chart-option';

  const { chartOption } = useChartOption((isDark) => {
    return {
      grid: {
        left: 0,
        right: 0,
        top: 0,
        bottom: 20,
      },
      legend: {
        show: true,
        top: 'center',
        right: '0',
        orient: 'vertical',
        icon: 'circle',
        itemWidth: 10,
        itemHeight: 10,
        itemGap: 20,
        textStyle: {
          color: isDark ? '#ffffff' : '#4E5969',
        },
      },
      radar: {
        center: ['40%', '50%'],
        radius: 80,
        indicator: [
          { name: '文本相似度', max: 100 },
          { name: '控制流分析', max: 100 },
          { name: '程序依赖图', max: 100 },
          { name: '抽象语法树', max: 100 },
          { name: '总评估相似度', max: 100 },
        ],
        axisName: {
          color: isDark ? '#ffffff' : '#1D2129',
        },
        axisLine: {
          lineStyle: {
            color: isDark ? '#484849' : '#E5E6EB',
          },
        },
        splitLine: {
          lineStyle: {
            color: isDark ? '#484849' : '#E5E6EB',
          },
        },
        splitArea: {
          areaStyle: {
            color: [],
          },
        },
      },
      series: [
        {
          type: 'radar',
          areaStyle: {
            opacity: 0.2,
          },
          data: [
            {
              value: [48, 19, 19, 29, 10],
              name: '项目一',
              symbol: 'none',
              itemStyle: {
                color: isDark ? '#6CAAF5' : '#249EFF',
              },
            },
            // {
            //   value: [2250, 17000, 21000, 23500],
            //   name: '项目二',
            //   symbol: 'none',
            //   itemStyle: {
            //     color: isDark ? '#A079DC' : '#313CA9',
            //   },
            // },
            // {
            //   value: [5850, 11000, 26000, 27500],
            //   name: '项目三',
            //   symbol: 'none',
            //   itemStyle: {
            //     color: isDark ? '#3D72F6' : '#21CCFF',
            //   },
            // },
          ],
        },
      ],
    };
  });
  const data = ref([
    {
      label: '版本号',
      value: '1.0.0',
    },
    {
      label: '可能存在的漏洞',
      value: 'none',
    },
    {
      label: '文本相似度',
      value: '54',
    },
    {
      label: '控制流分析',
      value: '14',
    },
    {
      label: '程序依赖图',
      value: '12',
    },
    {
      label: '抽象语法树',
      value: '20',
    },
    {
      label: '总评估相似度',
      value: '60',
    },
    {
      label: '项目地址',
      value: 'https://github.com/example/exapmle.git',
    },
  ]);
</script>

<style scoped lang="less">
  .wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 10px 0;
    background-color: var(--color-bg-2);
  }
</style>
