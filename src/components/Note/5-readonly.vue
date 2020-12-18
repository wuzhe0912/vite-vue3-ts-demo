<template lang="pug">
.wrap
  h3 {{ num }}
  button(@click="Func") Btn
  button(@click="Func2") Btn2
</template>

<script lang="ts">
import { readonly, ref } from 'vue'

export default {
  setup() {
    const num = ref(12)
    // 透過 readonly 複製出來的資料不可修改
    const copyNum = readonly(num)
    const Func = () => {
      num.value ++
      console.log(copyNum)
    }

    const Func2 = () => {
      num.value ++
    }

    return { num, Func, Func2 }
  }
}
</script>

<style lang="scss" scoped></style>