<script setup lang="ts">
import { env } from "./types/helper";
import user from "npm_chai";

console.log(import.meta.env.VITE_API_URL);
console.log(env);
console.log(env.VITE_SOME_KEY);
const userchai = new user("apple");
console.log(userchai);

console.log(user);
</script>

<template>
  app.vue
  <router-view />
</template>

<style></style>
