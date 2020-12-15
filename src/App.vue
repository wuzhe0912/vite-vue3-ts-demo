<template lang="pug">
#app
  Header(:text="text" :subText="subText")
  //- div {{ currentTime }}
  //- button(@click="getCurrentTime") 點擊顯示時間
  router-view
</template>

<script lang="ts" setup>
import Header from "./components/Header/index.vue";
import { ref } from "vue";
// import { currentTime, getCurrentTime } from "./hooks/getTime";

ref: text = 'Vite';
ref: subText = 'Tube';
</script>

<style lang="scss">
@use './scss/main.scss';
</style>
