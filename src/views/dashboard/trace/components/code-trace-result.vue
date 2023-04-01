<template>
  <a-card class="general-card" :header-style="{ paddingBottom: 0 }">
    <template #title>
      {{ $t('trace.result.title') }}
    </template>
    <div class="wrapper">
      <Chart style="width: 500px; height: 222px" :option="chartOption" />
    </div>
  </a-card>
</template>

<script lang="ts" setup>
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
          { name: '数据流', max: 6500 },
          { name: '代码结构', max: 22000 },
          { name: '变量名', max: 30000 },
          { name: '其他', max: 38000 },
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
              value: [4850, 19000, 19000, 29500],
              name: '项目一',
              symbol: 'none',
              itemStyle: {
                color: isDark ? '#6CAAF5' : '#249EFF',
              },
            },
            {
              value: [2250, 17000, 21000, 23500],
              name: '项目二',
              symbol: 'none',
              itemStyle: {
                color: isDark ? '#A079DC' : '#313CA9',
              },
            },
            {
              value: [5850, 11000, 26000, 27500],
              name: '项目三',
              symbol: 'none',
              itemStyle: {
                color: isDark ? '#3D72F6' : '#21CCFF',
              },
            },
          ],
        },
      ],
    };
  });
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
