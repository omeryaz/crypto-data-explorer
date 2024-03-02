<script setup lang="ts">
import { computed } from 'vue'
import IconBitcoin from '@/components/icons/IconBitcoin.vue'
import IconEthereum from '@/components/icons/IconEthereum.vue'
import IconSolana from '@/components/icons/IconSolana.vue'
import IconMina from '@/components/icons/IconMina.vue'
import IconPolkadot from '@/components/icons/IconPolkadot.vue'
import IconAvalanche from '@/components/icons/IconAvalanche.vue'
import { store } from '@/store'

// Retrieve selected coin acronym/symbol, e.g. BTC
const coinAcronym = computed(
  () => store.summaryCardData.find((coin) => coin.name === store.selectedCoin)?.symbol
)

// Select coin icon
const selectedIcon = computed(() => {
  switch (store.selectedCoin) {
    case 'Bitcoin':
      return IconBitcoin
    case 'Ethereum':
      return IconEthereum
    case 'Solana':
      return IconSolana
    case 'Polkadot':
      return IconPolkadot
    case 'Mina':
      return IconMina
    case 'Avalanche':
      return IconAvalanche
    default:
      return IconBitcoin
  }
})
</script>

<template>
  <div class="coin-info">
    <div class="coin-info__symbol">
      <component :is="selectedIcon"></component>
    </div>
    <h5 class="coin-info__name">
      {{ store.selectedCoin }}
      <i class="coin-info__acronym">{{ coinAcronym }}</i>
    </h5>
  </div>
</template>

<style scoped>
.coin-info {
  display: flex;
  width: max-content;
}
.coin-info__symbol {
  height: 5em;
  width: 5em;
  margin: 0 1em;
}
.coin-info__name {
  position: relative;
  text-transform: capitalize;
  font-size: 4em;
}
.coin-info__acronym {
  text-transform: uppercase;
  position: absolute;
  font-size: 0.4em;
  bottom: -1em;
  left: 0.25em;
}
</style>
