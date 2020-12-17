<template lang="pug">
.wrap {{ state.text }}
</template>

<script lang="ts">
import { reactive } from 'vue'

export default {
  setup() {
    const state = reactive({
      text: 'Player'
    })

    return { state }
  }
}
</script>

<style lang="scss" scoped></style>