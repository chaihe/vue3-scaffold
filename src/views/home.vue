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
import BabylonYD from "babylon-yd";
import { Scheme } from "../enum/scheme.js";

const renderCanvas = ref(null);
let yd: any = null;

onMounted(() => {
  const ydMitter = window.YDMITTER;
  console.log("this is ", window);
  console.log("this issss ", window.YDMITTER);
  console.log("this issss ", window.CHAI);
  yd = new BabylonYD(renderCanvas.value);
  ydMitter.on(Scheme.NeedLogin, (e) => console.log("foo", e));
  ydMitter.on("*", (type, e) => console.log(type, e));
});
function btnEmitClick() {
  console.log("btnEmitClick");
  // yd.ydScheme();
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
