<template lang="pug">
.home
  router-link(to="/todolist") TodoList
  router-link(to="/menu") Menu
</template>

<script lang="ts">
export default {
  name: "home",
};
</script>

<style>
.home {
  display: flex;
  justify-content: space-between;
  width: 150px;
}
</style>
