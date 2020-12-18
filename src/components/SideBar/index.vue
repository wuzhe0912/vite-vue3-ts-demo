<template lang="pug">
aside(class="side__wrap")
  router-link(class="side__list", v-for="node in navList", :key="node.code", :to="node.path")
    | {{ node.name }}
</template>

<script lang="ts" setup>
import { ref } from "vue";

ref: navList = [
  { code: "home", name: "首頁", path: "/" },
  { code: "favorites", name: "收藏", path: "/favorites" },
  { code: "note", name: "Note", path: "/note" },
];
</script>

<style lang="scss" scoped>
@use './styles.scss';
</style>
