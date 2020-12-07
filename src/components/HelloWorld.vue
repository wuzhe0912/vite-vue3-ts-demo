<template lang="pug">
.container
  h1 {{ data }}
</template>

<script>
import { ref } from 'vue'

export default {
  name: 'HelloWorld',

  props: {
    msg: String
  },

  setup(props) {
    const data = ref(props.msg);

    return { data };
  }
}
</script>
