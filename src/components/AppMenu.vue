<script>

import { store } from "../store.js";

export default {
    name: "AppMenu",
    data() {
        return {
            store,
        }
    },
    methods: {
        submit() {
            this.$emit('closeMenu')
        }
    },
}

</script>


<template>
    <div class="menuHeader">
        <img :src="store.Menu.img" alt="">
        <div @click="$emit('closeMenu')">
            <font-awesome-icon :icon="store.Menu.fa" class="xmark" />
        </div>
    </div>
    <div class="main">
        <div class="nav" v-for="nav in store.Menu.navs" :class="{ white: nav.active }">
            {{ nav.text }}
        </div>
    </div>
</template>


<style lang = "scss" scoped>
.menuHeader {
    background-color: rgb(248, 74, 86);
    padding: 10px;

    img {
        width: 80px;
    }

    .xmark {
        color: rgb(248, 149, 158);
        cursor: pointer;
    }
}

.menuHeader {
    display: flex;
    justify-content: space-between;
}

.main {
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    padding: 5vh 10vh 10vh 10vh;
    background-color: rgb(248, 74, 86);

    .nav {
        margin-top: 2vh;
        margin-bottom: 2vh;
        color: rgb(234, 149, 158);
        cursor: pointer;
    }

    .white {
        color: white;
    }
}
</style>