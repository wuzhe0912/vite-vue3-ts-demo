<template lang="pug">
.wrap
  h3 {{ name }}
  div 年齡：{{ age }}
  button(@click="add") 年齡遞增+1
  div 計算年齡x2的結果： {{ double }}
</template>

<script>
import { computed, ref } from 'vue'

export default {
  name: 'todolist',

  setup() {
    const name = ref('Pitt');
    const age = ref(32);
    const double = computed(() => {
      return age.value * 2
    })
    function add() {
      age.value += 1
    }

    return { name, age, add, double };
  }
}
</script>