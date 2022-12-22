<script>

import { store } from "../store.js";

import AppMenu from './AppMenu.vue'


export default {
    name: "AppHeader",
    data() {
        return {
            store,
        }
    },
    components: {
        AppMenu,
    },
    methods: {
        submit() {
            this.$emit('changeColor')
        },
        activity() {
            store.Menu.hidden = !store.Menu.hidden;
        },
    },
}

</script>


<template>
    <header>
        <div class="pink-div"></div>
        <div class="top">
            <img :src=store.Header.img alt="">
            <div class="menu">
                <span :class="{ clicked: !store.Menu.hidden }">
                    <font-awesome-icon :icon=store.Header.fa class="fontMenu" @click="activity" />
                </span>
            </div>
        </div>
        <div class="center">
            <div class="menuContainer" :class="{ active: store.Menu.hidden }">
                <AppMenu @closeMenu="activity" />
            </div>
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
                <div class="button live" :class="{ change: store.Header.BtnLive }" @mouseover="$emit('change')"
                    @mouseout="$emit('def')">
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

            span {
                position: relative;
                left: 15px;
                padding: 10px 15px;
                border-radius: 50%;

                .fontMenu {
                    cursor: pointer;
                }
            }
        }
    }

    .center {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        height: calc(100% - 155px);

        .menuContainer {
            position: absolute;
            right: 40px;
            top: 140px;

        }

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

        .active {
            visibility: hidden;
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

.clicked {
    background-color: rgba(155, 155, 155, 0.3);
}
</style>