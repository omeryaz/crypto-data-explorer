<template>
  <div class="row mb-3">
    <!-- PRICE SKELETON -->
    <div class="card-container d-flex col-md-3 col-6 mb-3">
      <div class="card flex-grow-1 skeleton">
        <div class="card-header skeleton-text"></div>
        <div class="card-body card-body--price skeleton">
          <div class="skeleton skeleton-text"></div>
          <div class="skeleton skeleton-text"></div>
        </div>
      </div>
    </div>
    <!-- MARKET CAP SKELETON -->
    <div class="card-container d-flex col-md-3 col-6 mb-3">
      <div class="card flex-grow-1 skeleton">
        <div class="card-header skeleton-text"></div>
        <div class="card-body skeleton">
          <div class="skeleton skeleton-text"></div>
        </div>
      </div>
    </div>
    <!-- TRADING VOLUME SKELETON -->
    <div class="card-container d-flex col-md-3 col-6 mb-3">
      <div class="card flex-grow-1 skeleton">
        <div class="card-header skeleton-text"></div>
        <div class="card-body skeleton">
          <div class="skeleton skeleton-text"></div>
        </div>
      </div>
    </div>
    <!-- DOMINANCE SKELETON -->
    <div class="card-container d-flex col-md-3 col-6 mb-3">
      <div class="card flex-grow-1 skeleton">
        <div class="card-header skeleton-text"></div>
        <div class="card-body skeleton">
          <div class="skeleton skeleton-text"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.skeleton {
  background-color: hsl(200, 20%, 80%);
  animation: skeleton-loading 1s linear infinite alternate;
}

@keyframes skeleton-loading {
  0% {
    background-color: hsl(200, 20%, 60%);
  }
  100% {
    background-color: hsl(200, 20%, 95%);
  }
}

.skeleton-text {
  width: 100%;
  height: 0.7rem;
  margin-bottom: 0.5rem;
  border-radius: 0.25rem;
}

.skeleton-text__body {
  width: 75%;
}

.skeleton-footer {
  width: 30%;
}
</style>
