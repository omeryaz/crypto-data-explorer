<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps({
  title: String,
  icon: String,
  value: String,
  change: {
    type: Number,
    default: null
  }
})

const changeText = computed(() => {
  if (props.change !== null) {
    return `${props.change.toFixed(1)}%`
  }
  return null
})

const changeColor = computed(() => {
  if (props.change !== null) {
    return props.change > 0 ? 'green' : 'red'
  }
  return null
})

const changeIcon = computed(() => {
  if (props.change !== null) {
    return props.change > 0 ? 'bi-arrow-up-short' : 'bi-arrow-down-short'
  }
  return null
})

const changeTextColorStyle = computed(() => ({
  color: changeColor.value
}))
</script>

<template>
  <div class="card-container d-flex col-md-3 col-6 mb-3">
    <div class="card flex-grow-1">
      <div class="card-header">{{ title }}</div>
      <div class="card-body">
        <!-- RENDER CURRENCY ICON -->
        <template v-if="icon">
          <v-icon class="card__currency-icon" :name="icon" scale="0.8"></v-icon>
        </template>
        <h5 class="card-title">{{ value }}</h5>
        <p class="card-text" v-if="changeText">
          <span class="card-text--percentage" :style="changeTextColorStyle as Record<string, any>">
            <template v-if="changeIcon">
              <!-- RENDER ARROW ICON -->
              <v-icon :name="changeIcon" scale="0.8" :fill="changeColor"></v-icon> </template
            >{{ changeText }}
          </span>
        </p>
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
