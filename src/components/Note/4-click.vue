<template lang="pug">
.wrap
  h3 {{ num }}
  button(@click="addNumber") Click 
</template>

<script lang="ts">
import { ref } from 'vue'

export default {
  setup() {
    const num = ref(0)

    const addNumber = () => {
      num.value += 1
    }

    return { num, addNumber }
  }
}
</script>

<style lang="scss" scoped>
button {
  border: 2px solid blue;
}
</style>