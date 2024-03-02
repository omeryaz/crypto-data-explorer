<script setup lang="ts">
import CoinSelect from './subcomponents/CoinSelect.vue'
import CoinInfo from './subcomponents/CoinInfo.vue'
</script>

<template>
  <div class="container flex-md-row-reverse flex-column">
    <CoinSelect></CoinSelect>
    <CoinInfo></CoinInfo>
  </div>
</template>

<style scoped>
.container {
  display: flex;
  justify-content: space-between;
}

@media (max-width: 768px) {
  .container {
    align-items: center;
    gap: 1rem;
  }
}
</style>
