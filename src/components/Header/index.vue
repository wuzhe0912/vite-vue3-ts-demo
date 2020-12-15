<template lang="pug">
header.header__wrap
  .logo__container
    .logo__image
      img(src="./images/logo.png", alt="logo")
    h2.logo__title {{ title }}
      span {{ subTitle }}
  nav.nav__list
    router-link.list(
      v-for="node in navList"
      :key="node.code"
      :to="node.path"
    ) {{ node.name }}
  //- .social__links
  //-   .links(v-for="node in socialList" :key="node.icon")
  //-     font-awesome-icon(:icon="node.icon") {{ node.icon }}
</template>

<script lang="ts" setup>
import { ref, defineProps } from 'vue';

const props = defineProps({
  text: { type: String, required: true },
  subText: { type: String, required: true },
});

ref: title = props.text;
ref: subTitle = props.subText;
ref: navList = [
  { code: 'home', name: '首頁', path: '/' },
  { code: 'favorites', name: '收藏', path: '/favorites' },
]
ref: socialList = [
  { icon: 'facebook' },
  { icon: 'twitter' },
  { icon: 'instagram' },
  { icon: 'github' },
]
</script>

<style lang="scss" scoped>
@use './styles.scss';
</style>