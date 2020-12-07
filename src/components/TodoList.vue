<template lang="pug">
.wrap
  h3 {{ state.name }}
  div 年齡：{{ state.age }}
  button(@click="add") 年齡遞增+1
  div 計算年齡x2的結果： {{ state.double }}
</template>

<script>
import { computed, reactive } from 'vue'

export default {
  name: 'todolist',

  setup() {
    const state = reactive({
      msg: 'Pitt',
      age: 32,
      double: computed(() => {
        return state.age * 2
      })
    })

    function add() {
      state.age += 1
    }

    return { state, add };
  }
}
</script>