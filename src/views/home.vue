<!-- home -->
<template>
  <div class="bg-red-50">
    <h2>chai-home</h2>
    <canvas ref="renderCanvas" touch-action="none"></canvas>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
import BabylonYD from "babylon-yd";
import mitt from "mitt";

const renderCanvas = ref(null);

onMounted(() => {
  let yd = new BabylonYD(renderCanvas.value);
  console.log("BabylonYD ", yd);
});
</script>

<style scoped>
html,
body {
  overflow: hidden;
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
}

#renderCanvas {
  width: 100%;
  height: 100%;
  touch-action: none;
}
</style>
