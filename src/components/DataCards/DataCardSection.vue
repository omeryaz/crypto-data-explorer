<script setup lang="ts">
import CustomCard from './subcomponents/CustomCard.vue'
import { computed } from 'vue'
import { store } from '@/store'
import { formatLargeNumber, formatPercentage } from '@/utils'

const data = computed(() => store.summaryCardData.find((coin) => coin.name === store.selectedCoin))

// CARD DATA

// PRICE
const price = computed(() => formatLargeNumber(data.value?.quote.USD.price ?? 0))
const priceChange = computed(() => data.value?.quote.USD.percent_change_24h ?? 0)

// MARKET CAP
const marketCap = computed(() => formatLargeNumber(data.value?.quote.USD.market_cap ?? 0))

//  VOLUME
const volume = computed(() => formatLargeNumber(data.value?.quote.USD.volume_24h ?? 0))
const volumeChange = computed(() => data.value?.quote.USD.volume_change_24h ?? 0)

// DOMINANCE
const dominance = computed(() => formatPercentage(data.value?.quote.USD.market_cap_dominance ?? 0))
</script>

<template>
  <div class="row mb-3">
    <!-- PRICE CARD -->
    <CustomCard
      title="Price (24h %)"
      icon="bi-currency-dollar"
      :value="price"
      :change="priceChange"
    />
    <!-- MARKET CAP CARD -->
    <CustomCard title="Market Cap" icon="bi-currency-dollar" :value="marketCap" />
    <!-- TRADING VOLUME CARD -->
    <CustomCard
      title="Trading Volume (24h %)"
      icon="bi-currency-dollar"
      :value="volume"
      :change="volumeChange"
    />
    <!-- DOMINANCE CARD -->
    <CustomCard title="Dominance" :value="dominance" />
  </div>
</template>
