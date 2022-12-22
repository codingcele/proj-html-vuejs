<script>

import { store } from "../store.js";

export default {
    name: "AppFooterTop",
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
            <img :src="store.FooterTop.img" alt="">
        </div>
        <div class="right">
            <div v-for="nav in store.FooterTop.navs" :class="{ white: nav.current }">
                {{ nav.txt }}
            </div>
        </div>
    </div>
</template>


<style lang = "scss" scoped>
.main {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 17vh;
    background-color: rgb(50, 56, 68);
    padding-left: 40px;
    padding-right: 40px;

    .left {

        img {
            width: 170px;
            cursor: pointer;
        }
    }

    .right {
        display: flex;

        div {
            font-family: serif;
            font-size: 10px;
            margin-right: 10px;
            color: rgb(121, 125, 134);
            cursor: pointer;
        }

        .white {
            color: white;
        }
    }
}
</style>