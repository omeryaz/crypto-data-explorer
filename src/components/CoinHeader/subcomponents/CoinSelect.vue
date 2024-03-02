<script setup lang="ts">
import axios from 'axios'
import { store } from '@/store'
import type { CoinData } from '@/store'
import { onMounted } from 'vue'

// List of available coins
const coinArr = ['Avalanche', 'Bitcoin', 'Ethereum', 'Mina', 'Polkadot', 'Solana']

const handleSelectChange = async () => {
  // Call off fetching from the API if the data is already available
  if (store.chartData.map((el) => el.name).includes(store.selectedCoin)) {
    return
  }
  try {
    // Initialize loading
    store.isLoading = true
    // Fetch data
    const response = await axios.get(`http://localhost:3000/api/data/${store.selectedCoin}`)
    const { apiData, name, week, month, year } = response.data

    // Pass card data into state
    const coinData = Object.values(apiData)[0] as CoinData
    store.summaryCardData = [...store.summaryCardData, coinData]

    // Pass chart data into state
    store.chartData = [...store.chartData, { name, week, month, year }]
  } catch {
    // Log the erorr and alert the user
    console.log('Something went wrong with the API call')
    alert('Failed to fetch data')
  } finally {
    // Finalize loading
    store.isLoading = false
  }
}

onMounted(() => {
  handleSelectChange()
})
</script>

<template>
  <div class="container rounded">
    <div class="card">
      <select class="form-select" v-model="store.selectedCoin" @change="handleSelectChange">
        <option v-for="coin in coinArr" :key="coin" :value="coin">{{ coin }}</option>
      </select>
    </div>
  </div>
</template>

<style scoped>
.container {
  margin-right: 1rem;
  display: flex;
  align-items: center;
  width: max-content;
  padding: 0.5rem 1rem;
  gap: 1rem;
}

@media (max-width: 768px) {
  .container {
    margin: auto 0;
  }
}

.btn {
  color: white;
  background-color: var(--blue-primary);
}
</style>
