<template lang="pug">
.home
  router-link(to="/todolist") TodoList
  router-link(to="/about") About
</template>

<script lang="ts">
// import { ref } from 'vue'

export default {
  name: 'home'
}
</script>

<style>
  .home {
    display: flex;
    justify-content: space-between;
    width: 150px;
  }
</style>