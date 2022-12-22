<script>
import AppHeader from './components/AppHeader.vue';
import AppMusic from './components/AppMusic.vue';
import AppLatestNews from './components/AppLatestNews.vue';
import AppDates from './components/AppDates.vue';
import AppFooterTop from './components/AppFooterTop.vue';
import AppFooterBottom from './components/AppFooterBottom.vue';

import { store } from "./store.js";

export default {
  components: {
    AppHeader,
    AppMusic,
    AppLatestNews,
    AppDates,
    AppFooterTop,
    AppFooterBottom,
  },
  data() {
    return {
      store,
    }
  },
  methods: {
    overColor() {
      store.Header.BtnLatest = true;
    },
    backNormal() {
      store.Header.BtnLatest = false;
    }
  }
}

</script>

<template>
  <AppHeader @changeColor="overColor" @default="backNormal" />
  <AppMusic />
  <AppLatestNews />
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
