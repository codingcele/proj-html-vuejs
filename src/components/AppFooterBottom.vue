<script>

import { store } from "../store.js";

export default {
    name: "AppFooterBottom",
    data() {
        return {
            store,
        }
    },
}

</script>


<template>
    <div class="main">
        <div class="left">
            <div v-for="nav in store.FooterBottom.navs" class="nav">
                {{ nav.txt }}
                <span :class="{ invisible: !nav.bar }">|</span>
            </div>
        </div>
        <div class="right">
            <div v-for="fa in store.FooterBottom.fas" class="brand">
                <font-awesome-icon :icon=fa />
            </div>
        </div>
    </div>
</template>


<style lang = "scss" scoped>
.main {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 12vh;
    background-color: rgb(37, 42, 51);
    padding-left: 40px;
    padding-right: 40px;

    .left {
        display: flex;
    }

    .right {
        display: flex;



        .white {
            color: white;
        }
    }
}

.nav {
    font-family: sans-serif;
    font-size: 9px;
    color: rgb(121, 125, 134);

    span {
        padding-left: 5px;
        padding-right: 8px;
    }
}

.brand {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 11px;
    margin-right: 7px;
    color: rgb(121, 125, 134);
    width: 4.5vh;
    height: 4.5vh;
    cursor: pointer;
    background-color: rgb(50, 56, 68);
    border-radius: 3px;
}

.invisible {
    visibility: hidden;
}
</style>