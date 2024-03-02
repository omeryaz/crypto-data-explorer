<script setup lang="ts">
import { ref, watchEffect } from 'vue'
import { store } from '@/store'
import './chart.css'
import { formatLargeNumber } from '@/utils'

const data = ref(store.chartData.find((coin) => coin.name === store.selectedCoin))

// Update data as selectedCoin changes
watchEffect(() => {
  const newData = store.chartData.find((coin) => coin.name === store.selectedCoin)
  data.value = newData
})

interface SeriesDataType {
  name: string
  data: number[][]
}

const chartOptions = ref({
  chart: {
    height: 'auto',
    type: 'candlestick'
  },
  xaxis: {
    type: 'datetime'
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
    text: 'Candlestick'
  }
})

const series = ref<SeriesDataType[]>([
  {
    name: 'Candlestick',
    data: []
  }
])

watchEffect(() => {
  const chartDataValue = data.value
  if (chartDataValue && store.chartSelectedRange in chartDataValue) {
    const rangeData = chartDataValue[store.chartSelectedRange]

    // Prepare Candlestick data
    const candlestickData = rangeData.map((obj) => [
      new Date(obj.timestamp).getTime(),
      Number(formatLargeNumber(Number(obj.open))),
      Number(formatLargeNumber(Number(obj.high))),
      Number(formatLargeNumber(Number(obj.low))),
      Number(formatLargeNumber(Number(obj.close)))
    ])

    // Update series with Candlestick data
    series.value[0].data = candlestickData
  }
})
</script>

<template>
  <div class="apex-chart">
    <apexchart type="candlestick" :options="chartOptions" :series="series"></apexchart>
  </div>
</template>
