<script setup lang="ts">
import {env} from './types/helper';
console.log(import.meta.env.VITE_API_URL);
console.log(env);
console.log(env.VITE_SOME_KEY);
</script>

<template>
app.vue
<router-view />
</template>

<style>
</style>
