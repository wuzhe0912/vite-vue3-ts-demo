<template lang="pug">
.container
  h1 {{ msg }}
  button(@click="count++") count is: {{ count }}
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data() {
    return {
      count: 0
    }
  }
}
</script>
