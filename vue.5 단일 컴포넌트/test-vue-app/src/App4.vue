<script setup>
import { ref } from "vue";
import CheckboxItem4 from "./components/CheckboxItem4.vue";

const idols = ref([
  { id: 1, name: "BTS", checked: true },
  { id: 2, name: "Black Pink", checked: false },
  { id: 3, name: "EXO", checked: false },
  { id: 4, name: "ITZY", checked: false },
]);
</script>

<template>
  <div class="app">
    <h1>App 컴포넌트</h1>
    <hr />
    <CheckboxItem4 v-for="idol in idols" :key="idol.id" :idol="idol" />
  </div>
</template>

<style scoped></style>
