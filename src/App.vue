<template lang="pug">
#app
  Header(:text="text" :subText="subText")
  //- div {{ currentTime }}
  //- button(@click="getCurrentTime") 點擊顯示時間
  .app__container
    SideBar
    router-view
</template>

<script lang="ts" setup>
import Header from "./components/Header/index.vue";
import SideBar from "./components/SideBar/index.vue";
import { ref } from "vue";
// import { currentTime, getCurrentTime } from "./hooks/getTime";

ref: text = 'Vite';
ref: subText = 'Tube';
</script>

<style lang="scss">
@use './scss/main.scss';

.app__container {
  display: grid;
  grid-auto-flow: column;
  grid-template-columns: func.to-rem(160) 1fr;
}
</style>
