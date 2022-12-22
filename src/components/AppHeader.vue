<script>

import { store } from "../store.js";

export default {
    name: "AppHeader",
    data() {
        return {
            store,
        }
    },
    methods: {
        submit() {
            this.$emit('changeColor')
        }
    },
}

</script>


<template>
    <header>
        <div class="pink-div"></div>
        <div class="top">
            <img :src=store.Header.img alt="">
            <div class="menu">
                <font-awesome-icon :icon=store.Header.fa />
            </div>
        </div>
        <div class="center">
            <h1 class="untold">
                Untold Stories
            </h1>
            <span class="phrase">
                There is an untold story behind every favorite song.
            </span>
            <div class="buttons">
                <div class="button latest" :class="{ change: store.Header.BtnLatest }" @mouseover="$emit('changeColor')"
                    @mouseout="$emit('default')">
                    LATEST ALBUM
                </div>
                <div class="button live">
                    LIVE DATES
                </div>
            </div>
        </div>
    </header>
</template>


<style lang = "scss" scoped>
header {
    height: 110vh;
    background-image: url("../assets/img/home_slider.jpg");
    background-size: cover;
    background-position-y: -50px;

    .top {
        display: flex;
        justify-content: space-between;
        padding: 40px;

        img {
            cursor: pointer;
        }

        .menu {
            display: flex;
            align-items: center;
            color: white;
            font-size: 30px;
            cursor: pointer;
            padding: 10px;
        }
    }

    .center {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        height: calc(100% - 155px);

        .untold {
            color: white;
            font-size: 80px;
        }

        .phrase {
            color: white;
            padding: 15px;
            font-family: serif;
            font-size: 18px;
        }

        .buttons {
            display: flex;
            padding: 20px;

            .button {
                margin: 7px;
                padding: 10px 25px;
                border-radius: 2px;
                text-align: center;
                font-size: 12px;
                color: white;
                cursor: pointer;
            }

            .latest {
                background-color: rgb(234, 74, 86);
            }

            .live {
                border: 1px solid white;
            }

            .change {
                color: black;
                background-color: white;
            }
        }
    }

    .pink-div {
        position: relative;
        left: 36.2vw;
        top: 110vh;
        height: 10px;
        width: 26vw;
        background-color: rgb(234, 74, 86);
    }
}
</style>