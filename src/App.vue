<script>
import AppHeader from './components/AppHeader.vue';
import AppMusic from './components/AppMusic.vue';
import AppLatestNews from './components/AppLatestNews.vue';
import AppDates from './components/AppDates.vue';
import AppFooterTop from './components/AppFooterTop.vue';
import AppFooterBottom from './components/AppFooterBottom.vue';
import AppPlay from './components/AppPlay.vue';

import { store } from "./store.js";

export default {
  components: {
    AppHeader,
    AppMusic,
    AppLatestNews,
    AppDates,
    AppFooterTop,
    AppFooterBottom,
    AppPlay,
  },
  data() {
    return {
      store,
    }
  },
  methods: {
    overColor() {
      store.Header.BtnLatest = !store.Header.BtnLatest;
    },
    over() {
      store.Header.BtnLive = !store.Header.BtnLive;
    },
  }
}

</script>

<template>
  <AppHeader @changeColor="overColor" @change="over" />
  <AppMusic />
  <AppLatestNews />
  <AppPlay />
  <AppDates />
  <AppFooterTop />
  <AppFooterBottom />
</template>

<style>
* {
  margin: 0;
  box-sizing: border-box;
  font-family: Verdana;
}
</style>
