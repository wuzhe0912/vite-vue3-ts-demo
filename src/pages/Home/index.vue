<template lang="pug">
.home__wrap X座標：{{ x }} - Y座標：{{ y }}
  ul.list__wrap
    li.list__card(v-for="node in data" :key="node.etag" @click="trackingMouse")
      img.card__img(:src="node.snippet.thumbnails.medium.url", :alt="node.snippet.title")
      .card__title.ellipsis {{ node.snippet.title }}
      .card__content
        .auther.ellipsis {{ node.snippet.channelTitle }}
        .publish__date {{ node.snippet.publishTime }}
</template>

<script lang="ts" setup>
import { ref, onMounted } from 'vue';
import { getYouTubeVideo } from '../../hooks/api';
import { useMousePosition } from '../../hooks/useMousePosition';

ref: data = {} as {
  snippet: [];
};

const { x, y } = useMousePosition();

const url = `https://www.googleapis.com/youtube/v3/`;
const apiKey = `AIzaSyDBsUbZjOqi_riKLo-jyBJYVzOY5PkERcc`;

onMounted(async () => {
  const { result } = await getYouTubeVideo(
    `${url}search?part=snippet&key=${apiKey}&type=video&maxResults=12`
  );
  data = result;
});
</script>

<style lang="scss" scoped>
@use './styles.scss';
</style>
