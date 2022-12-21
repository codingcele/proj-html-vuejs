<script>
import AppHeader from './components/AppHeader.vue';

import { store } from "./store.js";

export default {
  components: {
    AppHeader,
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
</template>

<style>
* {
  margin: 0;
  box-sizing: border-box;
  font-family: Verdana;
}
</style>
