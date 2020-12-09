<template lang="pug">
.home
  router-link.link(v-for="item in list" :key="item.label" :to="item.path") {{ item.label }} 
</template>

<script lang="ts" setup>
import { ref } from "vue";

ref: list = [
  { label: "TodoList", path: "/todolist" },
  { label: "Menu", path: "/menu" },
  { label: "Beauty", path: "/beauty" },
];
</script>

<style>
.home {
  display: flex;
  justify-content: space-between;
  width: 200px;
}
</style>
