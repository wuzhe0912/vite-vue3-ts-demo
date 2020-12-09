<template lang="pug">
.wrap
  button(@click="getImgApi") 取得圖片
  img(:src="res.message", alt="img")
  router-link(to="/") Back Home
</template>

<script lang="ts" setup>
import { ref } from "vue";
import { getBeautyImg } from "../hooks/api";

ref: res = String;
const getImgApi = () => {
  const { result, loading } = getBeautyImg("https://apiblog.jspang.com/default/getGirl");
};
</script>

<style lang="scss" scoped></style>
