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
  { label: "Video", path: "/video" },
];
</script>

<style>
.home {
  display: flex;
  flex-wrap: wrap;
  width: 200px;
}

.link {
  margin-right: 12px;
}
</style>
