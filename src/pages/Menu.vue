<template lang="pug">
.wrap
  Order(:text="text")
  router-link.back-btn(to="/") Back Home
</template>

<script lang="ts" setup>
import Order from "../components/Order.vue";
import { ref } from "vue";

ref: text = "Vite 點餐系統";
</script>

<style lang="scss" scoped>
.back-btn {
  margin-top: 20px;
  border: 1px solid #999;
  padding: 10px;
  border-radius: 8px;
}
</style>
