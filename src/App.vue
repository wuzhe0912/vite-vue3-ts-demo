<template lang="pug">
.wrap
  h2 Hello Vite Vue3
  div {{ currentTime }}
  button(@click="getCurrentTime") 點擊顯示時間
  router-view
  //- Demo
</template>

<script lang="ts" setup>
import { currentTime, getCurrentTime } from "./hooks/getTime";
</script>

<style lang="scss" scoped>
.wrap {
  display: flex;
  width: 100%;
  justify-content: center;
  flex-direction: column;
  align-items: center;
}
button {
  margin: 10px 0;
}
</style>
