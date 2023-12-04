<!-- src/components/SkeletonLoader.vue -->
<template>
  <div class="skeleton-loader"></div>
</template>

<style scoped>
.skeleton-loader {
  width: 1034px;
  height: 580px;
  margin: auto;
  margin-top: 16px;
  background: #f0f0f0;
  animation: loading 1.5s infinite;
}

@keyframes loading {
  0% {
    background: #f0f0f0;
  }
  50% {
    background: #e0e0e0;
  }
  100% {
    background: #f0f0f0;
  }
}
</style>
