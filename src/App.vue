<script>
import AppHeader from './components/AppHeader.vue';
import AppMusic from './components/AppMusic.vue';

import { store } from "./store.js";

export default {
  components: {
    AppHeader,
    AppMusic,
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
</template>

<style>
* {
  margin: 0;
  box-sizing: border-box;
  font-family: Verdana;
}
</style>
