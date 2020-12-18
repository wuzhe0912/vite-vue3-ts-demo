<template lang="pug">
.wrap
  div {{ state.text }}
  div {{ state.num }}
  div {{ state.name }}
</template>

<script lang="ts">
import { reactive } from "vue";

export default {
  setup() {
    const state = reactive({
      text: 'Player',
      num: 12,
      name: 'Pitt',
    });

    setTimeout(() => {
      state.num = 4;
    }, 1500);

    return { state };
  },
};
</script>

<style lang="scss" scoped></style>
