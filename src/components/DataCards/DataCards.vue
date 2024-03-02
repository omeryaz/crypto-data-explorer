<script setup lang="ts">
import { store } from '@/store'
import { computed } from 'vue'
import { formatLargeNumber, formatPercentage } from '@/utils'
const data = computed(() => store.summaryCardData.find((coin) => coin.name === store.selectedCoin))

// CARD DATA

// PRICE
const price = computed(() => formatLargeNumber(data.value?.quote.USD.price ?? 0))
const priceChange = computed(() => data.value?.quote.USD.percent_change_24h ?? 0)
const priceChangeText = computed(() => `${priceChange.value.toFixed(1)}%`)

// Price Percentage Color
let priceChangePercentageColor = computed(() => (priceChange.value > 0 ? 'green' : 'red'))
const priceChangeTextColorStyle = computed(() => ({
  color: priceChangePercentageColor.value
}))

// Price Percentage Icon
let pricePercentageChangeIcon = computed(() =>
  priceChange.value > 0 ? 'bi-arrow-up-short' : 'bi-arrow-down-short'
)

// MARKET CAP
const marketCap = computed(() => formatLargeNumber(data.value?.quote.USD.market_cap ?? 0))

//  VOLUME
const volume = computed(() => formatLargeNumber(data.value?.quote.USD.volume_24h ?? 0))
const volumeChange = computed(() => data.value?.quote.USD.volume_change_24h ?? 0)
const volumeChangeText = computed(() => `${volumeChange.value.toFixed(1)}%`)

// Volume Percentage Color
let volumeChangePercentageColor = computed(() => (volumeChange.value > 0 ? 'green' : 'red'))
const volumeChangeTextColorStyle = computed(() => ({
  color: volumeChangePercentageColor.value
}))

// Price Percentage Icon
let volumePercentageChangeIcon = computed(() =>
  volumeChange.value > 0 ? 'bi-arrow-up-short' : 'bi-arrow-down-short'
)

const dominance = computed(() => formatPercentage(data.value?.quote.USD.market_cap_dominance ?? 0))
</script>

<template>
  <div class="row mb-3">
    <!-- PRICE -->
    <div class="card-container d-flex col-md-3 col-6 mb-3">
      <div class="card flex-grow-1">
        <div class="card-header">Price <span class="card-header--info">(24h %)</span></div>
        <div class="card-body">
          <v-icon class="card__currency-icon" name="bi-currency-dollar" scale="0.8"></v-icon>
          <h5 class="card-title">{{ price }}</h5>
          <p class="card-text card-text--container">
            <span class="card-text--percentage" :style="priceChangeTextColorStyle">
              <v-icon
                :name="pricePercentageChangeIcon"
                scale="0.8"
                :fill="priceChangePercentageColor"
              ></v-icon
              >{{ priceChangeText }}
            </span>
          </p>
        </div>
      </div>
    </div>
    <!-- MARKET CAP -->
    <div class="card-container d-flex col-md-3 col-6 mb-3">
      <div class="card flex-grow-1">
        <div class="card-header">Market Cap</div>
        <div class="card-body">
          <v-icon class="card__currency-icon" name="bi-currency-dollar" scale="0.8"></v-icon>
          <h5 class="card-title">{{ marketCap }}</h5>
        </div>
      </div>
    </div>
    <!-- TRADING VOLUME -->
    <div class="card-container d-flex col-md-3 col-6 mb-3">
      <div class="card flex-grow-1">
        <div class="card-header">Trading Volume <span class="card-header--info">(24h %)</span></div>
        <div class="card-body">
          <v-icon class="card__currency-icon" name="bi-currency-dollar" scale="0.8"></v-icon>
          <h5 class="card-title">{{ volume }}</h5>
          <p class="card-text card-text--container">
            <span class="card-text--percentage" :style="volumeChangeTextColorStyle">
              <v-icon
                :name="volumePercentageChangeIcon"
                scale="0.8"
                :fill="volumeChangePercentageColor"
              ></v-icon
              >{{ volumeChangeText }}
            </span>
          </p>
        </div>
      </div>
    </div>
    <!-- DOMINANCE -->
    <div class="card-container d-flex col-md-3 col-6 mb-3">
      <div class="card flex-grow-1">
        <div class="card-header">Dominance</div>
        <div class="card-body">
          <h5 class="card-title">{{ dominance }}</h5>
          <p class="card-text"></p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.card {
  display: flex;
  justify-content: center;
}

.card-header--info {
  font-size: 0.8rem;
  color: grey;
}

.card-body {
  display: flex;
  justify-items: center;
  align-items: center;
  margin: 0 auto;
  position: relative;
}

@media (min-width: 768px) and (max-width: 991px) {
  .card-body {
    flex-direction: column;
  }

  .card-body > p {
    position: unset;
  }
}
.card-title {
  margin: 0;
}

.card__currency-icon {
  position: absolute;
  top: 1em;
  left: 0;
}

.card-text--container {
  position: absolute;
  left: 85%;
}

.card-text--percentage {
  display: inline-block;
  white-space: nowrap;
}
</style>
