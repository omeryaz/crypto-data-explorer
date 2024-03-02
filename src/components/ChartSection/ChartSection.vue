<script setup lang="ts">
import OpenCloseChart from './subcomponents/OpenCloseChart.vue'
import RangeSelect from './subcomponents/RangeSelect.vue'
import CandleStickTest from './subcomponents/CandleStickChart.vue'
</script>

<template>
  <div>
    <RangeSelect></RangeSelect>
    <div class="row flex-md-row flex-column row-gap-3">
      <div class="col chart">
        <OpenCloseChart></OpenCloseChart>
      </div>
      <div class="col chart">
        <CandleStickTest></CandleStickTest>
      </div>
    </div>
  </div>
</template>

<style scoped>
.chart {
  transform: scaleY(0.9);
}
</style>
