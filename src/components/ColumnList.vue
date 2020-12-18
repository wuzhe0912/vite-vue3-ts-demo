<template lang="pug">
div.wrap column list
</template>

<script lang="ts" setup>
import { defineComponent, PropType } from 'vue';

interface ColumnProps {
  id: number;
  title: string;
  avatar: string;
  description: string;
}

defineComponent({
  name: 'ColumnList',
  props: {
    type: Array as PropType<ColumnProps[]>,
    required: true,
  },
});
</script>

<style lang="scss" scoped></style>
