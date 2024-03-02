<script setup lang="ts">
import { ref, watchEffect } from 'vue'
import { store } from '@/store'
import './chart.css'
import { formatLargeNumber } from '@/utils'

const data = ref(store.chartData.find((coin) => coin.name === store.selectedCoin))
const openValues = ref<string[]>([])
const closeValues = ref<string[]>([])
const timeStamps = ref<string[]>([])

// Update data as selectedCoin changes
watchEffect(() => {
  const newData = store.chartData.find((coin) => coin.name === store.selectedCoin)
  data.value = newData
})

const chartOptions = ref({
  chart: {
    height: 'auto',
    type: 'area'
  },
  dataLabels: {
    enabled: false
  },
  stroke: {
    curve: 'smooth'
  },
  xaxis: {
    type: 'datetime',
    categories: timeStamps.value
  },
  yaxis: {
    title: {
      text: 'Price ($)'
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
    text: 'Open-Close'
  }
})

const series = ref([
  {
    name: 'Open',
    data: openValues.value
  },
  {
    name: 'Close',
    data: closeValues.value
  }
])

// Update series as data or chartSelectedRange changes
watchEffect(() => {
  const chartDataValue = data.value
  if (chartDataValue && store.chartSelectedRange in chartDataValue) {
    const rangeData = chartDataValue[store.chartSelectedRange]
    openValues.value = rangeData.map((obj) => formatLargeNumber(Number(obj.open)))
    closeValues.value = rangeData.map((obj) => formatLargeNumber(Number(obj.close)))
    timeStamps.value = rangeData.map((obj) => String(obj.timestamp))

    // Update series with new open values
    series.value[0].data = openValues.value
    // Update series with new close values
    series.value[1].data = closeValues.value

    // Update chartOptions with the new timeStamps
    chartOptions.value = {
      ...chartOptions.value,
      xaxis: {
        ...chartOptions.value.xaxis,
        categories: timeStamps.value
      }
    }
  } else {
    openValues.value = []
    closeValues.value = []
    timeStamps.value = []
  }
})
</script>

<template>
  <div class="apex-chart">
    <apexchart type="area" :options="chartOptions" :series="series"></apexchart>
  </div>
</template>
