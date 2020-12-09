<template lang="pug">
.wrap
  Order(:text="text")
  router-link(to="/") Back Home
</template>

<script lang="ts" setup>
import Order from "../components/Order.vue";
import { ref } from "vue";

ref: text = "Vite 點餐系統";
</script>

<style lang="scss" scoped></style>
