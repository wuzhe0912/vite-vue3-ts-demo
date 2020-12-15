<template lang="pug">
.home 2342342
  ul 123
</template>

<script lang="ts" setup>
import { ref, onMounted } from 'vue';
import { getYouTubeVideo } from '../../hooks/api';

ref: data = {} as {
  snippet: [];
};
const apiKey = `AIzaSyDBsUbZjOqi_riKLo-jyBJYVzOY5PkERcc`;
// const { result } = await getYouTubeVideo(
//   `https://www.googleapis.com/youtube/v3/search?part=snippet&key=${apiKey}&type=video&maxResults=20`
// );
// data = result;
// console.log('home', data);
onMounted(() => {
  console.log('onMounted');
  const getVideoList = () => {
    console.log(123);
  }
});
</script>

<style lang="scss" scoped>
@use './styles.scss';
</style>
