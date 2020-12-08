<template lang="pug">
.wrap
  h3 {{ name }}
  div 年齡：{{ age }}
  button(@click="add") 年齡遞增+1
  div 計算年齡x2的結果： {{ double }}
</template>

<script>
import { ref, computed, reactive, toRefs, watch } from 'vue'

export default {
  name: 'demo',

  setup() {
    const state = reactive({
      name: 'Pitt',
      age: 32,
      double: computed(() => {
        return state.age * 2
      })
    })

    watch(() => state.age, (newVal, oldVal, clean) => {
      console.log(`${state.name}，改變前年齡：${oldVal}，改變後年齡：${newVal}`)
      // 初始化
      clean(
        () => {
          console.log('clean')
        }
      )
    })

    function add() {
      state.age += 1
    }

    return { ...toRefs(state), add };
  }
}
</script>