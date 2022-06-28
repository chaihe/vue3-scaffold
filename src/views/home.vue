<!-- home -->
<template>
  <div class="bg-red-50">
    <h2>chai-home</h2>
    <button @click="btnEmitClick">btnEmitClick</button>
    <canvas ref="renderCanvas" touch-action="none"></canvas>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
import { Scheme } from "../enum/scheme.js";
import BabylonYD from "babylon-yd";

const renderCanvas = ref(null);
let yd: any = null;

onMounted(() => {
  yd = new BabylonYD(renderCanvas.value);
  initMitt();
});

function initMitt() {
  const ydMitter = window.YDMITTER;
  ydMitter.on(Scheme.NeedLogin, (e) => console.log(Scheme.NeedLogin, e));
  ydMitter.on("*", (type, e) => console.log(type, e));
}

function btnEmitClick() {
  yd.ydSchemeEmit();
}
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
