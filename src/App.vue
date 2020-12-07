<template lang="pug">
.wrap
  HelloWorld(:msg="msg" @change="showText")
  TodoList
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import TodoList from './components/TodoList.vue'
import { reactive, toRefs } from 'vue'

export default {
  name: 'App',

  components: {
    HelloWorld,
    TodoList
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
