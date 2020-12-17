<template lang="pug">
.wrap {{ text }}
  h2 {{ newName }}
  input.btn(v-model="newName" type="text")
  h2 {{ subName }}
  input.btn(v-model="subName" type="text")
</template>

<script lang="ts">
import { reactive, ref, toRefs } from 'vue'

export default {
  setup() {
    const state = reactive({
      text: 'New Player',
      newName: 'Type Anything'
    })
    const subName = ref('Type Anything')

    return { ...toRefs(state), subName }
  }
}
</script>

<style lang="scss" scoped>
.btn {
  border: 1px solid black;
  margin: 10px 0;
}
</style>