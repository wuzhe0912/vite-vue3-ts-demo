<template lang="pug">
.wrap
  HelloWorld(:msg="msg" @change="showText")
  Demo
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import Demo from './components/Demo.vue'
import { reactive, toRefs } from 'vue'

export default {
  name: 'App',

  components: {
    HelloWorld,
    Demo
  },

  setup() {
    const state = reactive({
      msg: 'Vite props text'
    })

    function showText(params) {
      console.log(params);
    }

    return { ...toRefs(state), showText };
  }
}
</script>
