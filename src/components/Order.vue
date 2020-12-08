<template lang="pug">
.container
  h3 {{ title }}
  div 請選擇任一餐點：
    button(
      v-for="(item, index) in menuList"
      @click="selectFood(index)"
      :key="index"
    ) {{ item }}
  div 你選擇了： {{ isSelected }}
  button(@click="overAction") complete
</template>

<script lang="ts" setup>
import { ref, defineProps } from "vue";

const props = defineProps({
  text: { type: String, required: true },
});

ref: title = props.text;
ref: menuList = ["炸雞", "薯條", "可樂"];
ref: isSelected = "";
const selectFood = (index: number) => {
  isSelected = menuList[index];
};
const overAction = () => {
  title = title + "選擇完成";
};
</script>

<style lang="scss" scoped>
button {
  margin-right: 10px;
  cursor: pointer;
}
</style>
