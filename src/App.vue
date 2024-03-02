<script setup lang="ts">
// In your main.js or similar entry file
import DataGrid from './components/DataGrid.vue'
import CoinHeader from './components/CoinHeader/CoinHeader.vue'
</script>

<template>
  <div class="page-container">
    <main class="container main-container">
      <CoinHeader></CoinHeader>
      <DataGrid></DataGrid>
    </main>
  </div>
</template>

<style scoped>
.page-container {
  padding-top: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
}

.main-container {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}
</style>
