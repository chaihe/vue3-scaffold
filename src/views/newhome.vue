<!-- home -->
<template>
  <div class="container mx-auto px-4">
    <Banner />
    <Product />
    <Info />
  </div>
</template>

<script setup lang="ts">
import { onMounted } from "vue";
import Banner from "../components/home/Banner.vue";
import Info from "../components/home/Info.vue";
import Product from "../components/home/Product.vue";

onMounted(() => {
  console.log("onMounted");
});
</script>

<style scoped>
.container {
  min-width: 648px;
}
</style>
