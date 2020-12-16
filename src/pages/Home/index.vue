<template lang="pug">
.home__wrap
  ul.list__wrap
    li.list__card(v-for="node in data" :key="node.etag")
      img.card__img(:src="node.snippet.thumbnails.medium.url", :alt="node.snippet.title")
      span {{ node.snippet.title }}
</template>

<script lang="ts" setup>
import { ref, onMounted } from 'vue';
import { getYouTubeVideo } from '../../hooks/api';

ref: data = {} as {
  snippet: [];
};

const url = `https://www.googleapis.com/youtube/v3/`;
const apiKey = `AIzaSyDBsUbZjOqi_riKLo-jyBJYVzOY5PkERcc`;

onMounted(async () => {
  console.log('onMounted');
  const { result } = await getYouTubeVideo(
    `${url}search?part=snippet&key=${apiKey}&type=video&maxResults=12`
  );
  data = result;
});
</script>

<style lang="scss" scoped>
@use './styles.scss';
</style>
