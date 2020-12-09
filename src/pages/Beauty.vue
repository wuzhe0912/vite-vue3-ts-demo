<template lang="pug">
.wrap
  button(@click="getImgApi") 取得圖片
  img(:src="formData.message", alt="img")
  router-link(to="/") Back Home
</template>

<script lang="ts" setup>
import { ref, computed } from "vue";
import { getBeautyImg } from "../hooks/api";

ref: formData = {} as {
  message: string;
  status: string;
};
const getImgApi = async () => {
  const { result, loading } = await getBeautyImg(
    "https://dog.ceo/api/breeds/image/random"
  );
  formData = result;
};
</script>

<style lang="scss" scoped></style>
