<template lang="pug">
.wrap {{ text }}
</template>

<script lang="ts">
import { ref } from 'vue'

export default {
  setup() {
    const text = ref('Hello Vue3!')

    setTimeout(() => {
      text.value = 'Hello Change Pitt'
    }, 1500)
  
    return { text }
  }
}
</script>

<style lang="scss" scoped></style>