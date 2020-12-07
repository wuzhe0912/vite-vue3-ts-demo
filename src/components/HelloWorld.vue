<template lang="pug">
.container
  h1 {{ data }}
  button(@click="changeText()") 子組件印出 console
</template>

<script>
import { ref } from 'vue'

export default {
  name: 'HelloWorld',

  props: {
    msg: String
  },

  setup(props, context) {
    const data = ref(props.msg);

    function changeText() {
      context.emit('change', 'Hello Vite Vue3')
    }

    return { data, changeText };
  }
}
</script>
