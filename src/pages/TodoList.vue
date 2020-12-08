<template lang="pug">
.container
  //- input add list
  input(
    v-model="inputValue"
    @keyup.enter="createList"
    placeholder="請輸入待辦事項"
    type="text"
  )
  //- display list
  ul
    li.item(v-for="(item, index) in list" :key="index")
      p.list-content(
        @click="updateList(index, !item.isFinished)"
        :class="{ active: item.isFinished }"
      ) {{ item.text }}
      button.item-delete(@click="deleteList(index)") X
  div(v-if="list.length === 0") 暫無待辦事項
  router-link(to="/") Back Home
</template>

<script lang="ts" setup>
import { ref, computed } from "vue";
import { useStore } from "vuex";

const store = useStore();
const list = computed(() => store.state.list);
console.log(list);
const inputValue = ref("");
const createList = () => {
  store.commit("createList", {
    text: inputValue.value,
    isFinished: false,
  });
  inputValue.value = "";
};
const updateList = (index: number, status: boolean) => {
  console.log("pages", index, status);
  store.commit("updateList", {
    index,
    status,
  });
};
const deleteList = (index: number) => {
  store.commit("deleteList", index);
};
</script>

<style lang="scss" scoped>
.item {
  display: flex;
  align-items: center;
}
.list-content {
  cursor: pointer;
}
p.active {
  text-decoration: line-through;
  color: #999;
}
.item-delete {
  margin-left: 10px;
  width: 30px;
  height: 20px;
  border-radius: 8px;
}
</style>
