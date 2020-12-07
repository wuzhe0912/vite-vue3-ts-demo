<template lang="pug">
.wrap
  h3 {{ name }}
  div 年齡：{{ age }}
  button(@click="add") 年齡遞增+1
  div 計算年齡x2的結果： {{ double }}
</template>

<script>
import { computed, reactive, toRefs } from 'vue'

export default {
  name: 'todolist',

  setup() {
    const state = reactive({
      name: 'Pitt',
      age: 32,
      double: computed(() => {
        return state.age * 2
      })
    })

    function add() {
      state.age += 1
    }

    return { ...toRefs(state), add };
  }
}
</script>