<template lang="pug">
.wrap
  HelloWorld(msg="Hello Vue 3.0 + Vite")
  TodoList
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import TodoList from './components/TodoList.vue'

export default {
  name: 'App',
  components: {
    HelloWorld,
    TodoList
  }
}
</script>
