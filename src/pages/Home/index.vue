<template lang="pug">
div(class="home__wrap")
  div(class="demo")
    div(class="demo-1")
      | X座標：{{ x }} - Y座標：{{ y }}
    div(class="demo-2")
      span(v-if="loading")
        | Loading...
      img(v-if="loaded", :src="formData.message", alt="image")
    Modal
  ul(class="list__wrap")
    li(class="list__card", v-for="node in data", :key="node.etag", @click="useMousePosition")
      img(class="card__img", :src="node.snippet.thumbnails.medium.url", :alt="node.snippet.title")
      div(class="card__title ellipsis")
        | {{ node.snippet.title }}
      div(class="card__content")
        div(class="auther ellipsis")
          | {{ node.snippet.channelTitle }}
        div(class="publish__date")
          | {{ node.snippet.publishTime }}
</template>

<script lang="ts" setup>
import { ref, onMounted } from 'vue';
import { getYouTubeVideo } from '../../hooks/api';
import { useMousePosition } from '../../hooks/useMousePosition';
import { useURLLoader } from '../../hooks/useURLLoader';
import Modal from '../../components/Modal.vue'

interface DogResult {
  message: string
  status: string
}

const data = ref({} as {
  snippet: [];
});

const url = `https://www.googleapis.com/youtube/v3/`;
const apiKey = `AIzaSyDBsUbZjOqi_riKLo-jyBJYVzOY5PkERcc`;

// onMounted(async () => {
//   const { result } = await getYouTubeVideo(
//     `${url}search?part=snippet&key=${apiKey}&type=video&maxResults=12`
//   );
//   console.log(123)
//   data = result;
// });

// demo test
const { x, y } = useMousePosition();
const {
  formData,
  loading,
  loaded,
  error,
} = useURLLoader<DogResult>(`https://dog.ceo/api/breeds/image/random`);
</script>

<style lang="scss" scoped>
@use './styles.scss';

.demo-2 {
  img {
    width: 200px;
    height: 200px;
  }
}
</style>
