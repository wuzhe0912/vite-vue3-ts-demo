<template lang="pug">
.wrap
  //- iframe(v-if="isOpen" width="400" height="315" :src="youtubeUrl", frameborder="0")
  input(type="text" placeholder="搜尋影片" v-model="search" @keyup.enter="goSearch('search')")
  ul.list(v-for="node in data" :key="node.etag")
    li(@click="goSearch(node.id.videoId)") {{ node.snippet.description }}
      iframe(v-if="isOpen" width="100%" height="415" :src="youtubeUrl", frameborder="0")
</template>

<script lang="ts" setup>
import { ref, onMounted } from 'vue';
import { getVideo } from '../hooks/api';

ref: search = '';
ref: data = {} as {
  etag: string;
  items: [];
};
ref: videoData = '';
ref: youtubeUrl = '';
ref: isOpen = false;

const apiKey = `AIzaSyDBsUbZjOqi_riKLo-jyBJYVzOY5PkERcc`;

const goSearch = async (id: string) => {
  if (id === 'search') {
    const { result } = await getVideo(
      `https://www.googleapis.com/youtube/v3/search?part=snippet&q=${search}&key=${apiKey}&type=video&maxResults=20`
    );
    data = result;
  } else {
    const { result } = await getVideo(
      `https://www.googleapis.com/youtube/v3/videos?id=${id}&key=${apiKey}&part=snippet`
    );
    videoData = result;
    console.log('video', videoData);
    isOpen = true;
    youtubeUrl = `https://www.youtube.com/embed/${id}`;
  }
};
</script>

<style lang="scss" scoped></style>
