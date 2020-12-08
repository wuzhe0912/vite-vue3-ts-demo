<template lang="pug">
.wrap
  h2 Hello Vite Vue3
  router-view
  //- Demo
</template>

<script lang="ts">
// import Demo from './components/Demo.vue'
import { reactive, toRefs } from "vue";

export default {
  name: "App",

  components: {
    // Demo
  },

  setup() {
    const state = reactive({
      msg: "Vite props text",
    });

    function showText(params) {
      console.log(params);
    }

    return { ...toRefs(state), showText };
  },
};
</script>

<style lang="scss" scoped>
.wrap {
  display: flex;
  width: 100%;
  justify-content: center;
  flex-direction: column;
  align-items: center;
}
</style>
