<!-- TestChart.vue -->
<script setup lang="ts">
import { ref, watchEffect } from 'vue'
import { store } from '@/store'
import './chart.css'
import { formatLargeNumber } from '@/utils'

const data = ref(store.chartData.find((coin) => coin.name === store.selectedCoin))
const highestValues = ref<string[]>([])
const lowestValues = ref<string[]>([])
const timeStamps = ref<string[]>([])

watchEffect(() => {
  const newData = store.chartData.find((coin) => coin.name === store.selectedCoin)
  data.value = newData
})

const chartOptions = ref({
  chart: {
    height: 'auto',
    type: 'line'
  },
  dataLabels: {
    enabled: false
  },
  stroke: {
    curve: 'straight'
  },
  xaxis: {
    type: 'datetime',
    categories: timeStamps.value
  },
  yaxis: {
    title: {
      text: 'Dollars ($)'
    }
  },
  tooltip: {
    x: {
      format: 'dd/MM/yy HH:mm'
    }
  },
  theme: {
    mode: 'dark'
  },
  title: {
    text: 'High-Low'
  }
})

const series = ref([
  {
    name: 'Highest',
    data: highestValues.value
  },
  {
    name: 'Lowest',
    data: lowestValues.value
  }
])
watchEffect(() => {
  const chartDataValue = data.value
  if (chartDataValue && store.chartSelectedRange in chartDataValue) {
    const rangeData = chartDataValue[store.chartSelectedRange]
    highestValues.value = rangeData.map((obj) => formatLargeNumber(Number(obj.open)))
    lowestValues.value = rangeData.map((obj) => formatLargeNumber(Number(obj.close)))
    timeStamps.value = rangeData.map((obj) => String(obj.timestamp))

    // Store the values to the second series
    series.value[0].data = lowestValues.value
    // Store the values to the first series
    series.value[1].data = highestValues.value

    // Update chartOptions with the new timeStamps
    chartOptions.value = {
      ...chartOptions.value,
      xaxis: {
        ...chartOptions.value.xaxis,
        categories: timeStamps.value
      }
    }
  } else {
    highestValues.value = []
    lowestValues.value = []
    timeStamps.value = []
  }
})
</script>

<template>
  <div class="apex-chart">
    <apexchart type="area" :options="chartOptions" :series="series"></apexchart>
  </div>
</template>
